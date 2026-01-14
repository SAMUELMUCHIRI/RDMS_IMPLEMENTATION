<script setup lang="ts">
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

import { useSqlStore } from "@/state/useSqlStore";

let store = useSqlStore();
</script>

<template>
    <ScrollArea class="min-h-72 flex-1 w-full rounded-md border">
        <div class="p-4">
            <h4 class="mb-4 text-sm leading-none font-medium">Logs</h4>
            <template v-for="log in store.getLogs">
                <div v-if="log.success" class="text-sm text-green-500">
                    <span class="mr-2">{{ log.sql }}</span>
                </div>
                <div v-else class="text-sm text-red-500">
                    <span class="p-2">{{ log.sql }}</span>
                    <span class="p-2">{{ log.error }}</span>
                </div>
                <Separator class="my-2" />
            </template>
        </div>
    </ScrollArea>
</template>
