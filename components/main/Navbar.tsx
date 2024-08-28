"use client";

import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    console.log("Button clicked!"); // Debugging line
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href");

    if (targetId && targetId.startsWith("#")) {
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg bg-[#03001417] z-[999] px-10">
      <div className="w-full h-full flex items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          onClick={handleClick}
          className="flex items-center"
          style={{ zIndex: 10 }}
        >
          <Image
            src="/boy.png"
            alt="logo"
            width={30}
            height={30}
            className="cursor-pointer hover:animate-slowspin"
          />
          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Mohammed Roshan S
          </span>
        </a>
        <div className="w-[500px] flex items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" onClick={handleClick} className="cursor-pointer">
              About Me
            </a>
            <a href="#skills" onClick={handleClick} className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" onClick={handleClick} className="cursor-pointer">
              Projects
            </a>
          </div>
        </div>
        <div className="flex gap-5">
          {Socials.map((social) => (
            <a
              href={social.link}
              key={social.name}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
              style={{ zIndex: 10 }}
            >
              <Image
                src={social.src}
                alt={social.name}
                width={24}
                height={24}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
