import type { Denops } from "https://deno.land/x/denops_core@v4.0.0/mod.ts";

/**
 * Return a string that indicates the current mode.
 * If [expr] is supplied and it evaluates to a non-zero Number or
 * a non-empty String (|non-zero-arg|), then the full mode is
 * returned, otherwise only the first letter is returned.
 * Also see |state()|.
 *    n	    Normal, Terminal-Normal
 *    no	    Operator-pending
 *    nov	    Operator-pending (forced characterwise |o_v|)
 *    noV	    Operator-pending (forced linewise |o_V|)
 *    noCTRL-V Operator-pending (forced blockwise |o_CTRL-V|);
 * 		CTRL-V is one character
 *    niI	    Normal using |i_CTRL-O| in |Insert-mode|
 *    niR	    Normal using |i_CTRL-O| in |Replace-mode|
 *    niV	    Normal using |i_CTRL-O| in |Virtual-Replace-mode|
 *    v	    Visual by character
 *    V	    Visual by line
 *    CTRL-V   Visual blockwise
 *    s	    Select by character
 *    S	    Select by line
 *    CTRL-S   Select blockwise
 *    i	    Insert
 *    ic	    Insert mode completion |compl-generic|
 *    ix	    Insert mode |i_CTRL-X| completion
 *    R	    Replace |R|
 *    Rc	    Replace mode completion |compl-generic|
 *    Rv	    Virtual Replace |gR|
 *    Rx	    Replace mode |i_CTRL-X| completion
 *    c	    Command-line editing
 *    cv	    Vim Ex mode |gQ|
 *    ce	    Normal Ex mode |Q|
 *    r	    Hit-enter prompt
 *    rm	    The -- more -- prompt
 *    r?	    A |:confirm| query of some sort
 *    !	    Shell or external command is executing
 *    t	    Terminal-Job mode: keys go to the job
 * This is useful in the 'statusline' option or when used
 * with |remote_expr()| In most other places it always returns
 * "c" or "n".
 * Note that in the future more modes and more specific modes may
 * be added. It's better not to compare the whole string but only
 * the leading character(s).
 * Also see |visualmode()|.
 * Can also be used as a |method|:
 * 	DoFull()->mode()
 */
export function mode(denops: Denops, expr?: number | string): Promise<string> {
  return denops.call("mode", expr) as Promise<string>;
}
