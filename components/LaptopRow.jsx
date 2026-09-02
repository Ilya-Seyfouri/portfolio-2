"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import useShowcaseMode from "@/components/useShowcaseMode";

/**
 * A project row whose icon opens a laptop showing the site's landing page.
 *
 * With a mouse: hovering the icon opens the lid; clicking either the icon or
 * the laptop goes to the site. The laptop takes the pointer while it is open,
 * so moving onto it keeps the lid up and makes it the click target — which is
 * where the pointer already is once the screen fills.
 *
 * On a tablet there is no hover, so tapping the icon opens the lid instead of
 * following the link, tapping the laptop goes to the site, and tapping the
 * scrim closes. On a phone the laptop is too small to be worth the detour, so
 * the icon is a plain shortcut to the site — unless `linkOnMobile` is false,
 * which leaves it a picture.
 *
 * Landing page shots live in /public/screens/sites/. 16:10 fills the screen
 * exactly; anything taller is cropped from the bottom, keeping the hero.
 */
const FRAME =
  "relative block h-80 w-80 md:h-56 md:w-56 lg:h-80 lg:w-80 flex-shrink-0 overflow-hidden rounded-3xl";
const RESTING = "shadow-[0_10px_30px_rgba(0,0,0,0.3)]";
const FOCUS =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-4 focus-visible:ring-offset-black";

export default function LaptopRow({
  icon,
  name,
  url,
  host,
  shot,
  linkOnMobile = true,
  children,
}) {
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

  const screen = (
    <>
      <div className="macbook-tabs">
        <span className="macbook-lights" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span className="macbook-tab">
          <Image src={icon} alt="" className="macbook-favicon" />
          {name}
        </span>
      </div>
      <div className="macbook-bar">
        <svg className="macbook-nav" viewBox="0 0 16 16" aria-hidden="true">
          <path d="M10 12 6 8l4-4" />
        </svg>
        <svg className="macbook-nav macbook-nav-off" viewBox="0 0 16 16" aria-hidden="true">
          <path d="m6 12 4-4-4-4" />
        </svg>
        <svg className="macbook-nav" viewBox="0 0 16 16" aria-hidden="true">
          <path d="M14 8a6 6 0 1 1-6-6c1.68 0 3.29.69 4.49 1.83L14 5.33" />
          <path d="M14 2v3.33h-3.33" />
        </svg>
        <span className="macbook-url">
          <svg className="macbook-lock" viewBox="0 0 16 16" aria-hidden="true">
            <rect x="3.5" y="7" width="9" height="6.5" rx="1.4" />
            <path d="M5.5 7V5.2a2.5 2.5 0 0 1 5 0V7" />
          </svg>
          {host}
        </span>
      </div>
      <div className="macbook-page">
        <Image
          src={shot}
          alt={`${name} landing page`}
          fill
          sizes="(max-width: 768px) 92vw, 70vw"
          className="object-cover object-top"
        />
      </div>
    </>
  );

  const artwork = (
    <Image
      src={icon}
      alt=""
      className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
        open ? "opacity-0" : "opacity-100"
      }`}
    />
  );

  // On a phone with nowhere to send people, the icon stops being a control.
  const inert = mode === "none" && !linkOnMobile;

  return (
    <div
      onMouseLeave={mode === "hover" ? () => setOpen(false) : undefined}
      className="relative flex flex-col md:flex-row justify-center items-center gap-10 md:gap-10 lg:gap-20 max-w-6xl mx-auto px-4 lg:px-0"
    >
      {inert ? (
        <div className={`${FRAME} ${RESTING}`}>{artwork}</div>
      ) : (
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          aria-label={
            mode === "tap"
              ? `${name} — preview ${host}`
              : `${name} — visit ${host}`
          }
          aria-expanded={mode === "tap" ? open : undefined}
          onMouseEnter={mode === "hover" ? () => setOpen(true) : undefined}
          onClick={
            mode === "tap"
              ? (e) => {
                  e.preventDefault();
                  setOpen((v) => !v);
                }
              : undefined
          }
          className={`${FRAME} transition-shadow duration-500 ${FOCUS} ${
            open ? "z-[70] shadow-none" : RESTING
          }`}
        >
          {artwork}
        </a>
      )}

      <div className="flex w-full flex-col gap-4 text-center md:w-[28rem] md:text-left">{children}</div>

      <div
        aria-hidden={!open}
        className="laptop-stage pointer-events-none fixed inset-0 z-[60] flex items-center justify-center"
      >
        {/*
          On touch the scrim is the way out. The laptop above it keeps its own
          pointer events, so tapping the screen still goes to the site.
        */}
        <div
          onClick={mode === "tap" ? () => setOpen(false) : undefined}
          className={`absolute inset-0 bg-black/95 transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          } ${mode === "tap" && open ? "pointer-events-auto" : ""}`}
        />

        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          tabIndex={-1}
          aria-hidden="true"
          data-open={open}
          className={`macbook relative transition-opacity duration-300 ${
            open ? "pointer-events-auto cursor-pointer opacity-100" : "pointer-events-none opacity-0"
          }`}
        >
          <div className="macbook-lid">
            <div className="macbook-screen">{screen}</div>
          </div>
          <div className="macbook-hinge" />
          <div className="macbook-base" />
        </a>
      </div>
    </div>
  );
}
