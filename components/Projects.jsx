"use client";
import ShowcaseRow from "@/components/ShowcaseRow";
import LaptopRow from "@/components/LaptopRow";
import arc76 from "@/images/appiconn.png";
import cvlab from "@/images/logo.jpg";
import slimmer from "@/images/SLIMMER65_ICON.png";
import lifeline from "@/images/lifelinelogo.png";
import hairsalon from "@/images/hairbynalan.png";
import { header, title, body, bodyLink } from "@/components/rowStyles";

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
              <div className={body}>
                <p>After noticing the state of the job market, I created a solution:</p>
                <p>An AI CV-tailoring platform generating £1,000+ in revenue, returning a downloadable resume and cover letter in under 20 seconds.</p>
              </div>
            </LaptopRow>
          </div>

          {/* Project 2 */}
          <div className="pt-30">
            <ShowcaseRow icon={slimmer} name="Slimmer" screens={slimmerScreens}>
              <div className={header}>
                <h2 className={title}>Slimmer</h2>
              </div>
              <div className={body}>
                <p>A fitness app with 4+ hours of ultra-realistic AI workout footage.</p>
                <p>
                  <a
                    href="https://apps.apple.com/gb/app/slimmer-65/id6761863273"
                    target="_blank"
                    rel="noreferrer"
                    className={bodyLink}
                  >
                    Live on the App Store
                  </a>{" "}
                  with 1,000+ monthly active users.
                </p>
              </div>
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
              <div className={body}>
                <p>Built the care priority engine, assessing each patient&rsquo;s vitals and missed medications against their clinical history.</p>
                <p>Returns a ranked list of executable actions: reassign medication, schedule a visit or raise a report.</p>
              </div>
            </LaptopRow>
          </div>

          {/* Project 4 */}
          <div className="pt-30">
            <ShowcaseRow icon={arc76} name="Arc76" screens={arc76Screens}>
              <div className={header}>
                <h2 className={title}>ARC76</h2>
              </div>
              <div className={body}>
                <p>A self-improvement app you can&rsquo;t lie to.</p>
                <p>TikTok &amp; Instagram are blocked until all of a user&rsquo;s daily tasks are complete.</p>
                <p>Every task is verified through a live photo.</p>
                <p>Live on the App Store. 2,000+ monthly users.</p>
              </div>
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
              <div className={body}>
                <p>A booking system and landing page for a hair salon that was losing appointments to missed calls and DMs.</p>
                <p>Sales up 150% in the first month.</p>
              </div>
            </LaptopRow>
          </div>
        </div>
      </section>
    </>
  );
}
