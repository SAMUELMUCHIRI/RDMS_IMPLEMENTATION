<script setup lang="ts">
interface SidebarProps {
    side?: "left" | "right";
    variant?: "sidebar" | "floating" | "inset";
    collapsible?: "offcanvas" | "icon" | "none";
    class?: HTMLAttributes["class"];
}

import { GalleryVerticalEnd } from "lucide-vue-next";
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
    navMain: [
        {
            title: "Getting Started",
            url: "#",
            items: [
                {
                    title: "Installation",
                    url: "#",
                },
                {
                    title: "Project Structure",
                    url: "#",
                },
            ],
        },
    ],
};
</script>

<template>
    <Sidebar v-bind="props">
        <SidebarHeader>
            <SidebarMenu>
                <SidebarMenuItem>
                    <SidebarMenuButton size="lg" as-child>
                        <a href="#">
                            <div
                                class="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground"
                            >
                                <GalleryVerticalEnd class="size-4" />
                            </div>
                            <div class="flex flex-col gap-0.5 leading-none">
                                <span class="font-medium">Documentation</span>
                                <span class="">v1.0.0</span>
                            </div>
                        </a>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
            <SidebarGroup>
                <SidebarMenu class="gap-2">
                    <SidebarMenuItem>
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
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarGroup>
        </SidebarContent>
    </Sidebar>
</template>
