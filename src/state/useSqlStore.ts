import { defineStore } from "pinia";
type SqlLog = {
  success: boolean;
  sql: string;
  timestamp: number;
  error?: string;
};

export const useSqlStore = defineStore("sqlstore", {
  state: () => ({
    logs: [] as SqlLog[],
  }),

  actions: {
    addLog(log: SqlLog) {
      this.logs.unshift(log);
    },
  },
  getters: {
    getLogs(): SqlLog[] {
      return this.logs;
    },
  },
});
