"use client";
import ShowcaseRow from "@/components/ShowcaseRow";
import LaptopRow from "@/components/LaptopRow";
import arc76 from "@/images/appiconn.png";
import cvlab from "@/images/logo.jpg";
import slimmer from "@/images/SLIMMER65_ICON.png";
import lifeline from "@/images/lifelinelogo.png";
import hairsalon from "@/images/hairbynalan.png";
import { detail, outcome } from "@/components/rowStyles";

// Phone screens live in /public/screens/<app>/, in the order a new user meets
// them rather than the order the files were named.
const arc76Screens = [
  { src: "/screens/arc76/01-promise.png", title: "Getting started" },
  { src: "/screens/arc76/02-today.png", title: "Today's tasks" },
  { src: "/screens/arc76/03-unlock.png", title: "Earning app time" },
  { src: "/screens/arc76/04-crate.png", title: "Crate earned" },
  { src: "/screens/arc76/05-reward.png", title: "The reward" },
];

const slimmerScreens = [
  { src: "/screens/slimmer/01-welcome.png", title: "Getting started" },
  { src: "/screens/slimmer/02-routine.png", title: "Building your plan" },
  { src: "/screens/slimmer/03-workouts.png", title: "The workout library" },
  { src: "/screens/slimmer/04-workout.png", title: "Inside a workout" },
  { src: "/screens/slimmer/05-meals.png", title: "The meal plan" },
];

export default function Projects() {
  return (
    <>
      <section id="projects">
        <div className="container mx-auto">
          <div className="pt-35 flex justify-center items-center">
            <h2 className="text-5xl md:text-6xl font-bold">Projects.</h2>
          </div>

          {/* Project 1 */}
          <div className="pt-25">
            <ShowcaseRow icon={arc76} name="Arc76" screens={arc76Screens}>
              <h2 className="text-3xl md:text-4xl font-bold">Arc76</h2>
              <p className="text-lg text-white/85">A self-improvement app you can&rsquo;t lie to.</p>
              <ul className={detail}>
                <li>Every task you do is verified by a live photo - an AI vision check clears or rejects it in seconds.</li>
                <li>App blocking through Apple&rsquo;s Screen Time API keeps TikTok and Instagram locked until the day&rsquo;s tasks are done.</li>
              </ul>
              <p className={outcome}>Live on the App Store.</p>
            </ShowcaseRow>
          </div>

          {/* Project 2 */}
          <div className="pt-30">
            <LaptopRow
              icon={cvlab}
              name="CV Lab"
              url="https://cvlab.ltd/"
              host="cvlab.ltd"
              shot="/screens/sites/cvlab.png"
            >
              <h2 className="text-3xl md:text-4xl font-bold">CV Lab</h2>
              <p className="text-lg text-white/85">After noticing the state of the job market, I created a solution.</p>
              <p className="text-base text-white/65">Send a job description and download two PDFs - a CV and a cover letter tailored to that specific role - in five seconds.</p>
              <p className={outcome}>100+ users in the first week of launch.</p>
            </LaptopRow>
          </div>

          {/* Project 3 */}
          <div className="pt-30">
            <ShowcaseRow icon={slimmer} name="Slimmer" screens={slimmerScreens}>
              <h2 className="text-3xl md:text-4xl font-bold">Slimmer</h2>
              <p className="text-lg text-white/85">A fitness app that turns your goals into a personalized 60-day transformation plan.</p>
              <ul className={detail}>
                <li>Generated 4+ hours of home workout footage with Kling 3.0 - ultra-realistic human motion, no studio, actors, or film crew.</li>
                <li>Engineered a face scan feature that tracks visible progress week to week.</li>
                <li>Shipped a photo calorie tracker - snap a meal, get instant macros.</li>
              </ul>
              <p className={outcome}>
                <a
                  href="https://apps.apple.com/gb/app/slimmer-65/id6761863273"
                  target="_blank"
                  rel="noreferrer"
                  className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
                >
                  Live on the App Store
                </a>
                .
              </p>
            </ShowcaseRow>
          </div>

          {/* Project 4 */}
          <div className="pt-30">
            <LaptopRow
              icon={lifeline}
              name="LifeLine"
              url="https://careview2-847694957064.europe-west2.run.app/"
              host="careview2-847694957064.europe-west2.run.app"
              shot="/screens/sites/careview.png"
              linkOnMobile={false}
            >
              <h2 className="text-3xl md:text-4xl font-bold">LifeLine</h2>
              <p className="text-lg text-white/85">Identified inefficiencies in a care home&rsquo;s legacy system and built a more efficient solution.</p>
              <p className={outcome}>Presented to the management team and got it approved.</p>
            </LaptopRow>
          </div>

          {/* Project 5 */}
          <div className="pt-30">
            <LaptopRow
              icon={hairsalon}
              name="HairByNalan"
              url="https://hairbynalaninciogu.up.railway.app/"
              host="hairbynalaninciogu.up.railway.app"
              shot="/screens/sites/hair.png"
            >
              <h2 className="text-3xl md:text-4xl font-bold">HairByNalan</h2>
              <p className="text-lg text-white/85">A booking system and landing page for a hair salon that was losing appointments to missed calls and DMs.</p>
              <p className={outcome}>Sales up 150% in the first month.</p>
            </LaptopRow>
          </div>
        </div>
      </section>
    </>
  );
}
