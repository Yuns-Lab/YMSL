import { readTextFile, writeTextFile } from "@tauri-apps/api/fs";

export const readJsonFile = (path) => {
    return new Promise((resolve, reject) => {
        readTextFile(path, { encoding: "utf-8" })
            .then((data) => {
                resolve(JSON.parse(data));
            })
            .catch((error) => {
                console.error("Error reading JSON file:", error);
                reject(error);
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

export const LMSL_DATA_PATH = ".ymsl";
export const LMSL_TEMP_PATH = ".ymsl\\temp";
