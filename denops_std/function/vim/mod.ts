/**
 * A module to provide functions of Vim native functions.
 *
 * ```typescript
 * import { Denops } from "../../mod.ts";
 * import * as vimFn from "../../function/vim/mod.ts";
 *
 * export async function main(denops: Denops): Promise<void> {
 *   // vimFn holds functions exists only in Vim
 *   console.log(vimFn.balloon_gettext(denops));
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
