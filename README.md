# deltaMEM
Remember what you forgot.

## Problem Statement
1. Memory consumption is complicated to understand, especially in the context of the way in which people just count bytes.
2. Tauri is often compared with Electron
3. Tauri design strategies are never compared with themselves
4. Its hard to know what the real memory comparisons are.

## Approach
Build the same app three times.
- App 1. Electron doing compute in JS
- App 2. Tauri doing compute in JS
- App 3. Tauri doing compute in Rust

## Lets build a monorepo with:
1. JS source for compute
2. Rust source for compute
3. Electron app
4. Tauri-JS-Compute
5. Tauri-Rust-Compute
6. Benchmarking suite

## What to compute?
Lets compute color difference in an image, moving from pixel to pixel, and doing the whole image.

To do this, lets use these two approaches:

- https://github.com/zschuessler/DeltaE/blob/master/src/dE00.js
- https://github.com/elliotekj/DeltaE/blob/master/src/de2000.rs


# License
MIT
