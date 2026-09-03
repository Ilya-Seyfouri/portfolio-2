/*
 * The row contract shared by the project and experience sections.
 *
 * Every row reads in the same order and at the same measure, so the two
 * sections stay one system:
 *
 *   header   the name, and for a job the company and dates
 *   lead     what it is, in one sentence
 *   detail   how it works — the hairline rule is what marks it as mechanics
 *   outcome  what it proved, in the accent, always last
 *
 * A row may skip a slot, but never reorders or restyles one. The rules and the
 * left alignment are md-only: a phone centres the text, and a centred column
 * hanging off a left rule reads as a mistake.
 */

/* Icon and text, centred as a pair. Matched by both sections. */
export const column =
  "flex w-full flex-col gap-4 text-center md:w-[28rem] md:text-left";

/* Name, company and dates travel together, so they sit tighter than the blocks. */
export const header = "flex flex-col gap-1";
export const title = "text-3xl md:text-4xl font-bold";
export const org = "text-xl text-white/70";
export const dates = "text-sm text-white/45";

export const lead = "text-lg text-white/85";
export const detail =
  "flex flex-col gap-3 text-base text-white/65 md:border-l md:border-white/15 md:pl-5";
export const outcome = "text-base font-semibold text-yellow-400";
