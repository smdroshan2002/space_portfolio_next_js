// HeroContent.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

interface HeroContentProps {
  className?: string; // Allow className as an optional prop
}

const HeroContent: React.FC<HeroContentProps> = ({ className }) => {
  return (
    <section className={`relative flex flex-col items-center justify-center ${className}`}>
      <motion.div
        initial="hidden"
        animate="visible"
        className="flex flex-row items-center  px-20 mt-40 justify-center w-full z-[20]"
      >
        <div className="flex flex-col gap-5 justify-center text-start max-w-[600px]">
          <motion.div
            variants={slideInFromTop}
            className="Welcome-box py-2 px-3 border border-[#7042f88b] opacity-90"
          >
            <SparklesIcon className="text-[#FFFF00] mr-2 h-5 w-5" />
            <h1 className="Welcome-text text-gray-300">
              Full Stack Developer Portfolio
            </h1>
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
            I&apos;m a Java full-stack programmer and I have skills across the board with programming in general so i can do from front to back when it comes on developing your website. Java and Server-side: Thanks to my proficiency at Java I can easily maintain any high performing server side applications, As well as with front-end experience in HTML (international standard), CSS (how the web behave) and JavaScript(interactive user interface). It allows you to work with your data
          </motion.p>

          <motion.button
            variants={slideInFromLeft(1)}
            className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] z-[20]"
            aria-label="Learn more about my projects and skills"
          >
            Learn More!
          </motion.button>
        </div>

        <motion.div
          variants={slideInFromRight(0.8)}
          className="flex justify-center items-center"
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