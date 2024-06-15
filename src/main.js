import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from "./plugins/router.js";

const pinia = createPinia();
createApp(App).use(pinia).use(router).mount("#app");

import "./assets/css/color.css";
import "./assets/css/animation.css";
import "element-plus/dist/index.css";

// Corner border-radius
import { appWindow } from "@tauri-apps/api/window";
const setWindowCorners = async () => {
    const isMaximized = await appWindow.isMaximized();
    if (isMaximized) {
        document.querySelector("div#Window").classList.remove("roundwindow");
    } else {
        document.querySelector("div#Window").classList.add("roundwindow");
    }
};
setWindowCorners();
// Listen for maximize and unmaximize events
appWindow.listen("tauri://resize", setWindowCorners);
appWindow.listen("tauri://maximize", () => {
    document.querySelector("div#Window").classList.remove("roundwindow");
});
appWindow.listen("tauri://unmaximize", () => {
    document.querySelector("div#Window").classList.add("roundwindow");
});

// Set refresh mark
localStorage.setItem("is_refresh", "true");
