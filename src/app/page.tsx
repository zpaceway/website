"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { HiDocumentText } from "react-icons/hi";
import axios from "axios";

import FloatingMenu from "@/components/FloatingMenu";
import ZpacewaySection from "@/components/ZpacewaySection";
import useHomeSections from "../hooks/useHomeSections";
import accounts from "@/constants/accounts";
import PictureParticles from "@/components/PictureParticles";
import Link from "next/link";
import LoadingSpinner from "@/components/LoadingSpinner";

export default function Home() {
  const sections = useHomeSections();
  const [isPageLoading, setIsPageLoading] = useState(true);

  useEffect(() => {
    const notifyNewVisitor = async () => {
      await axios
        .post(
          "/api/send-telegram-notification",
          {
            title: "New lead has arrived with the following information",
            notification: {
              location: { ...document.location, referrer: document.referrer },
            },
          },
          {
            withCredentials: true,
          }
        )
        .catch((err) => console.log(err));
    };
    notifyNewVisitor();
    setIsPageLoading(false);
  }, []);

  return (
    <div>
      {isPageLoading && <LoadingSpinner />}

      <FloatingMenu />

      <div
        className={`w-full h-full bg-neutral-900 text-white flex justify-center items-center p-8 font-sans overflow-x-hidden ${
          isPageLoading ? "hidden" : "block"
        }`}
      >
        <div className="max-w-5xl flex flex-col w-full gap-32">
          <div className="flex w-full text-3xl">
            <div className="flex items-center gap-2 flex-wrap">
              <div className="font-light text-white border-b-4 border-emerald-400">
                <span className="text-lg">alexandro</span>
                <span className="font-bold text-emerald-400">TAPIA</span>
              </div>
              <div className="flex">
                <Link target="_blank" href={accounts.github}>
                  <div className="cursor-pointer">
                    <AiFillGithub />
                  </div>
                </Link>
                <Link target="_blank" href={accounts.linkedin}>
                  <div className="cursor-pointer">
                    <AiFillLinkedin />
                  </div>
                </Link>
                <Link target="_blank" href={accounts.cv}>
                  <div className="cursor-pointer">
                    <HiDocumentText />
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex items-start flex-col lg:flex-row lg:items-center">
            <div className="relative w-11/12 max-w-sm aspect-square rounded-full">
              <div className="absolute w-[110%] h-[110%] -bottom-1 -left-1 rounded-full overflow-hidden">
                <PictureParticles />
              </div>
              <Image
                src="/picture.jpeg"
                width={600}
                height={600}
                alt="profile-picture"
                className="absolute object-cover aspect-square rounded-full"
                priority
              />
              <div className="absolute w-full h-full bg-black bg-opacity-20 rounded-full"></div>
            </div>
            <div className="text-4xl ml-0 z-10 m-0 font-bold lg:-ml-40 -mt-16 xs:-mt-32 lg:mt-0 xs:text-6xl max-w-[40rem] drop-shadow-lg">
              Hi there! I am a{" "}
              <span className="text-emerald-400">full stack </span>
              developer
            </div>
          </div>
          {sections.map((section) => (
            <ZpacewaySection
              key={`section-${section.title}`}
              title={section.title}
              align={section.align}
              fullWidth={section.fullWidth}
            >
              {section.children}
            </ZpacewaySection>
          ))}
          <div className="h-20 flex flex-col justify-end items-center font-bold">
            © Zpaceway Companies
          </div>
        </div>
      </div>
    </div>
  );
}
