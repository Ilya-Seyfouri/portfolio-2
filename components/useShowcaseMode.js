"use client";
import { useEffect, useState } from "react";

/*
 * How a project row should reveal its showcase.
 *
 * Decided by the device, not the viewport alone: a laptop keeps hovering at any
 * window size, while an iPad in landscape is wider than most laptops and has no
 * pointer to hover with. So the first question is whether a pointer exists, and
 * only then whether the screen has room.
 *
 *   hover - a mouse is present: hovering the icon opens, leaving the row closes.
 *   tap   - touch with room to show it: tapping opens, tapping off closes.
 *   none  - touch on a phone: no showcase, the icon does whatever it does best.
 */
const POINTER = "(hover: hover) and (pointer: fine)";
const ROOM = "(min-width: 768px)";

export default function useShowcaseMode() {
  // Renders as "hover" on the server, then corrects itself on mount.
  const [mode, setMode] = useState("hover");

  useEffect(() => {
    const pointer = window.matchMedia(POINTER);
    const room = window.matchMedia(ROOM);
    const read = () =>
      setMode(pointer.matches ? "hover" : room.matches ? "tap" : "none");

    read();
    pointer.addEventListener("change", read);
    room.addEventListener("change", read);
    return () => {
      pointer.removeEventListener("change", read);
      room.removeEventListener("change", read);
    };
  }, []);

  return mode;
}
