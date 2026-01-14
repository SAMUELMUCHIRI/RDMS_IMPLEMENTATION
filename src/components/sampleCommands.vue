<script setup lang="ts">
const sqliteCommands = [
    {
        category: "Table",
        items: [
            { command: "CREATE TABLE", usage: "Create a new table" },
            { command: "DROP TABLE", usage: "Delete a table" },
            { command: "ALTER TABLE", usage: "Modify an existing table" },
        ],
    },
    {
        category: "Data",
        items: [
            { command: "SELECT", usage: "Read data from tables" },
            { command: "INSERT", usage: "Insert new records" },
            { command: "UPDATE", usage: "Update existing records" },
            { command: "DELETE", usage: "Remove records" },
        ],
    },
    {
        category: "Utilities",
        items: [
            {
                command: "PRAGMA",
                usage: "Inspect or configure SQLite internals",
            },
            { command: "VACUUM", usage: "Optimize and rebuild the database" },
        ],
    },
];
</script>
<template>
    <div class="max-w-3xl flex-1 h-20 p-6 space-y-8">
        <section
            v-for="section in sqliteCommands"
            :key="section.category"
            class="space-y-3"
        >
            <h2 class="text-xl font-semibold">
                {{ section.category }}
            </h2>

            <ul class="space-y-2">
                <li
                    v-for="item in section.items"
                    :key="item.command"
                    class="flex gap-4 border-b pb-2"
                >
                    <code
                        class="font-mono text-sm bg-gray-100 px-2 py-1 rounded"
                    >
                        {{ item.command }}
                    </code>
                    <p class="text-sm text-gray-700">
                        {{ item.usage }}
                    </p>
                </li>
            </ul>
        </section>
    </div>
</template>
