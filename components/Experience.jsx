"use client";
import Image from "next/image";
import icog from "@/images/newlogo.png";
import homeInstead from "@/images/homeinstead.png";
import immersive from "@/images/logointern.png";
import { column, header, title, meta, body } from "@/components/rowStyles";

/*
 * Same geometry as the project rows: an icon of the same size, the same gaps,
 * and the same text column, so the two sections read as one page. The dates sit
 * in the header with the company rather than in a column of their own, which is
 * what used to pull these rows off the project grid.
 */
const ROW =
  "relative flex flex-col md:flex-row justify-center items-center gap-10 md:gap-10 lg:gap-20 max-w-6xl mx-auto px-4 lg:px-0";
const FRAME =
  "relative block h-80 w-80 md:h-56 md:w-56 lg:h-80 lg:w-80 flex-shrink-0 overflow-hidden rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.3)]";

export default function Experience() {
  return (
    <>
      <section id="experience">
        {/* Last section on the page, so it carries the bottom spacing. */}
        <div className="container mx-auto pb-40">
          <div className="pt-35 flex justify-center items-center">
            <h2 className="text-5xl md:text-6xl font-bold">Experience.</h2>
          </div>

          {/* Experience 1 */}
          <div className="pt-25">
            <div className={ROW}>
              {/* The mark is white on pure black, so a hairline keeps the card
                  edge from dissolving into the page. */}
              <a
                href="https://incognitolabs.cc/"
                target="_blank"
                rel="noreferrer"
                aria-label="Incognito Labs — visit incognitolabs.cc"
                className={`group ${FRAME} ring-1 ring-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-4 focus-visible:ring-offset-black`}
              >
                <Image
                  src={icog}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover z-10"
                />

                <div className="absolute inset-0 bg-gradient-to-b from-yellow-400 to-black opacity-0 group-hover:opacity-85 transition-opacity duration-300 z-20" />

                <div className="absolute bottom-[-70px] group-hover:bottom-0 w-full z-30 p-5 transition-all duration-300 bg-gradient-to-b from-transparent to-black group-hover:bg-transparent">
                  <span className="mt-7 mb-2 inline-block px-6 h-10 leading-[34px] border-2 border-yellow-400 rounded text-sm text-white uppercase font-bold transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-yellow-400 group-hover:text-black">
                    Visit Site
                  </span>
                </div>
              </a>

              <div className={column}>
                <div className={header}>
                  <h2 className={title}>Incognito Labs</h2>
                  <p className={meta}>
                    <span>Founder &amp; CEO</span> &middot; <span>Mar 2026 &mdash; Present</span>
                  </p>
                </div>
                <div className={body}>
                  <p>A stealth company building consumer mobile apps and software for companies.</p>
                  <p>5,000+ monthly users across all products.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Experience 2 */}
          <div className="pt-30">
            <div className={ROW}>
              {/* The wordmark is white on black, so it takes the same hairline. */}
              <div className={`${FRAME} ring-1 ring-white/10`}>
                <Image
                  src={immersive}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>

              <div className={column}>
                <div className={header}>
                  <h2 className={title}>Immersive Haus</h2>
                  <p className={meta}>
                    <span>Software Engineer Intern</span> &middot;{" "}
                    <span>Jun 2025 &mdash; Aug 2025</span>
                  </p>
                </div>
                <div className={body}>
                  <p>Designed the sequencing algorithm behind the commissioning scheduler, cutting testing time by 40% across 24 installations, sequencing 1,000+ checks.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Experience 3 */}
          <div className="pt-30">
            <div className={ROW}>
              {/* The source file carries a wide white margin; scaling up trims it
                  so the wordmark sits at the same optical size as the cards above. */}
              <div className={FRAME}>
                <Image
                  src={homeInstead}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover scale-125"
                />
              </div>

              <div className={column}>
                <div className={header}>
                  <h2 className={title}>Home Instead</h2>
                  <p className={meta}>
                    <span>Software Engineering Intern</span> &middot;{" "}
                    <span>Jun 2025 &mdash; Aug 2025</span> &middot;{" "}
                    <span>Leeds, United Kingdom</span>
                  </p>
                </div>
                <div className={body}>
                  <p>Identified limitations in the existing care-management system, presenting a pitch to key stakeholders and securing approval to build the replacement (LifeLine).</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
