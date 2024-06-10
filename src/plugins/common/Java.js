import { Command } from "@tauri-apps/api/shell";

class ModJava {
    constructor() {
        this.JavaListBeforeSort = [];
    }

    async getAllJava() {
        const cmd = new Command("findJava", ["java.exe"]);
        const oline = [];
        cmd.stdout.on("data", (line) => {
            oline.push(line);
        });
        await cmd.spawn();
        return new Promise((resolve) => {
            cmd.on("close", (_code) => {
                resolve(oline);
            });
        });
    }

    async filterJava() {
        const jpla = await this.getAllJava();
        const jpl = [];
        return new Promise(async (resolve) => {
            await jpla.forEach(async (java) => {
                const jav = String(java);
                if (jav.includes("askJava.exe")) return;
                if (jav.includes("cache")) return;
                if (jav.includes("sapmachine")) return;
                if (jav.includes("$")) return;
                if (jav.includes("jbr")) return;
                const cmd = new Command("askJava", [jav.replace("\r\n", "")]);
                const output = [];
                cmd.stdout.on("data", (line) => {
                    output.push(line);
                });
                const child = await cmd.spawn();
                cmd.on("close", (_code) => {
                    if (
                        !(
                            output == "" ||
                            output.includes("Java(TM) SE Runtime Environment")
                        )
                    ) {
                        const ver = output[0].match(/\b\d+(\.\d+)*(_\d+)?\b/g);
                        const ver2 =
                            ver.length === 1 || ver.length > 1
                                ? ver[0]
                                : "Unknown";
                        const obj = {
                            path: jav.replace("\r\n", ""),
                            version: ver2.startsWith("1.")
                                ? `${ver2.split(".")[1]}.0.0_${ver2.split("_")[1]}`
                                : ver2,
                            isJre:
                                output[1].includes(
                                    "Java(TM) SE Runtime Environment"
                                ) && !jav.includes("jdk")
                                    ? true
                                    : false,
                            isX86: output[2].includes("32-Bit") ? true : false,
                        };
                        jpl.push(obj);
                    }
                });
            });
            resolve(jpl);
        });
    }

    async main() {
        const resp = await this.filterJava();
        return resp;
    }
}

export { ModJava };
