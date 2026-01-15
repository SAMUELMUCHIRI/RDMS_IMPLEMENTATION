<script setup lang="ts">
import type { PropType } from "vue";
import { Button } from "@/components/ui/button";
type Table = {
    name: string;
};
defineProps({
    tables: {
        type: Array as PropType<Table[]>,
        required: true,
    },
});
</script>
<template>
    <div
        class="flex flex-col overflow-hidden rounded-md border border-border bg-card max-h-[20vh] sm:max-h-[75vh]"
    >
        <div
            class="flex items-center justify-between border-b border-border bg-secondary px-3 py-2"
        >
            <span class="text-xs font-medium text-muted-foreground"
                >SCHEMA</span
            >
            <Button
                class="p-2 hover:bg-green-100 rounded-md transition-colors"
                title="Refresh tables"
                @click="$emit('refresh')"
                size="sm"
            >
                Refresh
            </Button>
        </div>
        <div class="flex-1 overflow-y-auto p-3 text-sm">
            <div class="text-muted-foreground">▸ public</div>
            <div v-if="!tables" class="text-center py-8">No tables found.</div>
            <div v-if="tables" class="flex-1 p-2">
                <div v-for="table in tables" class="ml-4 text-foreground">
                    ├─ {{ table.name }}
                </div>
            </div>
        </div>
    </div>
</template>
