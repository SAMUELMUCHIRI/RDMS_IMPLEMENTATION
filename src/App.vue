<script setup lang="ts">
import { ref, onMounted } from "vue";

import { useSqlStore } from "@/state/useSqlStore";
// UI components
import { Textarea } from "@/components/ui/textarea";

import mainlayout from "@/components/mainlayout.vue";

//slotted Components
import tables_component from "@/components/tables.vue";
import result from "@/components/result.vue";

// composables
import { useSQLite } from "@/composables/useSQLite";

const { isLoading, error, executeQuery } = useSQLite();
const sqlQuery = ref("SELECT * FROM test_table");
type QueryResultRow = Record<string, any>;
const queryResult = ref<QueryResultRow[]>([]);
const queryError = ref<string | null>(null);
let table_error = ref<string | null>(null);
let table_result = ref<any[]>([]);

let store = useSqlStore();

//functions
//
async function runQuery() {
    queryError.value = null;
    queryResult.value = [];

    try {
        const result = await executeQuery(sqlQuery.value);
        if (result.result.resultRows) {
            queryResult.value = result.result.resultRows as QueryResultRow[];
        } else {
            queryResult.value = [];
        }
        loadtables();

        store.addLog({
            success: true,
            sql: result.result.sql,
            timestamp: Date.now(),
        });
    } catch (err: unknown) {
        queryError.value =
            err instanceof Error ? err.message : "An error occurred";
        store.addLog({
            success: false,
            sql: sqlQuery.value as string,
            error: err instanceof Error ? err.message : String(err),
            timestamp: Date.now(),
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
        </template>
        <template #tables>
            <tables_component :tables="table_result" @refresh="loadtables" />
        </template>
        <template #result>
            <result :queryResult="queryResult" />
        </template>
    </mainlayout>
</template>
