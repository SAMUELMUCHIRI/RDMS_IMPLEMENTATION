<script setup lang="ts">
defineProps({
    tables: {
        type: Array,
        required: true,
    },
});
</script>
<template>
    <div class="flex-1 bg-white rounded-lg border border-green-200 shadow-sm">
        <div
            class="p-4 border-b border-green-200 bg-green-50 flex items-center justify-between"
        >
            <div class="flex items-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-database w-5 h-5 mr-2 text-green-600"
                >
                    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                    <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
                    <path d="M3 12A9 3 0 0 0 21 12"></path>
                </svg>
                <h2 class="text-lg font-semibold text-green-900">
                    Table Explorer
                </h2>
            </div>
            <button
                class="p-2 hover:bg-green-100 rounded-md transition-colors"
                title="Refresh tables"
                @click="$emit('refresh')"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-refresh-cw w-4 h-4 text-green-600"
                >
                    <path
                        d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"
                    ></path>
                    <path d="M21 3v5h-5"></path>
                    <path
                        d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"
                    ></path>
                    <path d="M8 16H3v5"></path>
                </svg>
            </button>
        </div>
        <div class="p-4 flex-1">
            <div v-if="!tables" class="text-center py-8">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-database w-12 h-12 mx-auto text-gray-300 mb-3"
                >
                    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                    <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
                    <path d="M3 12A9 3 0 0 0 21 12"></path>
                </svg>
                <p class="text-gray-500">No tables found</p>
                <p class="text-sm text-gray-400 mt-1">
                    Create a table using the SQL Console
                </p>
            </div>
            <div v-if="tables" class="flex-1 p-2">
                <p class="text-gray-500">Available tables</p>
                <p class="text-sm text-gray-400 mt-1">
                    <li v-for="table in tables">
                        {{ table.name }}
                    </li>
                </p>
            </div>
        </div>
    </div>
</template>
