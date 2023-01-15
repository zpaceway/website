"use client";

import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { HiDocumentText } from "react-icons/hi";

import jobs from "@/data/jobs";
import TechnologyButton from "@/components/TechnologyButton";
import FloatingMenu from "@/components/FloatingMenu";
import ZpacewaySection from "@/components/ZpacewaySection";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [technologySearchWithSalt, setTechnologySearchWithSalt] = useState("");
  const [technologyIdLoading, setTechnologyIdLoading] = useState("");

  const searchBoxInterval = useRef<NodeJS.Timer>();

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

  useEffect(() => {
    clearInterval(searchBoxInterval.current);

    if (technologyIdLoading) {
      searchBoxInterval.current = setInterval(() => {
        const searchBoxVisible = document.querySelector(
          ".gsc-resultsbox-visible"
        );
        if (searchBoxVisible) {
          clearInterval(searchBoxInterval.current);
          setTechnologyIdLoading("");
          router.push("/");
        }
      }, 250);
    }

    return () => {
      clearInterval(searchBoxInterval.current);
    };
  }, [router, technologyIdLoading]);

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
                onClick={() => window.open("https://github.com/zpaceway")}
              >
                <AiFillGithub />
              </div>
              <div
                className="cursor-pointer"
                onClick={() =>
                  window.open("https://www.linkedin.com/in/alexandro591/")
                }
              >
                <AiFillLinkedin />
              </div>
              <div
                className="cursor-pointer"
                onClick={() =>
                  window.open("https://link.zpaceway.com/alexandro")
                }
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
        <ZpacewaySection title="Introduction" align="center" fullWidth>
          <div className="p-4 border-zinc-700 border text-left">
            Senior Full Stack Developer, Indie Game Developer and Blockchain
            Developer from Ecuador with experience in languages and frameworks
            like: JavaScript (React, Next.js, Angular, AngularJS, Express,
            Electron, Ionic, NestJS), Python (Django {">"} 2.0, Flask, Tornado{" "}
            {">"} 2.0, Pandas, PySpark, Jinja2, MongoEngine, PyMongo), CSS -
            SCSS (Bootstrap, Tailwind), C# (Unity, ASP.NET), MQL4 - MQL5
            (Metatrader), Solidity (HardHat, Ganache, Remix), Go (Gin Gonic),
            Rust (Rocket). Designing and managing databases in MongoDB, Redis,
            PostgreSQL, MySQL, MariaDB, Firebase RTD - Firestore. Architecting
            and deploying cloud infrastructure in AWS, Google Cloud, Azure,
            Heroku, Firebase, Netlify, and Vercel. Using paid and open-source
            technologies like Git, Postman, Celery, RabbitMQ, Unity, Tiled,
            Krita, Visual Studio, Twilio, DialogFlow, Jira, Slack, HubSpot,
            Zapier, Hubstaff, Bitbucket, Confluence and more.
          </div>
        </ZpacewaySection>
        <ZpacewaySection title="Biography" align="left">
          <div>
            This good boy was born in Ecuador 🇪🇨 in 1995. Since a joung kiddo I
            was a fan of computers and technology. I started programming back in
            school in Visual Basic and I simply feel in love with coding. In the
            university my passion for technology lead me to study Mechatronics
            Engineering in{" "}
            <span className="text-lime-400 font-bold">
              Universidad de las Fuerzas Armadas
            </span>{" "}
            in Ecuador. While studying I had the chance of working part time as
            a developer. Time passed, I published a paper, became the number one
            student in my career, getting the best graduated honor of the 2019
            promotion and right after that I started working professionally as a
            software engineer.
          </div>
        </ZpacewaySection>
        <ZpacewaySection title="Experience" align="right">
          <div>
            After that long and boring introduction up there 😴, {"let's "}
            jump to the good part. I have about 8+ years of experience in the
            development industry, and here you can find a detailed description
            of every job that {"I've"} had, including the title, period,
            responsabilities and technologies used.
          </div>
          <div className="flex flex-col gap-8">
            {jobs.map((job) => (
              <div key={job.company} className="flex gap-2">
                <div className="rounded-full grow-0 shrink-0 w-12 h-12 overflow-hidden">
                  <Image
                    width={200}
                    height={200}
                    src={job.picture}
                    alt={job.company}
                  />
                </div>
                <div className="text-left flex flex-col gap-4 border-l border-l-zinc-700 pl-2">
                  <div>
                    <div className="font-bold text-xl">
                      {job.company}
                      <span className="text-lime-400"> {job.period}</span>
                    </div>
                    <div>{job.description}</div>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    {job.technologies.map((technology) => {
                      const technologyId = `${job.company}-${technology}`;
                      return (
                        <TechnologyButton
                          key={technologyId}
                          loading={technologyIdLoading === technologyId}
                          onClick={async () => {
                            setTechnologyIdLoading(technologyId);
                            router.push(`/?q=${technology}`);
                          }}
                        >
                          {technology}
                        </TechnologyButton>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ZpacewaySection>
        <ZpacewaySection title="Contact" align="center">
          <div className="flex flex-col w-full text-left gap-4">
            <div>
              Feel free to contact me and {"let's"} do great things together!
              You can also schedule a{" "}
              <span className="text-lime-400 font-bold">meeting</span> by
              clicking on the calendar in the floating menu on the right.
            </div>
            <ContactForm />
          </div>
        </ZpacewaySection>
        <div className="h-40"></div>
      </div>
    </div>
  );
}
