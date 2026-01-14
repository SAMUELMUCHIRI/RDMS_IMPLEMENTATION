<template>
    <div class="min-h-screen bg-gradient-to-br from-green-50 to-green-100">
        <header class="bg-green-600 text-white shadow-lg">
            <div class="max-w-7xl mx-auto px-4 py-6">
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
                        class="lucide lucide-database w-8 h-8 mr-3"
                    >
                        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                        <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
                        <path d="M3 12A9 3 0 0 0 21 12"></path>
                    </svg>
                    <div><h1 class="text-3xl font-bold">gregory RDBMS</h1></div>
                </div>
            </div>
        </header>
        <main class="max-w-7xl mx-auto px-4 py-8">
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                <div class="lg:col-span-2">
                    <div
                        class="bg-white rounded-lg border border-green-200 shadow-sm"
                    >
                        <div class="p-4 border-b border-green-200 bg-green-50">
                            <h2 class="text-lg font-semibold text-green-900">
                                SQL Console
                            </h2>
                            <p class="text-sm text-green-600 mt-1">
                                Enter your SQL queries below (Cmd/Ctrl + Enter
                                to execute)
                            </p>
                        </div>
                        <div class="p-4">
                            <div class="mb-4">
                                <textarea
                                    placeholder="SELECT * FROM users WHERE id = 1;"
                                    class="w-full h-32 px-3 py-2 border border-green-300 rounded-md font-mono text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                ></textarea>
                            </div>
                            <button
                                disabled=""
                                class="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
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
                                    class="lucide lucide-play w-4 h-4 mr-2"
                                >
                                    <polygon
                                        points="5 3 19 12 5 21 5 3"
                                    ></polygon></svg
                                >Run Query
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        class="bg-white rounded-lg border border-green-200 shadow-sm"
                    >
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
                                    <ellipse
                                        cx="12"
                                        cy="5"
                                        rx="9"
                                        ry="3"
                                    ></ellipse>
                                    <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
                                    <path d="M3 12A9 3 0 0 0 21 12"></path>
                                </svg>
                                <h2
                                    class="text-lg font-semibold text-green-900"
                                >
                                    Table Explorer
                                </h2>
                            </div>
                            <button
                                class="p-2 hover:bg-green-100 rounded-md transition-colors"
                                title="Refresh tables"
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
                        <div class="p-4">
                            <div class="mb-4">
                                <label
                                    class="block text-sm font-medium text-gray-700 mb-2"
                                    >Select Table</label
                                ><select
                                    class="w-full px-3 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                >
                                    <option value="users">users</option>
                                </select>
                            </div>
                            <div>
                                <div class="mb-4">
                                    <h3
                                        class="text-sm font-semibold text-gray-700 mb-2"
                                    >
                                        Columns
                                    </h3>
                                    <div class="space-y-2">
                                        <div
                                            class="flex items-start p-3 bg-gray-50 rounded-md border border-gray-200"
                                        >
                                            <div class="flex-1">
                                                <div
                                                    class="font-medium text-gray-900"
                                                >
                                                    id
                                                </div>
                                                <div
                                                    class="text-sm text-gray-600"
                                                >
                                                    INT
                                                </div>
                                            </div>
                                            <div
                                                class="flex flex-wrap gap-1"
                                            ></div>
                                        </div>
                                        <div
                                            class="flex items-start p-3 bg-gray-50 rounded-md border border-gray-200"
                                        >
                                            <div class="flex-1">
                                                <div
                                                    class="font-medium text-gray-900"
                                                >
                                                    name
                                                </div>
                                                <div
                                                    class="text-sm text-gray-600"
                                                >
                                                    TEXT
                                                </div>
                                            </div>
                                            <div
                                                class="flex flex-wrap gap-1"
                                            ></div>
                                        </div>
                                        <div
                                            class="flex items-start p-3 bg-gray-50 rounded-md border border-gray-200"
                                        >
                                            <div class="flex-1">
                                                <div
                                                    class="font-medium text-gray-900"
                                                >
                                                    email
                                                </div>
                                                <div
                                                    class="text-sm text-gray-600"
                                                >
                                                    TEXT
                                                </div>
                                            </div>
                                            <div
                                                class="flex flex-wrap gap-1"
                                            ></div>
                                        </div>
                                        <div
                                            class="flex items-start p-3 bg-gray-50 rounded-md border border-gray-200"
                                        >
                                            <div class="flex-1">
                                                <div
                                                    class="font-medium text-gray-900"
                                                >
                                                    active
                                                </div>
                                                <div
                                                    class="text-sm text-gray-600"
                                                >
                                                    INT
                                                </div>
                                            </div>
                                            <div
                                                class="flex flex-wrap gap-1"
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                <div
                    class="bg-white rounded-lg border border-green-200 shadow-sm"
                >
                    <div class="p-4 border-b border-green-200 bg-green-50">
                        <h2 class="text-lg font-semibold text-green-900">
                            CRUD Operations
                        </h2>
                        <p class="text-sm text-green-600 mt-1">
                            Manage your data with Create, Read, Update, Delete
                            operations
                        </p>
                    </div>
                    <div class="p-4">
                        <div class="flex items-center justify-between mb-4">
                            <select
                                class="px-3 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                            >
                                <option value="users">users</option></select
                            ><button
                                class="inline-flex items-center px-3 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
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
                                    class="lucide lucide-plus w-4 h-4 mr-1"
                                >
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5v14"></path></svg
                                >Add Row
                            </button>
                        </div>
                        <div class="overflow-x-auto">
                            <table
                                class="min-w-full divide-y divide-green-200 border border-green-200 rounded-lg"
                            >
                                <thead class="bg-green-50">
                                    <tr>
                                        <th
                                            class="px-4 py-3 text-left text-xs font-medium text-green-900 uppercase tracking-wider"
                                        >
                                            id
                                        </th>
                                        <th
                                            class="px-4 py-3 text-left text-xs font-medium text-green-900 uppercase tracking-wider"
                                        >
                                            name
                                        </th>
                                        <th
                                            class="px-4 py-3 text-left text-xs font-medium text-green-900 uppercase tracking-wider"
                                        >
                                            email
                                        </th>
                                        <th
                                            class="px-4 py-3 text-left text-xs font-medium text-green-900 uppercase tracking-wider"
                                        >
                                            active
                                        </th>
                                        <th
                                            class="px-4 py-3 text-right text-xs font-medium text-green-900 uppercase tracking-wider"
                                        >
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody
                                    class="bg-white divide-y divide-green-100"
                                >
                                    <tr class="hover:bg-green-50">
                                        <td
                                            class="px-4 py-3 text-sm text-gray-700"
                                        >
                                            <span>1</span>
                                        </td>
                                        <td
                                            class="px-4 py-3 text-sm text-gray-700"
                                        >
                                            <span>Kipngeno Gregory</span>
                                        </td>
                                        <td
                                            class="px-4 py-3 text-sm text-gray-700"
                                        >
                                            <span
                                                >kipngenogregory@gmail.com</span
                                            >
                                        </td>
                                        <td
                                            class="px-4 py-3 text-sm text-gray-700"
                                        >
                                            <span>1</span>
                                        </td>
                                        <td
                                            class="px-4 py-3 text-sm text-right"
                                        >
                                            <div class="flex justify-end gap-2">
                                                <button
                                                    class="text-blue-600 hover:text-blue-800"
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
                                                        class="lucide lucide-pen w-4 h-4"
                                                    >
                                                        <path
                                                            d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"
                                                        ></path>
                                                    </svg></button
                                                ><button
                                                    class="text-red-600 hover:text-red-800"
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
                                                        class="lucide lucide-trash2 w-4 h-4"
                                                    >
                                                        <path
                                                            d="M3 6h18"
                                                        ></path>
                                                        <path
                                                            d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"
                                                        ></path>
                                                        <path
                                                            d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"
                                                        ></path>
                                                        <line
                                                            x1="10"
                                                            x2="10"
                                                            y1="11"
                                                            y2="17"
                                                        ></line>
                                                        <line
                                                            x1="14"
                                                            x2="14"
                                                            y1="11"
                                                            y2="17"
                                                        ></line>
                                                    </svg>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr class="hover:bg-green-50">
                                        <td
                                            class="px-4 py-3 text-sm text-gray-700"
                                        >
                                            <span>1</span>
                                        </td>
                                        <td
                                            class="px-4 py-3 text-sm text-gray-700"
                                        >
                                            <span>Michelle Jerono</span>
                                        </td>
                                        <td
                                            class="px-4 py-3 text-sm text-gray-700"
                                        >
                                            <span>jerono@gmail.com</span>
                                        </td>
                                        <td
                                            class="px-4 py-3 text-sm text-gray-700"
                                        >
                                            <span>1</span>
                                        </td>
                                        <td
                                            class="px-4 py-3 text-sm text-right"
                                        >
                                            <div class="flex justify-end gap-2">
                                                <button
                                                    class="text-blue-600 hover:text-blue-800"
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
                                                        class="lucide lucide-pen w-4 h-4"
                                                    >
                                                        <path
                                                            d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"
                                                        ></path>
                                                    </svg></button
                                                ><button
                                                    class="text-red-600 hover:text-red-800"
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
                                                        class="lucide lucide-trash2 w-4 h-4"
                                                    >
                                                        <path
                                                            d="M3 6h18"
                                                        ></path>
                                                        <path
                                                            d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"
                                                        ></path>
                                                        <path
                                                            d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"
                                                        ></path>
                                                        <line
                                                            x1="10"
                                                            x2="10"
                                                            y1="11"
                                                            y2="17"
                                                        ></line>
                                                        <line
                                                            x1="14"
                                                            x2="14"
                                                            y1="11"
                                                            y2="17"
                                                        ></line>
                                                    </svg>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr class="hover:bg-green-50">
                                        <td
                                            class="px-4 py-3 text-sm text-gray-700"
                                        >
                                            <span>1</span>
                                        </td>
                                        <td
                                            class="px-4 py-3 text-sm text-gray-700"
                                        >
                                            <span>Sirma Moses</span>
                                        </td>
                                        <td
                                            class="px-4 py-3 text-sm text-gray-700"
                                        >
                                            <span>mosessirma@gmail.com</span>
                                        </td>
                                        <td
                                            class="px-4 py-3 text-sm text-gray-700"
                                        >
                                            <span>1</span>
                                        </td>
                                        <td
                                            class="px-4 py-3 text-sm text-right"
                                        >
                                            <div class="flex justify-end gap-2">
                                                <button
                                                    class="text-blue-600 hover:text-blue-800"
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
                                                        class="lucide lucide-pen w-4 h-4"
                                                    >
                                                        <path
                                                            d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"
                                                        ></path>
                                                    </svg></button
                                                ><button
                                                    class="text-red-600 hover:text-red-800"
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
                                                        class="lucide lucide-trash2 w-4 h-4"
                                                    >
                                                        <path
                                                            d="M3 6h18"
                                                        ></path>
                                                        <path
                                                            d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"
                                                        ></path>
                                                        <path
                                                            d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"
                                                        ></path>
                                                        <line
                                                            x1="10"
                                                            x2="10"
                                                            y1="11"
                                                            y2="17"
                                                        ></line>
                                                        <line
                                                            x1="14"
                                                            x2="14"
                                                            y1="11"
                                                            y2="17"
                                                        ></line>
                                                    </svg>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr class="hover:bg-green-50">
                                        <td
                                            class="px-4 py-3 text-sm text-gray-700"
                                        >
                                            <span>2</span>
                                        </td>
                                        <td
                                            class="px-4 py-3 text-sm text-gray-700"
                                        >
                                            <span>Hulio</span>
                                        </td>
                                        <td
                                            class="px-4 py-3 text-sm text-gray-700"
                                        >
                                            <span>Hshshs@gmail.com</span>
                                        </td>
                                        <td
                                            class="px-4 py-3 text-sm text-gray-700"
                                        >
                                            <span>1</span>
                                        </td>
                                        <td
                                            class="px-4 py-3 text-sm text-right"
                                        >
                                            <div class="flex justify-end gap-2">
                                                <button
                                                    class="text-blue-600 hover:text-blue-800"
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
                                                        class="lucide lucide-pen w-4 h-4"
                                                    >
                                                        <path
                                                            d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"
                                                        ></path>
                                                    </svg></button
                                                ><button
                                                    class="text-red-600 hover:text-red-800"
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
                                                        class="lucide lucide-trash2 w-4 h-4"
                                                    >
                                                        <path
                                                            d="M3 6h18"
                                                        ></path>
                                                        <path
                                                            d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"
                                                        ></path>
                                                        <path
                                                            d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"
                                                        ></path>
                                                        <line
                                                            x1="10"
                                                            x2="10"
                                                            y1="11"
                                                            y2="17"
                                                        ></line>
                                                        <line
                                                            x1="14"
                                                            x2="14"
                                                            y1="11"
                                                            y2="17"
                                                        ></line>
                                                    </svg>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr class="hover:bg-green-50">
                                        <td
                                            class="px-4 py-3 text-sm text-gray-700"
                                        >
                                            <span>20</span>
                                        </td>
                                        <td
                                            class="px-4 py-3 text-sm text-gray-700"
                                        >
                                            <span>John</span>
                                        </td>
                                        <td
                                            class="px-4 py-3 text-sm text-gray-700"
                                        >
                                            <span>Katangu</span>
                                        </td>
                                        <td
                                            class="px-4 py-3 text-sm text-gray-700"
                                        >
                                            <span>20</span>
                                        </td>
                                        <td
                                            class="px-4 py-3 text-sm text-right"
                                        >
                                            <div class="flex justify-end gap-2">
                                                <button
                                                    class="text-blue-600 hover:text-blue-800"
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
                                                        class="lucide lucide-pen w-4 h-4"
                                                    >
                                                        <path
                                                            d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"
                                                        ></path>
                                                    </svg></button
                                                ><button
                                                    class="text-red-600 hover:text-red-800"
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
                                                        class="lucide lucide-trash2 w-4 h-4"
                                                    >
                                                        <path
                                                            d="M3 6h18"
                                                        ></path>
                                                        <path
                                                            d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"
                                                        ></path>
                                                        <path
                                                            d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"
                                                        ></path>
                                                        <line
                                                            x1="10"
                                                            x2="10"
                                                            y1="11"
                                                            y2="17"
                                                        ></line>
                                                        <line
                                                            x1="14"
                                                            x2="14"
                                                            y1="11"
                                                            y2="17"
                                                        ></line>
                                                    </svg>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr class="hover:bg-green-50">
                                        <td
                                            class="px-4 py-3 text-sm text-gray-700"
                                        >
                                            <span>332</span>
                                        </td>
                                        <td
                                            class="px-4 py-3 text-sm text-gray-700"
                                        >
                                            <span>fgdgdf</span>
                                        </td>
                                        <td
                                            class="px-4 py-3 text-sm text-gray-700"
                                        >
                                            <span>fgdfgfd</span>
                                        </td>
                                        <td
                                            class="px-4 py-3 text-sm text-gray-700"
                                        >
                                            <span>34543</span>
                                        </td>
                                        <td
                                            class="px-4 py-3 text-sm text-right"
                                        >
                                            <div class="flex justify-end gap-2">
                                                <button
                                                    class="text-blue-600 hover:text-blue-800"
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
                                                        class="lucide lucide-pen w-4 h-4"
                                                    >
                                                        <path
                                                            d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"
                                                        ></path>
                                                    </svg></button
                                                ><button
                                                    class="text-red-600 hover:text-red-800"
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
                                                        class="lucide lucide-trash2 w-4 h-4"
                                                    >
                                                        <path
                                                            d="M3 6h18"
                                                        ></path>
                                                        <path
                                                            d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"
                                                        ></path>
                                                        <path
                                                            d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"
                                                        ></path>
                                                        <line
                                                            x1="10"
                                                            x2="10"
                                                            y1="11"
                                                            y2="17"
                                                        ></line>
                                                        <line
                                                            x1="14"
                                                            x2="14"
                                                            y1="11"
                                                            y2="17"
                                                        ></line>
                                                    </svg>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr class="hover:bg-green-50">
                                        <td
                                            class="px-4 py-3 text-sm text-gray-700"
                                        >
                                            <span>332</span>
                                        </td>
                                        <td
                                            class="px-4 py-3 text-sm text-gray-700"
                                        >
                                            <span>fgdgdf</span>
                                        </td>
                                        <td
                                            class="px-4 py-3 text-sm text-gray-700"
                                        >
                                            <span>fgdfgfd</span>
                                        </td>
                                        <td
                                            class="px-4 py-3 text-sm text-gray-700"
                                        >
                                            <span>34543</span>
                                        </td>
                                        <td
                                            class="px-4 py-3 text-sm text-right"
                                        >
                                            <div class="flex justify-end gap-2">
                                                <button
                                                    class="text-blue-600 hover:text-blue-800"
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
                                                        class="lucide lucide-pen w-4 h-4"
                                                    >
                                                        <path
                                                            d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"
                                                        ></path>
                                                    </svg></button
                                                ><button
                                                    class="text-red-600 hover:text-red-800"
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
                                                        class="lucide lucide-trash2 w-4 h-4"
                                                    >
                                                        <path
                                                            d="M3 6h18"
                                                        ></path>
                                                        <path
                                                            d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"
                                                        ></path>
                                                        <path
                                                            d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"
                                                        ></path>
                                                        <line
                                                            x1="10"
                                                            x2="10"
                                                            y1="11"
                                                            y2="17"
                                                        ></line>
                                                        <line
                                                            x1="14"
                                                            x2="14"
                                                            y1="11"
                                                            y2="17"
                                                        ></line>
                                                    </svg>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div
                    class="bg-white rounded-lg border border-green-200 shadow-sm"
                >
                    <div class="p-4 border-b border-green-200 bg-green-50">
                        <h2 class="text-lg font-semibold text-green-900">
                            Query Execution Log
                        </h2>
                        <p class="text-sm text-green-600 mt-1">
                            Recent query history and performance metrics
                        </p>
                    </div>
                    <div class="p-4">
                        <div class="text-center py-8">
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
                                class="lucide lucide-clock w-12 h-12 mx-auto text-gray-300 mb-3"
                            >
                                <circle cx="12" cy="12" r="10"></circle>
                                <polyline points="12 6 12 12 16 14"></polyline>
                            </svg>
                            <p class="text-gray-500">No queries executed yet</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>
