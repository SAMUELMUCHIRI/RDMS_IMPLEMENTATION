<script setup lang="ts">
import { ref, onMounted } from "vue";

import { useSqlStore } from "@/state/useSqlStore";
// UI components
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import mainlayout from "@/components/mainlayout.vue";

//slotted Components
import tables_component from "@/components/tables.vue";
import result from "@/components/result.vue";

// composables
import { useSQLite } from "@/composables/useSQLite";

const { isLoading, error, executeQuery } = useSQLite();
const sqlQuery = ref("SELECT * FROM test_table");

const queryResult = ref<any[]>([]);
const queryError = ref<string | null>(null);
let table_error = ref<string | null>(null);
let table_result = ref<any[]>([]);
let success = ref<boolean>(false);
let store = useSqlStore();
let logs = ref<string[]>([]);

// Predefined example queries for testing
const exampleQueries = [
    { title: "Select all", query: "SELECT * FROM test_table" },
    {
        title: "Insert",
        query: "INSERT INTO test_table (name) VALUES ('New Test Item')",
    },
    {
        title: "Update",
        query: "UPDATE test_table SET name = 'Updated Item' WHERE name LIKE 'New%'",
    },
    {
        title: "Delete",
        query: "DELETE FROM test_table WHERE name = 'Updated Item'",
    },
];

//functions
//
async function runQuery() {
    queryError.value = null;
    queryResult.value = [];

    try {
        const result = await executeQuery(sqlQuery.value);
        queryResult.value = result.result.resultRows;
        loadtables();

        store.addLog({ success: true, sql: result.result.sql });
    } catch (err) {
        queryError.value =
            err instanceof Error ? err.message : "An error occurred";
        store.addLog({
            success: false,
            sql: sqlQuery.value,
            error: err.message,
        });
    }
}

async function loadtables() {
    const sql = `
    SELECT name
    FROM sqlite_master
    WHERE type = 'table'
      AND name NOT LIKE 'sqlite_%'
    ORDER BY name;
  `;

    try {
        const result = await executeQuery(sql);
        // resultRows is an array of objects if rowMode: "object" is set
        table_result.value = result?.result?.resultRows ?? [];
        const tables: Array<{ name: string; columns: Array<string> }> = [];
        for (const table of table_result.value) {
            const result = await executeQuery(
                `PRAGMA table_info(${table.name})`,
            );
            // resultRows is an array of objects if rowMode: "object" is set

            console.log(`${table.name}:`, result?.result?.resultRows);
        }
    } catch (err: any) {
        table_error.value =
            err?.result?.message ?? err?.message ?? "An error occurred";
        console.error("Error loading tables:", table_error.value);
    }
}

onMounted(async () => {
    await loadtables();
});
</script>

<template>
    <div class="h-dvh w-full">
        <mainlayout>
            <template #input>
                <!-- Query input -->
                <div class="mt-6 flex flex-col gap-4">
                    <Textarea
                        v-model="sqlQuery"
                        rows="10"
                        class="w-full h-32 px-3 py-2 rounded-md font-mono text-sm"
                        :disabled="isLoading"
                    />
                    <div class="mt-2">
                        <button
                            :disabled="isLoading"
                            class="rounded-lg bg-blue-600 px-4 py-2 text-white"
                            @click="runQuery"
                        >
                            {{ isLoading ? "Running..." : "Run Query" }}
                        </button>
                    </div>
                </div>

                <div
                    v-if="error || queryError"
                    class="mt-4 rounded-lg bg-red-50 p-4 text-red-600"
                >
                    {{ error?.message || queryError }}
                </div>
                <div
                    v-if="success"
                    class="mt-4 rounded-lg bg-green-50 p-4 text-green-600"
                >
                    {{ successMessage }}
                </div>
            </template>
            <template #tables>
                <tables_component
                    :tables="table_result"
                    @refresh="loadtables"
                />
            </template>
            <template #result>
                <result :queryResult="queryResult" />
            </template>
        </mainlayout>
    </div>
</template>
