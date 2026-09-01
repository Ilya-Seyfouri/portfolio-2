"use client";
import Image from "next/image";
import icog from "@/images/icoglogo.png";
import lifeline from "@/images/lifelinelogo.png";

export default function Experience() {
  return (
    <>
      <section id="experience">
        <div className="container mx-auto">
          <div className="pt-35 flex justify-center items-center">
            <h2 className="text-5xl md:text-6xl font-bold">Experience.</h2>
          </div>

          {/* Experience 1 */}
          <div className="flex flex-col md:flex-row justify-center items-center pt-25 gap-10 md:gap-8 max-w-[848px] mx-auto px-4 md:px-0">
            <div
              className="group relative h-56 w-56 overflow-hidden rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.3)] flex-shrink-0"
              onClick={() => window.open("https://incognitolabs.cc/", "_blank")}
            >
              <Image
                src={icog}
                alt="logo"
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
              <p className="text-lg">built and shipped a cv review tool for a broken tech job market.</p>
            </div>

            <p className="text-base text-white/60 flex-shrink-0 whitespace-nowrap md:text-right">
              Jan 2025 — Present
            </p>
          </div>

          {/* Experience 2 */}
          <div className="flex flex-col md:flex-row justify-center items-center pt-30 gap-10 md:gap-8 max-w-[848px] mx-auto px-4 md:px-0">
            <div className="h-56 w-56 flex-shrink-0" />

            <div className="flex flex-col gap-4 flex-1 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold">Software Engineer Intern</h2>
              <p className="text-xl text-white/70">Company Name</p>
              <p className="text-lg">rebuilt an internal service and cut its response time in half.</p>
            </div>

            <p className="text-base text-white/60 flex-shrink-0 whitespace-nowrap md:text-right">
              Jun 2025 — Aug 2025
            </p>
          </div>

          {/* Experience 3 */}
          <div className="flex flex-col md:flex-row justify-center items-center pt-30 gap-10 md:gap-8 max-w-[848px] mx-auto px-4 md:px-0">
            <div
              className="group relative h-56 w-56 overflow-hidden rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.3)] flex-shrink-0"
              onClick={() => window.open("https://careview2-847694957064.europe-west2.run.app/", "_blank")}
            >
              <Image
                src={lifeline}
                alt="logo"
                className="absolute inset-0 h-full w-full object-cover z-10"
              />

              <div className="absolute inset-0 bg-gradient-to-b from-yellow-400 to-black opacity-0 group-hover:opacity-85 transition-opacity duration-300 z-20" />

              <div className="absolute bottom-[-70px] group-hover:bottom-0 w-full z-30 p-5 transition-all duration-300 bg-gradient-to-b from-transparent to-black group-hover:bg-transparent">
                <button
                  className="mt-7 mb-2 px-6 h-10 leading-[34px] cursor-pointer border-2 border-yellow-400 rounded text-sm text-white bg-transparent uppercase font-bold transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-400 hover:text-black"
                  onClick={() => window.open("https://careview2-847694957064.europe-west2.run.app/", "_blank")}
                >
                  Visit Site
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-4 flex-1 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold">Software Engineering Intern</h2>
              <p className="text-xl text-white/70">Lifeline</p>
              <p className="text-lg">shipped an internal dashboard used by the operations team.</p>
            </div>

            <p className="text-base text-white/60 flex-shrink-0 whitespace-nowrap md:text-right">
              Jul 2024 — Aug 2024
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
