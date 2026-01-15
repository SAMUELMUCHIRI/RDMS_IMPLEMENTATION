<script setup lang="ts">
import { ref } from "vue";

defineProps<{ msg: string }>();

const count = ref(0);
</script>

<template>
    <header class="flex h-20 items-center gap-2 px-4">
        <DropdownMenu>
            <DropdownMenuTrigger as-child>
                <Button variant="outline">
                    <Icon
                        icon="radix-icons:moon"
                        class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
                    />
                    <Icon
                        icon="radix-icons:sun"
                        class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
                    />
                    <span class="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem @click="mode = 'light'">
                    Light
                </DropdownMenuItem>
                <DropdownMenuItem @click="mode = 'dark'">
                    Dark
                </DropdownMenuItem>
                <DropdownMenuItem @click="mode = 'auto'">
                    System
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
        <Separator
            orientation="vertical"
            class="mr-2 data-[orientation=vertical]:h-4"
        />
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem class="hidden md:block">
                    <BreadcrumbLink href="/">
                        SAMUEl'S RDBMS CONSOLE
                    </BreadcrumbLink>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    </header>
    <div class="flex flex-1 flex-col gap-4 p-4 pt-0">
        <!-- Top grid: SQLite Playground + Tables -->
        <div class="grid md:grid-cols-2 gap-4 flex-1">
            <div class="bg-muted/50 rounded-xl p-4 flex flex-col">
                <h2 class="text-2xl font-bold">SQLite Playground</h2>
                <div class="flex-1 mt-4">
                    <slot name="input"></slot>
                </div>
            </div>

            <div class="bg-muted/50 rounded-xl p-4 flex flex-col">
                <div class="flex-1">
                    <slot name="tables"></slot>
                </div>
            </div>
        </div>

        <!-- Bottom grid: Result + Logs -->
        <div class="grid md:grid-cols-2 gap-4 flex-1">
            <div class="bg-muted/50 flex flex-col rounded-xl">
                <div class="flex-1">
                    <slot name="result"></slot>
                </div>
            </div>

            <div class="bg-muted/50 flex flex-col rounded-xl">
                <div class="flex-1 p-4">
                    <logs />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.read-the-docs {
    color: #888;
}
</style>
