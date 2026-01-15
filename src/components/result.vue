<script setup lang="ts">
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
defineProps<{
    queryResult: {
        type: any[];
        required: true;
    };
}>();
</script>
<template>
    <div
        class="flex flex-col overflow-hidden rounded-md border border-border bg-card"
    >
        <div
            class="flex items-center gap-2 border-b border-border bg-secondary px-3 py-2"
        >
            <span class="text-xs font-medium text-muted-foreground"
                >RESULTS</span
            >
            <span
                class="ml-auto rounded bg-accent/20 px-1.5 py-0.5 text-xs text-accent"
                >3 rows</span
            >
        </div>
        <div class="flex-1 overflow-auto p-3 text-sm">
            <Table
                v-if="queryResult.length > 0"
                class="w-full text-left text-foreground"
            >
                <TableHeader>
                    <TableRow>
                        <TableHead
                            v-for="column in Object.keys(queryResult[0])"
                            :key="column"
                        >
                            <span class="pb-2 pr-4">{{ column }}</span>
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow v-for="(row, index) in queryResult" :key="index">
                        <TableCell
                            v-for="column in Object.keys(row)"
                            :key="column"
                        >
                            <span class="pb-2 pr-4">{{ row[column] }}</span>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    </div>
</template>
