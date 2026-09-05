/*
 * One text spec for every row, in both sections.
 *
 *   title  the name of the thing — a product, or a company
 *   meta   what qualifies it, on a single line
 *   body   the sentences, all set identically
 *
 * There is no accent colour and no tiering. A row is a name and a short
 * paragraph, and the only thing that changes between rows is the words. Rows
 * may skip a slot — a project has no meta line — but never restyle one.
 */

/* The text column, held to a readable measure beside the icon. */
export const column =
  "flex w-full max-w-[32rem] flex-col gap-6 text-center md:w-[27rem] md:text-left";

/* Name and meta travel together, so they sit tighter than the blocks. */
export const header = "flex flex-col gap-2";

export const title =
  "text-[1.75rem] md:text-[2.125rem] font-semibold leading-[1.15] tracking-[-0.022em] text-white";

/* Fields never break mid-phrase, so a long meta line wraps at a separator. */
export const meta =
  "text-[0.8125rem] leading-[1.6] text-white/45 [&>span]:whitespace-nowrap";

/* Every sentence on the page is set here, and only here. */
export const body =
  "flex flex-col gap-4 text-[0.9375rem] md:text-base leading-[1.7] text-white/65";

/* The one interactive affordance inside body copy. */
export const bodyLink =
  "underline decoration-white/25 underline-offset-4 transition-colors hover:decoration-white/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black";
