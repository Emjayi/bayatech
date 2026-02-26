"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

export default function ElevatorButton() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeId, setActiveId] = useState<"one" | "two" | "three">("one");
  const [showHoverOverlay, setShowHoverOverlay] = useState(false);
  const [showClickOverlay, setShowClickOverlay] = useState(false);

  const myStyle = {
    backgroundImage: `url(/home/elevatorButton/back.png)`,
    height: "60vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  } as const;

  // Fallback mapping: if you later add specific images like hover-one.png,
  // hover-two.png, hover-three.png, update these mappings to point to them.
  const hoverSrcMap: Record<string, string> = {
    one: "/home/elevatorButton/hover.png",
    two: "/home/elevatorButton/hover.png",
    three: "/home/elevatorButton/hover.png",
  };

  const clickSrcMap: Record<string, string> = {
    one: "/home/elevatorButton/click.png",
    two: "/home/elevatorButton/click.png",
    three: "/home/elevatorButton/click.png",
  };

  const handleHotspotEnter = () => {
    setShowHoverOverlay(true);
    setShowClickOverlay(false);
  };
  const handleHotspotLeave = () => {
    setShowHoverOverlay(false);
    setShowClickOverlay(false);
  };
  const handleHotspotClick = () => {
    // toggle click overlay on click
    setShowClickOverlay((s) => !s);
    setShowHoverOverlay(false);
  };

  return (
    <div
      id="elevator-button-section"
      ref={containerRef}
      className="relative z-50 flex flex-col items-center py-10"
      style={myStyle}
    >
      {/* background image */}
      <Image className="" src="/home/elevatorButton/back.png" fill alt="elevator background" />

      {/* conditional overlays shown when user hovers/clicks the top-center hotspot */}
      {showHoverOverlay && (
        <Image
          id="hover-overlay"
          className="absolute top-0"
          src={hoverSrcMap[activeId]}
          fill
          alt={`hover overlay ${activeId}`}
        />
      )}

      {showClickOverlay && (
        <Image
          id="click-overlay"
          className="absolute top-0"
          src={clickSrcMap[activeId]}
          fill
          alt={`click overlay ${activeId}`}
        />
      )}

      {/* Invisible interactive hotspot: center top 20% width x 20% height */}
      
<Link href="#hero" className="transition-colors">
      <div
        role="button"
        aria-label="elevator hotspot"
        title="Hover or click to reveal elevator overlay"
        onMouseEnter={handleHotspotEnter}
        onMouseLeave={handleHotspotLeave}
        onClick={handleHotspotClick}
        className="absolute top-0 left-1/2 -translate-x-1/2 z-60 w-[13%] h-[60%] cursor-pointer"
        style={{ pointerEvents: "auto" }}
      />
          </Link>

      {/* Three selector buttons placed below the elevator section (centered) */}
      <div className="mt-[62vh] flex gap-3">{/* positioned just below the visual section */}
        <button
          type="button"
          className={`px-4 py-2 rounded bg-slate-800 text-white hover:bg-slate-700 focus:outline-none focus:ring ${
            activeId === "one" ? "ring-2 ring-sky-400" : ""
          }`}
          onClick={() => setActiveId("one")}
          aria-pressed={activeId === "one"}
        >
          One
        </button>

        <motion.button
          type="button"
          className={`px-4 py-2 rounded bg-slate-800 text-white hover:bg-slate-700 focus:outline-none focus:ring ${
            activeId === "two" ? "ring-2 ring-sky-400" : ""
          }`}
          onClick={() => setActiveId("two")}
          aria-pressed={activeId === "two"}
        >
          Two
        </motion.button>
        <button
          type="button"
          className={`px-4 py-2 rounded bg-slate-800 text-white hover:bg-slate-700 focus:outline-none focus:ring ${
            activeId === "three" ? "ring-2 ring-sky-400" : ""
          }`}
          onClick={() => setActiveId("three")}
          aria-pressed={activeId === "three"}
        >
          Three
        </button>
      </div>
    </div>
  );
}

