"use client";
import Image from "next/image";
import icog from "@/images/newlogo.png";
import homeInstead from "@/images/homeinstead.png";
import immersive from "@/images/logointern.png";
import { detail, outcome } from "@/components/rowStyles";

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
          <div className="flex flex-col md:flex-row justify-center items-center md:items-start pt-25 gap-10 md:gap-8 max-w-[848px] mx-auto px-4 lg:px-0">
            {/* Same hairline as the Immersive card: the mark is white on pure
                black, so without it the card edge dissolves into the page. */}
            <div
              className="group relative h-56 w-56 md:h-40 md:w-40 lg:h-56 lg:w-56 overflow-hidden rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.3)] ring-1 ring-white/10 flex-shrink-0"
              onClick={() => window.open("https://incognitolabs.cc/", "_blank")}
            >
              <Image
                src={icog}
                alt=""
                className="absolute inset-0 h-full w-full object-cover z-10"
              />

              <div className="absolute inset-0 bg-gradient-to-b from-yellow-400 to-black opacity-0 group-hover:opacity-85 transition-opacity duration-300 z-20" />

              <div className="absolute bottom-[-70px] group-hover:bottom-0 w-full z-30 p-5 transition-all duration-300 bg-gradient-to-b from-transparent to-black group-hover:bg-transparent">
                <button
                  className="mt-7 mb-2 px-6 h-10 leading-[34px] cursor-pointer border-2 border-yellow-400 rounded text-sm text-white bg-transparent uppercase font-bold transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-400 hover:text-black"
                  onClick={() => window.open("https://incognitolabs.cc/", "_blank")}
                >
                  Visit Site
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-4 flex-1 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold">Founder &amp; CEO</h2>
              <p className="text-xl text-white/70">Incognito Labs</p>
              <p className="text-lg text-white/85">A stealth company building consumer mobile apps + software for companies.</p>
              <p className="text-base text-white/65">Led both the developer and marketing teams, setting the strategy for each.</p>
              <p className={outcome}>10,000+ monthly users across all products.</p>
            </div>

            <p className="text-base text-white/60 flex-shrink-0 whitespace-nowrap md:mt-2 md:text-right">
              Jan 2025 — Present
            </p>
          </div>

          {/* Experience 2 */}
          <div className="flex flex-col md:flex-row justify-center items-center md:items-start pt-30 gap-10 md:gap-8 max-w-[848px] mx-auto px-4 lg:px-0">
            {/* The wordmark is white on black, so a hairline keeps the card
                from dissolving into the page. */}
            <div className="relative h-56 w-56 md:h-40 md:w-40 lg:h-56 lg:w-56 flex-shrink-0 overflow-hidden rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.3)] ring-1 ring-white/10">
              <Image
                src={immersive}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-col gap-4 flex-1 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold">Software Engineer Intern</h2>
              <p className="text-xl text-white/70">Immersive Haus GmbH</p>
              <p className="text-lg">rebuilt an internal service and cut its response time in half.</p>
            </div>

            <p className="text-base text-white/60 flex-shrink-0 whitespace-nowrap md:mt-2 md:text-right">
              Jun 2025 — Aug 2025
            </p>
          </div>

          {/* Experience 3 */}
          <div className="flex flex-col md:flex-row justify-center items-center md:items-start pt-30 gap-10 md:gap-8 max-w-[848px] mx-auto px-4 lg:px-0">
            {/* Plain logo: no public site to send people to, so no hover state. */}
            <div className="relative h-56 w-56 md:h-40 md:w-40 lg:h-56 lg:w-56 flex-shrink-0 overflow-hidden rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
              {/* The source file carries a wide white margin; scaling up trims it
                  so the wordmark sits at the same optical size as the cards above. */}
              <Image
                src={homeInstead}
                alt=""
                className="absolute inset-0 h-full w-full object-cover scale-125"
              />
            </div>

            <div className="flex flex-col gap-4 flex-1 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold">Software Engineering Intern</h2>
              <p className="text-xl text-white/70">Home Instead</p>
              <p className="text-lg text-white/85">Built LifeLine - a new care management legacy system.</p>
              <ul className={detail}>
                <li>Pitched to and approved by management: highlighting weaknesses in the current system and the benefits of the solution.</li>
                <li>Spoke with care staff and developers to understand both user and product needs.</li>
                <li>Led weekly progress reviews with the director.</li>
              </ul>
            </div>

            <p className="text-base text-white/60 flex-shrink-0 whitespace-nowrap md:mt-2 md:text-right">
              Jul 2024 — Aug 2024
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
