import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Community</div>
            <p className="flex flex-row items-center my-[15px]">
              <FaFacebook />
              <a
                href="https://www.facebook.com/smd.roshan.52/"
                className="text-[15px] ml-[6px] z-40"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </p>
            <p className="flex flex-row items-center my-[15px]">
              <RxGithubLogo />
              <a
                href="https://github.com/smdroshan4"
                className="text-[15px] ml-[6px] z-40"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </p>
            <p className="flex flex-row items-center my-[15px]">
              <RxDiscordLogo />
              <a
                href="https://discord.com/channels/@me"
                className="text-[15px] ml-[6px] z-40"
                target="_blank"
                rel="noopener noreferrer"
              >
                Discord
              </a>
            </p>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Social Media</div>
            <p className="flex flex-row items-center my-[15px]">
              <RxInstagramLogo />
              <a
                href="https://www.instagram.com/s_mohammed_roshan"
                className="text-[15px] ml-[6px] z-40"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </p>
            <p className="flex flex-row items-center my-[15px]">
              <RxTwitterLogo />
              <a
                href="https://x.com/MohammedRo98443"
                className="text-[15px] ml-[6px] z-40"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </p>
            <p className="flex flex-row items-center my-[15px]">
              <RxLinkedinLogo />
              <a
                href="https://www.linkedin.com/in/shaik-mohammad-roshan-a666a0227/"
                className="text-[15px] ml-[6px] z-40"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </p>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">About</div>
            <p className="flex flex-row items-center my-[15px]">
              <a
                href="mailto:smdroshan2002@gmail.com"
                className="text-[15px] ml-[6px] z-40"
              >
                smdroshan2002@gmail.com
              </a>
            </p>
            <p className="flex flex-row items-center my-[15px]">
              <a href="tel:+919030091352"
                className="text-[15px] ml-[6px] z-40">
                  +919030091352
              </a>
            </p>
          </div>
        </div>
        <div className="mb-[20px] text-[15px] text-center">
          &copy; Mohammed Roshan S 2024 Inc. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
