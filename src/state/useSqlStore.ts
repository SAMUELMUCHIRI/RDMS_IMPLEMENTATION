import { defineStore } from "pinia";

export const useSqlStore = defineStore("sqlstore", {
  state: () => ({
    logs: [] as object[],
  }),

  actions: {
    addLog(log: object) {
      this.logs.unshift(log);
    },
  },
  getters: {
    getLogs(): object[] {
      return this.logs;
    },
  },
});
