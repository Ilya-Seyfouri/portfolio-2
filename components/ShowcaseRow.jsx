"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import useShowcaseMode from "@/components/useShowcaseMode";

/**
 * A project row whose icon deals its app screens across the whole viewport.
 *
 * With a mouse: opens on hover over the icon, stays open anywhere in the row,
 * closes when the pointer leaves the row. On a tablet there is no hover, so the
 * icon toggles on tap and a tap anywhere off it closes. On a phone there is no
 * room to deal five screens across, so the icon is just a picture.
 *
 * Escape and scrolling close it in every mode.
 *
 * Screens live in /public/screens/<app>/. Drop a portrait phone screenshot in,
 * point `src` at it, and it fills the frame.
 */
const FRAME =
  "relative block h-80 w-80 md:h-56 md:w-56 lg:h-80 lg:w-80 flex-shrink-0 overflow-hidden rounded-3xl";
const RESTING = "shadow-[0_10px_30px_rgba(0,0,0,0.3)]";

export default function ShowcaseRow({ icon, name, screens, children }) {
  const mode = useShowcaseMode();
  const [open, setOpen] = useState(false);

  // Rotating a tablet into a phone-sized window leaves nothing to close.
  useEffect(() => {
    if (mode === "none") setOpen(false);
  }, [mode]);

  useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    const onKeyDown = (e) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("scroll", close, { passive: true });
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("scroll", close);
    };
  }, [open]);

  const last = screens.length - 1;
  const middle = last / 2;

  const artwork = (
    <Image
      src={icon}
      alt=""
      className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
        open ? "opacity-0" : "opacity-100"
      }`}
    />
  );

  return (
    <div
      onMouseLeave={mode === "hover" ? () => setOpen(false) : undefined}
      className="relative flex flex-col md:flex-row justify-center items-center gap-10 md:gap-10 lg:gap-20 max-w-6xl mx-auto px-4 lg:px-0"
    >
      {mode === "none" ? (
        <div className={`${FRAME} ${RESTING}`}>{artwork}</div>
      ) : (
        <button
          type="button"
          aria-expanded={open}
          aria-label={`${name} — ${open ? "hide" : "show"} app screens`}
          onMouseEnter={mode === "hover" ? () => setOpen(true) : undefined}
          onClick={() => setOpen((v) => !v)}
          className={`${FRAME} cursor-pointer transition-shadow duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-4 focus-visible:ring-offset-black ${
            open ? "z-[70] shadow-none" : RESTING
          }`}
        >
          {artwork}
        </button>
      )}

      <div className="flex w-full flex-col gap-4 text-center md:w-[28rem] md:text-left">{children}</div>

      {/*
        The fan. Fixed to the viewport so the screens are not boxed in by the row,
        and never takes the pointer, so the row keeps tracking hover underneath it.
        --pw is the phone width: as tall as the viewport allows, then narrowed if
        six of them at --stride overlap would not fit across.
      */}
      <div
        aria-hidden={!open}
        style={{ "--n": screens.length }}
        className="screen-fan pointer-events-none fixed inset-0 z-[60] flex items-center justify-center"
      >
        {/*
          On touch the scrim is the way out. The screens above it stay
          pointer-transparent, so a tap anywhere but the icon lands here.
        */}
        <div
          onClick={mode === "tap" ? () => setOpen(false) : undefined}
          className={`absolute inset-0 bg-black/95 transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          } ${mode === "tap" && open ? "pointer-events-auto" : ""}`}
        />

        {screens.map((screen, i) => {
          const offset = i - middle;
          // -1 at the far left, 0 in the middle, 1 at the far right, so the tilt
          // and the arc reach the same extremes whatever the screen count is.
          const spread = middle ? offset / middle : 0;
          return (
            <div
              key={screen.src}
              className="fan-screen iphone absolute left-1/2 top-1/2"
              style={{
                zIndex: i,
                transitionDelay: open ? `${i * 45}ms` : `${(last - i) * 22}ms`,
                opacity: open ? 1 : 0,
                transform: open
                  ? `translate(calc(-50% + var(--pw) * var(--stride) * ${offset}), calc(-50% + var(--pw) * ${(
                      spread *
                      spread *
                      0.16
                    ).toFixed(4)})) rotate(${(spread * 9).toFixed(2)}deg)`
                  : "translate(-50%, -50%) rotate(0deg) scale(0.5)",
              }}
            >
              <div className="iphone-screen aspect-[828/1792] w-full">
                <Image
                  src={screen.src}
                  alt={`${name} — ${screen.title}`}
                  fill
                  sizes="(max-width: 768px) 30vw, 22vw"
                  className="object-cover"
                />
                <span className="iphone-notch" aria-hidden="true" />
              </div>
              <span className="iphone-btn iphone-btn-mute" aria-hidden="true" />
              <span className="iphone-btn iphone-btn-up" aria-hidden="true" />
              <span className="iphone-btn iphone-btn-down" aria-hidden="true" />
              <span className="iphone-btn iphone-btn-power" aria-hidden="true" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
