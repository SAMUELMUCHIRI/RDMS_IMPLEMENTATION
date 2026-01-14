<script setup lang="ts">
import AppSidebar from "@/components/AppSidebar.vue";
import { Textarea } from "@/components/ui/textarea";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import tables_component from "@/components/tables.vue";

import { useSQLite } from "@/composables/useSQLite";
import { ref, onMounted } from "vue";

const { isLoading, error, executeQuery } = useSQLite();
const sqlQuery = ref("SELECT * FROM test_table");
const queryResult = ref<any[]>([]);
const queryError = ref<string | null>(null);

let table_error = ref<string | null>(null);
let table_result = ref<any[]>([]);

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

async function runQuery() {
    queryError.value = null;
    queryResult.value = [];

    try {
        const result = await executeQuery(sqlQuery.value);
        queryResult.value = result.result.resultRows;
        loadtables();
    } catch (err) {
        queryError.value =
            err instanceof Error ? err.message : "An error occurred";
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
        console.log("Tables:", table_result.value);
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
    <SidebarProvider :style="{ '--sidebar-width': '19rem' }">
        <AppSidebar />
        <SidebarInset>
            <header class="flex h-16 shrink-0 items-center gap-2 px-4">
                <SidebarTrigger class="-ml-1" />
                <Separator
                    orientation="vertical"
                    class="mr-2 data-[orientation=vertical]:h-4"
                />
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem class="hidden md:block">
                            <BreadcrumbLink href="#">
                                Building Your Application
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </header>
            <div class="flex flex-1 flex-col gap-4 p-4 pt-0">
                <div class="grid auto-rows-min gap-4 md:grid-cols-2">
                    <div class="bg-muted/50 aspect-video rounded-xl p-4">
                        <h2 class="text-2xl font-bold">SQLite Playground</h2>

                        <!-- Example queries -->
                        <div class="mt-4">
                            <h3 class="text-sm font-medium">
                                Example Queries:
                            </h3>
                            <div class="mt-2 flex gap-2">
                                <Button
                                    variant="outline"
                                    v-for="example in exampleQueries"
                                    :key="example.title"
                                    @click="sqlQuery = example.query"
                                >
                                    {{ example.title }}
                                </Button>
                            </div>
                        </div>

                        <!-- Query input -->
                        <div class="mt-6">
                            <Textarea
                                v-model="sqlQuery"
                                rows="4"
                                class="w-full rounded-lg px-4 py-3 font-mono text-sm"
                                :disabled="isLoading"
                            />
                            <button
                                :disabled="isLoading"
                                class="mt-2 rounded-lg bg-blue-600 px-4 py-2 text-white"
                                @click="runQuery"
                            >
                                {{ isLoading ? "Running..." : "Run Query" }}
                            </button>
                        </div>
                        <!-- Error display -->
                        <div
                            v-if="error || queryError"
                            class="mt-4 rounded-lg bg-red-50 p-4 text-red-600"
                        >
                            {{ error?.message || queryError }}
                        </div>
                    </div>
                    <div class="bg-muted/50 aspect-video rounded-xl p-4">
                        <tables_component :tables="table_result" />
                    </div>
                </div>
                <div
                    class="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min"
                >
                    <!-- Results table -->
                    <div v-if="queryResult.length > 0" class="mt-4">
                        <h3 class="text-lg font-semibold">Results:</h3>
                        <div class="mt-2 overflow-x-auto">
                            <table class="w-full">
                                <thead>
                                    <tr>
                                        <th
                                            v-for="column in Object.keys(
                                                queryResult[0],
                                            )"
                                            :key="column"
                                            class="px-4 py-2 text-left"
                                        >
                                            {{ column }}
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr
                                        v-for="(row, index) in queryResult"
                                        :key="index"
                                    >
                                        <td
                                            v-for="column in Object.keys(row)"
                                            :key="column"
                                            class="px-4 py-2"
                                        >
                                            {{ row[column] }}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </SidebarInset>
    </SidebarProvider>
</template>
