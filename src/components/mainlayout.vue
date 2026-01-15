<script setup lang="ts">
import AppSidebar from "@/components/AppSidebar.vue";
import commands from "@/components/sampleCommands.vue";
import logs from "@/components/logs.vue";
import { Textarea } from "@/components/ui/textarea";

import { Separator } from "@/components/ui/separator";

import { Button } from "@/components/ui/button";

import result from "@/components/result.vue";
import { Icon } from "@iconify/vue";
import { useColorMode } from "@vueuse/core";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Pass { disableTransition: false } to enable transitions
const mode = useColorMode();
</script>

<template>
    <div class="flex h-screen w-full flex-col bg-background p-2 font-mono">
        <header
            class="mb-2 flex items-center gap-3 rounded-md border border-border bg-card px-4 py-2 w-full"
        >
            <div
                class="flex h-6 w-6 items-center justify-center rounded bg-primary text-xs font-bold text-primary-foreground"
            >
                DB
            </div>
            <h1 class="text-sm font-semibold text-foreground">RDBMS Console</h1>
            <span class="text-xs text-muted-foreground">v1.0</span>
            <Separator
                orientation="vertical"
                class="mr-2 data-[orientation=vertical]:h-4"
            />
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
        </header>

        <div
            class="grid flex-1 grid-cols-1 max-h-[calc(100svh-5rem)] grid-rows-1 md:grid-cols-2 md:grid-rows-2 gap-2 w-full"
        >
            <div
                class="flex flex-col overflow-hidden rounded-md border border-border bg-card"
            >
                <div
                    class="flex items-center gap-2 border-b border-border bg-secondary px-3 py-2"
                >
                    <span class="text-xs font-medium text-muted-foreground"
                        >QUERY EDITOR</span
                    >
                </div>
                <div class="flex-1 p-3 text-sm text-foreground">
                    <slot name="input"></slot>
                </div>
            </div>

            <slot name="tables"></slot>
            <slot name="result"></slot>

            <logs />
        </div>
    </div>
</template>
