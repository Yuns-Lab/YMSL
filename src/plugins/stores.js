import { defineStore } from "pinia";

export const useVersionStore = defineStore("version", {
    state: () => ({
        versionNow: "undefined",
    }),
    actions: {
        setVersionNow(versionId) {
            // TODO: versionId -> versionName
            this.versionNow = versionId;
        },
    },
    getters: {
        getVersionNow: (versionNow) => versionNow,
    },
});
