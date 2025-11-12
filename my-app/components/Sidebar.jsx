"use client";
import menu from "@/images/menu.svg";
import Image from "next/image";
import ilya from "@/images/ilya.jpg";
import { twMerge } from "tailwind-merge";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <section>
        <div className="container">
          <div className="fixed w-full top-0 z-50 backdrop-blur-2xl">
            <div className="flex flex-row justify-between items-center py-4 ">
              {/* Left side */}
              <div className="pl-6 flex justify-start gap-4 w-[200px]">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/Ilya-Seyfouri"
                  className="text-white/30 hover:text-white transition-colors"
                >
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://linkedin.com/in/ilya-seyfouri-3824422a0"
                  className="text-white/30 hover:text-white transition-colors"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
              </div>

              {/* Center nav */}
              <div className="hidden md:flex items-center flex-1 justify-center">
                <nav className="flex gap-10">
                  {navLinks.map((link) => (
                    <a
                      className="text-white/50 text-xl font-inter hover:text-white"
                      key={link.label}
                      href={link.href}
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Right side spacer (matches left side width) */}
              <div className="w-[200px]"></div>

              <div className="pr-4 flex justify-end md:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-menu  text-white"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <line
                    x1="3"
                    y1="6"
                    x2="21"
                    y2="6"
                    className={twMerge(
                      "origin-left transition",
                      isOpen && "rotate-45 -translate-y-1"
                    )}
                  ></line>
                  <line
                    x1="3"
                    y1="12"
                    x2="21"
                    y2="12"
                    className={twMerge("transition", isOpen && "opacity-0")}
                  ></line>
                  <line
                    x1="3"
                    y1="18"
                    x2="21"
                    y2="18"
                    className={twMerge(
                      "origin-left transition",
                      isOpen && "-rotate-45 translate-y-1"
                    )}
                  ></line>
                </svg>
              </div>
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  className="overflow-hidden"
                >
                  <div className="flex flex-col items-center gap-6 py-6 px-8">
                    {navLinks.map((link) => (
                      <a
                        href={link.href}
                        key={link.label}
                        className="hover:font-semibold"
                        onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          setIsOpen(false); // Close menu first

                          // Wait for animation to complete, then scroll
                          setTimeout(() => {
                            const element = document.querySelector(link.href);
                            if (element) {
                              element.scrollIntoView({
                                behavior: "smooth",
                                block: "start",
                              });
                            }
                          }, 0); // Match this to your exit animation duration
                        }}
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </>
  );
}
