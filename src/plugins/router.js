import { nextTick } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import { default as HomeView } from "../pages/Home.vue";
import { default as LauncherSettings } from "../pages/LSettings.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: HomeView,
    },
    {
        path: "/launcher/settings",
        name: "LauncherSettings",
        component: LauncherSettings,
    }
];

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes,
});

const openDoor = () => {
    document.getElementById("changePageDoor").classList.remove("close");
    setTimeout(() => {
        document.getElementById("changePageDoor").style.display = "none";
    }, 500);
};

const closeDoor = () => {
    document.getElementById("changePageDoor").style.display = "block";
    nextTick(() => {
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                document
                    .getElementById("changePageDoor")
                    .classList.add("close");
            });
        });
    });
};

router.beforeEach((to, from, next) => {
    if (!(from.name === to.name)) {
        closeDoor();
        localStorage.setItem("is_refresh", "false");
        setTimeout(() => {
            next();
        }, 600);
    } else {
        localStorage.setItem("is_refresh", "true");
        next();
    }
});

router.afterEach((to, from) => {
    const isRefresh = localStorage.getItem("is_refresh") === "true";
    if (isRefresh) {
        openDoor();
    } else {
        setTimeout(() => {
            openDoor();
        }, 1000);
    }
    localStorage.removeItem("is_refresh");
});

export const push = (path) => {
    location.hash = "#" + path;
};

export default router;
