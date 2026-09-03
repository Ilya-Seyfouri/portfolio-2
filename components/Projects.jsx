"use client";
import ShowcaseRow from "@/components/ShowcaseRow";
import LaptopRow from "@/components/LaptopRow";
import arc76 from "@/images/appiconn.png";
import cvlab from "@/images/logo.jpg";
import slimmer from "@/images/SLIMMER65_ICON.png";
import lifeline from "@/images/lifelinelogo.png";
import hairsalon from "@/images/hairbynalan.png";
import { header, title, lead, detail, outcome } from "@/components/rowStyles";

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
            <LaptopRow
              icon={cvlab}
              name="CV Lab"
              url="https://cvlab.ltd/"
              host="cvlab.ltd"
              shot="/screens/sites/cvlab.png"
            >
              <div className={header}>
                <h2 className={title}>CV Lab</h2>
              </div>
              <p className={lead}>After noticing the state of the job market, I created a solution:</p>
              <p className={outcome}>An AI CV-tailoring platform generating £1,000+ in revenue.</p>
              <ul className={detail}>
                <li>Developed a five-stage pipeline: users upload a job description, the system extracts keywords and job responsibilities, then generates a downloadable CV and cover letter in 20 seconds.</li>
                <li>Ranked 1st on Google for &lsquo;CV Lab&rsquo; ahead of competitors sharing the name, through SEO strategy and inbound links.</li>
              </ul>
            </LaptopRow>
          </div>

          {/* Project 2 */}
          <div className="pt-30">
            <ShowcaseRow icon={slimmer} name="Slimmer" screens={slimmerScreens}>
              <div className={header}>
                <h2 className={title}>Slimmer</h2>
              </div>
              <p className={lead}>An iOS fitness app which creates a personalised 60-day transformation plan.</p>
              <ul className={detail}>
                <li>Generated 4+ hours of ultra-realistic AI workout footage using Kling 3.0, replacing the need for a studio shoot with actors.</li>
              </ul>
              <p className={outcome}>
                <a
                  href="https://apps.apple.com/gb/app/slimmer-65/id6761863273"
                  target="_blank"
                  rel="noreferrer"
                  className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
                >
                  Live on the App Store
                </a>{" "}
                with 1,000+ monthly active users
              </p>
            </ShowcaseRow>
          </div>

          {/* Project 3 */}
          <div className="pt-30">
            <LaptopRow
              icon={lifeline}
              name="LifeLine"
              url="https://careview2-847694957064.europe-west2.run.app/"
              host="careview2-847694957064.europe-west2.run.app"
              shot="/screens/sites/careview.png"
              linkOnMobile={false}
            >
              <div className={header}>
                <h2 className={title}>LifeLine</h2>
              </div>
              <p className={lead}>Identified inefficiencies in a care homes management system and built a more efficient solution</p>
              <ul className={detail}>
                <li>Built a care priority engine that assesses each patient&rsquo;s vitals, visit logs and missed medications against their clinical history, returning a ranked list proposing actions to reassign medication, schedule a visit or to create a report.</li>
              </ul>
            </LaptopRow>
          </div>

          {/* Project 4 */}
          <div className="pt-30">
            <ShowcaseRow icon={arc76} name="Arc76" screens={arc76Screens}>
              <div className={header}>
                <h2 className={title}>ARC76</h2>
              </div>
              <p className={lead}>An iOS self improvement app you cant lie to.</p>
              <ul className={detail}>
                <li>Tiktok &amp; Instagram are blocked using Apples Screen Time API until all of a users daily tasks are complete.</li>
                <li>Every task is verified through a live photo - ai vision check approves/rejects it in seconds.</li>
              </ul>
              <p className={outcome}>Live on the app store. 2,000+ monthly users</p>
            </ShowcaseRow>
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
              <div className={header}>
                <h2 className={title}>HairByNalan</h2>
              </div>
              <p className={lead}>A booking system and landing page for a hair salon that was losing appointments to missed calls and DMs.</p>
              <p className={outcome}>Sales up 150% in the first month.</p>
            </LaptopRow>
          </div>
        </div>
      </section>
    </>
  );
}
