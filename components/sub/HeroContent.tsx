"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

interface HeroContentProps {
  className?: string;
}

const HeroContent: React.FC<HeroContentProps> = ({ className }) => {
  return (
    <section className={`relative flex flex-col items-center justify-center ${className}`} style={{ zIndex: 100 }}>
      <motion.div
        initial="hidden"
        animate="visible"
        className="flex flex-row items-center px-20 mt-40 justify-center w-full"
      >
        <div className="flex flex-col gap-5 justify-center text-start max-w-[600px]">
          <motion.div
            variants={slideInFromTop}
            className="Welcome-box py-2 px-3 border border-[#7042f88b] opacity-90"
          >
            <div className="flex items-center">
              <SparklesIcon className="text-[#FFFF00] mr-2 h-5 w-5" />
              <h1 className="Welcome-text text-gray-300">
                I build fast, responsive web apps using Next.js & Java backend
              </h1>
            </div>
          </motion.div>

          <motion.div
            variants={slideInFromLeft(0.5)}
            className="flex flex-col gap-6 text-6xl font-bold text-white"
          >
            <span>
              Providing
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                {" "}
                the best{" "}
              </span>
              project experience
            </span>
          </motion.div>

          <motion.p
            variants={slideInFromLeft(0.8)}
            className="text-lg text-gray-400 my-5"
          >
            I&apos; help small businesses get e-commerce, dashboards, or portfolio sites with fast loading, SEO & security.
          </motion.p>

          {/* Learn More! Button */}
          <motion.a
            variants={slideInFromLeft(1)}
            href="https://js-portfolio-rust.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 px-4 button-primary cursor-pointer text-center text-white rounded-full max-w-[200px] bg-blue-500"
            style={{ position: "relative", pointerEvents: "auto", zIndex: 1000 }}
          >
            Hire Me!
          </motion.a>
        </div>

        <motion.div
          variants={slideInFromRight(0.8)}
          className="flex justify-center items-center"
          style={{ zIndex: 80 }} /* Lower z-index to ensure it's behind */
        >
          <Image
            src="/mainIconsdark.svg"
            alt="Work icons representing various projects"
            height={450}
            width={450}
            className="object-contain"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroContent;
