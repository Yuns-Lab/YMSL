import { readTextFile, writeTextFile, exists } from "@tauri-apps/api/fs";

export const readJsonFile = (path) => {
    return new Promise((resolve, reject) => {
        exists(path).then((exists) => {
            if (exists) {
                readTextFile(path, { encoding: "utf-8" })
                    .then((data) => {
                        resolve(JSON.parse(data));
                    })
                    .catch((error) => {
                        console.error("Error reading JSON file:", error);
                        reject(error);
                    });
            } else {
                if (path.includes("config.json")) {
                    const obj = {
                        launch: {
                            java: "auto",
                        },
                    };
                    writeTextFile(path, JSON.stringify(obj, null, 4), {
                        encoding: "utf-8",
                    }).then(() => {
                        resolve(obj);
                    });
                } else {
                    const obj = [];
                    writeTextFile(path, JSON.stringify(obj, null, 4), {
                        encoding: "utf-8",
                    }).then(() => {
                        resolve(obj);
                    });
                }
            }
        });
    });
};

export const writeJsonFile = (path, data) => {
    return new Promise((resolve, reject) => {
        writeTextFile(path, JSON.stringify(data, null, 4), {
            encoding: "utf-8",
        })
            .then(() => {
                resolve();
            })
            .catch((error) => {
                console.error("Error writing JSON file:", error);
                reject(error);
            });
    });
};

export const YMSL_DATA_PATH = ".ymsl";
export const YMSL_TEMP_PATH = ".ymsl\\temp";
