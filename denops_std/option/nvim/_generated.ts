// NOTE: This file is generated. Do NOT modify it manually.
import type { Denops } from "https://deno.land/x/denops_core@v3.4.1/mod.ts";
import { globalOptions, localOptions, options } from "../../variable/mod.ts";

/**
 * 		global
 */
export const inccommand = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "inccommand") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "inccommand", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "inccommand");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "inccommand") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "inccommand", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "inccommand");
  },
};

/**
 * List of words that change the behavior of the |jumplist|.
 *   stack         Make the jumplist behave like the tagstack or like a
 *                 web browser.  Relative location of entries in the
 * 		jumplist is preserved at the cost of discarding
 * 		subsequent entries when navigating backwards in the
 * 		jumplist and then jumping to a location.
 * 		|jumplist-stack|
 */
export const jumpoptions = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "jumpoptions") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "jumpoptions", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "jumpoptions");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "jumpoptions") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "jumpoptions", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "jumpoptions");
  },
};

/**
 * Enables pseudo-transparency for the |popup-menu|. Valid values are in
 * the range of 0 for fully opaque popupmenu (disabled) to 100 for fully
 * transparent background. Values between 0-30 are typically most useful.
 */
export const pumblend = {
  async get(denops: Denops): Promise<number> {
    return await options.get(denops, "pumblend") ?? 0;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "pumblend", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "pumblend");
  },
  async getGlobal(denops: Denops): Promise<number> {
    return await globalOptions.get(denops, "pumblend") ?? 0;
  },
  setGlobal(denops: Denops, value: number): Promise<void> {
    return globalOptions.set(denops, "pumblend", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "pumblend");
  },
};

/**
 * Flags to change the way redrawing works, for debugging purposes.
 * Most useful with 'writedelay' set to some reasonable value.
 * Supports the following flags:
 *     compositor	Indicate what redraws come from the compositor
 * 		by briefly flashing the redrawn regions in colors
 * 		indicating the redraw type. These are the highlight
 * 		groups used (and their default colors):
 * 	RedrawDebugNormal   gui=reverse   normal redraw passed through
 * 	RedrawDebugClear    guibg=Yellow  clear event passed through
 * 	RedrawDebugComposed guibg=Green   redraw event modified by the
 * 					  compositor (due to
 * 					  overlapping grids, etc)
 * 	RedrawDebugRecompose guibg=Red    redraw generated by the
 * 					  compositor itself, due to a
 * 					  grid being moved or deleted.
 *     nothrottle	Turn off throttling of the message grid. This is an
 * 		optimization that joins many small scrolls to one
 * 		larger scroll when drawing the message area (with
 * 		'display' msgsep flag active).
 *     invalid	Enable stricter checking (abort) of inconsistencies
 * 		of the internal screen state. This is mostly
 * 		useful when running nvim inside a debugger (and
 * 		the test suite).
 *     nodelta	Send all internally redrawn cells to the UI, even if
 *                 they are unchanged from the already displayed state.
 */
export const redrawdebug = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "redrawdebug") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "redrawdebug", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "redrawdebug");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "redrawdebug") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "redrawdebug", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "redrawdebug");
  },
};

/**
 * Maximum number of lines kept beyond the visible screen. Lines at the
 * top are deleted if new lines exceed this limit.
 * Minimum is 1, maximum is 100000.
 * Only in |terminal| buffers.
 */
export const scrollback = {
  async get(denops: Denops): Promise<number> {
    return await options.get(denops, "scrollback") ?? 0;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "scrollback", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "scrollback");
  },
  async getLocal(denops: Denops): Promise<number> {
    return await localOptions.get(denops, "scrollback") ?? 0;
  },
  setLocal(denops: Denops, value: number): Promise<void> {
    return localOptions.set(denops, "scrollback", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "scrollback");
  },
};

/**
 * When non-empty, the shada file is read upon startup and written
 * when exiting Vim (see |shada-file|).  The string should be a comma-
 * separated list of parameters, each consisting of a single character
 * identifying the particular parameter, followed by a number or string
 * which specifies the value of that parameter.  If a particular
 * character is left out, then the default value is used for that
 * parameter.  The following is a list of the identifying characters and
 * the effect of their value.
 * CHAR	VALUE	~
 * !	When included, save and restore global variables that start
 * 	with an uppercase letter, and don't contain a lowercase
 * 	letter.  Thus "KEEPTHIS and "K_L_M" are stored, but "KeepThis"
 * 	and "_K_L_M" are not.  Nested List and Dict items may not be
 * 	read back correctly, you end up with an empty item.
 * "	Maximum number of lines saved for each register.  Old name of
 * 	the '<' item, with the disadvantage that you need to put a
 * 	backslash before the ", otherwise it will be recognized as the
 * 	start of a comment!
 * %	When included, save and restore the buffer list.  If Vim is
 * 	started with a file name argument, the buffer list is not
 * 	restored.  If Vim is started without a file name argument, the
 * 	buffer list is restored from the shada file.  Quickfix
 * 	('buftype'), unlisted ('buflisted'), unnamed and buffers on
 * 	removable media (|shada-r|) are not saved.
 * 	When followed by a number, the number specifies the maximum
 * 	number of buffers that are stored.  Without a number all
 * 	buffers are stored.
 * '	Maximum number of previously edited files for which the marks
 * 	are remembered.  This parameter must always be included when
 * 	'shada' is non-empty.
 * 	Including this item also means that the |jumplist| and the
 * 	|changelist| are stored in the shada file.
 * /	Maximum number of items in the search pattern history to be
 * 	saved.  If non-zero, then the previous search and substitute
 * 	patterns are also saved.  When not included, the value of
 * 	'history' is used.
 * :	Maximum number of items in the command-line history to be
 * 	saved.  When not included, the value of 'history' is used.
 * <	Maximum number of lines saved for each register.  If zero then
 * 	registers are not saved.  When not included, all lines are
 * 	saved.  '"' is the old name for this item.
 * 	Also see the 's' item below: limit specified in KiB.
 * @	Maximum number of items in the input-line history to be
 * 	saved.  When not included, the value of 'history' is used.
 * c	Dummy option, kept for compatibility reasons.  Has no actual
 * 	effect: ShaDa always uses UTF-8 and 'encoding' value is fixed
 * 	to UTF-8 as well.
 * f	Whether file marks need to be stored.  If zero, file marks ('0
 * 	to '9, 'A to 'Z) are not stored.  When not present or when
 * 	non-zero, they are all stored.  '0 is used for the current
 * 	cursor position (when exiting or when doing |:wshada|).
 * h	Disable the effect of 'hlsearch' when loading the shada
 * 	file.  When not included, it depends on whether ":nohlsearch"
 * 	has been used since the last search command.
 * n	Name of the shada file.  The name must immediately follow
 * 	the 'n'.  Must be at the end of the option!  If the
 * 	'shadafile' option is set, that file name overrides the one
 * 	given here with 'shada'.  Environment variables are
 * 	expanded when opening the file, not when setting the option.
 * r	Removable media.  The argument is a string (up to the next
 * 	',').  This parameter can be given several times.  Each
 * 	specifies the start of a path for which no marks will be
 * 	stored.  This is to avoid removable media.  For Windows you
 * 	could use "ra:,rb:".  You can also use it for temp files,
 * 	e.g., for Unix: "r/tmp".  Case is ignored.
 * s	Maximum size of an item contents in KiB.  If zero then nothing
 * 	is saved.  Unlike Vim this applies to all items, except for
 * 	the buffer list and header.  Full item size is off by three
 * 	unsigned integers: with `s10` maximum item size may be 1 byte
 * 	(type: 7-bit integer) + 9 bytes (timestamp: up to 64-bit
 * 	integer) + 3 bytes (item size: up to 16-bit integer because
 * 	2^8 < 10240 < 2^16) + 10240 bytes (requested maximum item
 * 	contents size) = 10253 bytes.
 */
export const shada = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "shada") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "shada", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "shada");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "shada") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "shada", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "shada");
  },
};

/**
 * When non-empty, overrides the file name used for |shada| (viminfo).
 * When equal to "NONE" no shada file will be read or written.
 * This option can be set with the |-i| command line flag.  The |--clean|
 * command line flag sets it to "NONE".
 * This option cannot be set from a |modeline| or in the |sandbox|, for
 * security reasons.
 */
export const shadafile = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "shadafile") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "shadafile", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "shadafile");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "shadafile") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "shadafile", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "shadafile");
  },
};

/**
 * A comma-separated list of options for specifying control characters
 * to be removed from the text pasted into the terminal window. The
 * supported values are:
 */
export const termpastefilter = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "termpastefilter") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "termpastefilter", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "termpastefilter");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "termpastefilter") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "termpastefilter", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "termpastefilter");
  },
};

/**
 * When non-empty, this option enables the window bar and determines its
 * contents. The window bar is a bar that's shown at the top of every
 * window with it enabled. The value of 'winbar' is evaluated like with
 * 'statusline'.
 */
export const winbar = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "winbar") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "winbar", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "winbar");
  },
  async getGlobal(denops: Denops): Promise<string> {
    return await globalOptions.get(denops, "winbar") ?? "";
  },
  setGlobal(denops: Denops, value: string): Promise<void> {
    return globalOptions.set(denops, "winbar", value);
  },
  resetGlobal(denops: Denops): Promise<void> {
    return globalOptions.remove(denops, "winbar");
  },
  async getLocal(denops: Denops): Promise<string> {
    return await localOptions.get(denops, "winbar") ?? "";
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "winbar", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "winbar");
  },
};

/**
 * Enables pseudo-transparency for a floating window. Valid values are in
 * the range of 0 for fully opaque window (disabled) to 100 for fully
 * transparent background. Values between 0-30 are typically most useful.
 */
export const winblend = {
  async get(denops: Denops): Promise<number> {
    return await options.get(denops, "winblend") ?? 0;
  },
  set(denops: Denops, value: number): Promise<void> {
    return options.set(denops, "winblend", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "winblend");
  },
  async getLocal(denops: Denops): Promise<number> {
    return await localOptions.get(denops, "winblend") ?? 0;
  },
  setLocal(denops: Denops, value: number): Promise<void> {
    return localOptions.set(denops, "winblend", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "winblend");
  },
};

/**
 * Window-local highlights.  Comma-delimited list of highlight
 * |group-name| pairs "{hl-from}:{hl-to},..." where each {hl-from} is
 * a |highlight-groups| item to be overridden by {hl-to} group in
 * the window.
 */
export const winhighlight = {
  async get(denops: Denops): Promise<string> {
    return await options.get(denops, "winhighlight") ?? "";
  },
  set(denops: Denops, value: string): Promise<void> {
    return options.set(denops, "winhighlight", value);
  },
  reset(denops: Denops): Promise<void> {
    return options.remove(denops, "winhighlight");
  },
  async getLocal(denops: Denops): Promise<string> {
    return await localOptions.get(denops, "winhighlight") ?? "";
  },
  setLocal(denops: Denops, value: string): Promise<void> {
    return localOptions.set(denops, "winhighlight", value);
  },
  resetLocal(denops: Denops): Promise<void> {
    return localOptions.remove(denops, "winhighlight");
  },
};
