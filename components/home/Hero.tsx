"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="bg-[#EFFAFE]">
      {/* Logo Section */}
      <div className="h-screen  w-[60vw] mx-auto px-4 py-8 flex flex-col items-center justify-center">
        <Image width={1200} height={800} src="/home/logo.png" alt="logo" />
        <div className="flex text-2xl md:text-3xl items-center gap-3 justify-between mt-5 w-full px-1">
          <p className="flex justify-start">e</p>
          <p className="">l</p>
          <p className="">e</p>
          <p className="">v</p>
          <p className="">a</p>
          <p className="">t</p>
          <p className="">o</p>
          <p className="justify-end">r</p>
        </div>
      </div>
    <section className="bg-[#E68626] w-[80%] rounded-r-[60px] h-[35vh] py-16 md:py-24  flex justify-center items-center">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="text-4xl md:text-6xl font-bold text-white text-center"
        >
          با شما بالاتریم
        </motion.h2>
      </div>
    </section>
            </div>
  );
}

