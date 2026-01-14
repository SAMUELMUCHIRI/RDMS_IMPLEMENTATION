<script setup lang="ts">
import { Button } from "@/components/ui/button";
defineProps({
    tables: {
        type: Array,
        required: true,
    },
});
</script>
<template>
    <div class="flex-1">
        <div class="p-4 flex items-center justify-between">
            <div class="flex items-center">
                <h2 class="text-lg font-semibold">Tables In Database</h2>
            </div>
            <Button
                class="p-2 hover:bg-green-100 rounded-md transition-colors"
                title="Refresh tables"
                @click="$emit('refresh')"
            >
                Refresh
            </Button>
        </div>
        <div class="p-4 flex-1">
            <div v-if="!tables" class="text-center py-8">No tables found.</div>
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
