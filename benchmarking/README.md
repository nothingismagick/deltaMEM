# Approach

In order to bench the same in all three versions:
- build a harness in the webview that outsources compute
- run the timing inside of JS and averaging the duration of 10 runs.
- perform memory analysis with proper tooling (what will we use?)

## Results
| Approach | Binary Size | Time | Mem Mac | Mem Lin | Mem Win |
| - | - | - | - | - | - | 
|electron-js||||||
|tauri-js||||||
|tauri-rs||||||