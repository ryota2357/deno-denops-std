/**
 * A module to provide functions of Neovim native functions.
 *
 * ```typescript
 * import { Denops } from "../../mod.ts";
 * import * as nvimFn from "../../function/nvim/mod.ts";
 *
 * export async function main(denops: Denops): Promise<void> {
 *   // nvimFn holds functions exists only in Neovim
 *   console.log(nvimFn.api_info(denops));
 * }
 * ```
 *
 * @module
 */
// NOTE:
// Do NOT add modules manually to this file.
// Add modules to `_manual.ts` instead for manually written modules.
export * from "./_manual.ts";
export * from "./_generated.ts";
