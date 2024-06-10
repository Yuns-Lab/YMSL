// DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

#[tauri::command]
fn minimize(window: tauri::Window) {
    window.minimize().expect("Failed to minimize window");
}

#[tauri::command]
fn close(window: tauri::Window) {
    window.close().expect("Failed to close window");
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![minimize, close])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
