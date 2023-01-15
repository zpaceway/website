"use client";

import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { HiDocumentText } from "react-icons/hi";

import FloatingMenu from "@/components/FloatingMenu";
import ZpacewaySection from "@/components/ZpacewaySection";
import useHomeSections from "./useHomeSections";
import accounts from "@/constants/accounts";

export default function Home() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const sections = useHomeSections();

  const [technologySearchWithSalt, setTechnologySearchWithSalt] = useState("");

  useEffect(() => {
    const searchString = searchParams.get("q");
    if (searchString) {
      const prevSearch = document.getElementById("gsearch");
      prevSearch?.remove?.();
      const body = document.body;
      const gsearch = document.createElement("script");
      gsearch.id = "gsearch";
      gsearch.src = "https://cse.google.com/cse.js?cx=172fb6c51d1564f6e";
      gsearch.async = true;
      body.appendChild(gsearch);
      const salt = (Math.random() * 1000).toString();
      setTechnologySearchWithSalt(`${searchString}-${salt}`);
    }
  }, [searchParams, router]);

  return (
    <div className="w-full h-full bg-neutral-900 text-white flex justify-center items-center p-4 font-sans">
      <div key={`query-${technologySearchWithSalt}`} className="fixed z-30">
        <div className="gcse-searchresults-only"></div>
      </div>
      <FloatingMenu />

      <div className="max-w-5xl flex flex-col w-full gap-32">
        <div className="flex w-full text-3xl">
          <div className="flex items-center gap-2 flex-wrap">
            <div className="font-light text-white border-b-4 border-lime-400">
              <span className="text-lg">alexandro</span>
              <span className="font-bold text-lime-400">TAPIA</span>
            </div>
            <div className="flex">
              <div
                className="cursor-pointer"
                onClick={() => window.open(accounts.github)}
              >
                <AiFillGithub />
              </div>
              <div
                className="cursor-pointer"
                onClick={() => window.open(accounts.linkedin)}
              >
                <AiFillLinkedin />
              </div>
              <div
                className="cursor-pointer"
                onClick={() => window.open(accounts.cv)}
              >
                <HiDocumentText />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center flex-wrap gap-12">
          <div className="relative w-full max-w-sm aspect-square overflow-hidden rounded-full">
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-black bg-opacity-30"></div>
            <Image
              src="/picture.jpeg"
              width={600}
              height={600}
              alt="profile-picture"
              className="object-contain"
              priority
            />
          </div>
          <div className="text-4xl text-[2.5rem] ml-0 z-10 m-0 font-bold -mt-32 lg:mt-0 lg:-ml-24 xs:text-6xl max-w-[40rem]">
            Hi there! I am a <span className="text-lime-400">full stack </span>
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
        <div className="h-40"></div>
      </div>
    </div>
  );
}
