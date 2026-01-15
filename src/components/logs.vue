<script setup lang="ts">
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

import { useSqlStore } from "@/state/useSqlStore";

let store = useSqlStore();
</script>

<template>
    <div
        class="flex  flex-col overflow-hidden rounded-md border border-border bg-card""
    >
        <div
            class="flex items-center gap-2 border-b border-border bg-secondary px-3 py-2"
        >
            <span class="text-xs font-medium text-muted-foreground"
                >CONSOLE</span
            >
        </div>
        <div class="flex-1 overflow-y-auto p-3 text-xs ">
            <div v-for="log in store.getLogs" class="text-muted-foreground">
                <div class="flex items-center text-sm">
                <span class="text-muted-foreground">[{{ new Date(log.timestamp).toLocaleTimeString() }}]</span>
                <div v-if="log.success" class="text-sm text-green-500">
                    <span class="p-2">{{ log.sql }}</span>
                </div>
                <div v-else class="text-sm text-red-500">
                    <span class="p-2">{{ log.sql }}</span>
                    <span class="p-2">{{ log.error }}</span>
                </div>

                </div>
                <Separator class="my-2" />
            </div>
        </div>
    </div>
</template>
