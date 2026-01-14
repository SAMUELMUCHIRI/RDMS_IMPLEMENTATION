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
    <div v-if="queryResult.length > 0" class="p-4">
        <Table>
            <TableCaption>Results</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead
                        v-for="column in Object.keys(queryResult[0])"
                        :key="column"
                    >
                        {{ column }}
                    </TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow v-for="(row, index) in queryResult" :key="index">
                    <TableCell
                        v-for="column in Object.keys(row)"
                        :key="column"
                        class="px-4 py-2 text-start"
                    >
                        {{ row[column] }}
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </div>
</template>
