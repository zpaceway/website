"use client";

import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FcMusic } from "react-icons/fc";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const jobs = [
  {
    company: "Ten Tech EC",
    period: "2014 - 2018",
    picture: "/tentech.png",
    description:
      "Full stack developer, PLC developer and database administrator. Developing custom software for customers in Latin America. Managing, maintaining and creating reports for the company related to expenses and projections.",
    technologies: [
      "Ladder",
      "Arduino",
      "Assembly",
      "C++",
      "C#",
      "HTML",
      "CSS",
      "Javascript",
      "MATLAB",
      "WordPress",
      "React",
      "Python",
      "Pandas",
      "PySpark",
      "Data Science",
      "ETLs",
      "Data pipelines",
      "Git",
      "Github",
      "PostgreSQL",
    ],
  },
  {
    company: "ESPE",
    period: "2018",
    picture: "/espe.webp",
    description:
      "Leader software developer of a team focused on the rehabilitation of kids with autism (Social robots).",
    technologies: ["C++", "VBScript", "React", "Material UI"],
  },
  {
    company: "Localhost",
    period: "2019 - 2020",
    picture: "/localhost.jpg",
    description:
      "CEO and Developer. Creating an scalable platform with terraform and react to provide customers with websites built in wordpress and hosted by Localhost.",
    technologies: [
      "Jira",
      "Confluence",
      "Bitbucket",
      "SCRUM",
      "Kanban",
      "Leadership",
      "Figma",
      "Illustrator",
      "CI / CD",
      "Terraform",
      "Software Architecture",
    ],
  },
  {
    company: "Kings of Binary",
    period: "2019 - 2021",
    picture: "/kingsofbinary.jpg",
    description:
      "Backend Developer, specialist in Node.js and Python. Creating the infrastructure and the backend for an academy with multiple users.",
    technologies: [
      "Node.js",
      "Next.js",
      "Flask",
      "Firebase",
      "Linode",
      "Nginx",
      "Certbot",
      "Wordpress",
      "Terraform",
      "Azure",
      "MQL4 - MQL5",
      "Electron",
      "Blockchain",
      "Solidity",
      "Ganache",
      "Coinpayments",
      "Hotmart",
      "Stripe",
    ],
  },
  {
    company: "Devsu",
    period: "2020 - 2021",
    picture: "/devsu.jpeg",
    description:
      "Senior Developer, specialist in Python and Node.js, leadering the development of a project with big traffic and demand using real time services",
    technologies: [
      "AngularJS",
      "Angular",
      "Django",
      "Docker",
      "Celery",
      "CI/CD",
      "Jenkins",
      "Grafana",
      "Websockets",
      "RabbitMQ",
      "AWS",
      "Firebase",
      "Data Studio",
      "Twilio",
      "Wordpress",
      "Stripe",
      "Solidity",
      "Remix",
    ],
  },
  {
    company: "EveryMundo",
    period: "2021 - Current",
    picture: "/everymundo.jpeg",
    description:
      "Senior Backend Developer, specialist in Python and Node.js. Tech lead of an application that receives, transforms and delivers data to different services in a microservices network.",
    technologies: [
      "Microservices",
      "Distributed Systems",
      "Database Administrator",
      "Django",
      "MongoDB",
      "AngularJS",
      "Docker",
      "Celery",
      "CI/CD",
      "Jenkins",
      "AWS",
      "Google Business Profile",
    ],
  },
];

export default function Home() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [lastSearchedItem, setLastSearchedItem] = useState("");
  const [showYoutubeBubble, setShowYoutubeBubble] = useState(false);
  const onScroll = useRef<() => void>();

  useEffect(() => {
    onScroll.current &&
      document.removeEventListener("scroll", onScroll.current);

    onScroll.current = () => {
      setShowYoutubeBubble(false);
    };

    document.addEventListener("scroll", onScroll.current);
  }, []);

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
      const salt = (Math.random() * 1000).toString();
      body.appendChild(gsearch);
      setLastSearchedItem(searchString + salt);
    }
  }, [searchParams, router]);

  return (
    <div className="w-full h-full bg-zinc-900 text-white flex justify-center items-center p-8 font-sans">
      <div key={`query-${lastSearchedItem}`} className="fixed z-30">
        <div className="gcse-searchresults-only"></div>
      </div>

      <div className="max-w-5xl flex flex-col w-full gap-32">
        <div
          className={`fixed overflow-hidden bottom-4 left-4 w-60 h-40 z-20 ${
            showYoutubeBubble ? "block" : "hidden"
          }`}
        >
          <ReactPlayer
            width={"100%"}
            height={"100%"}
            className="rounded-full"
            url="https://www.youtube.com/watch?v=jfKfPfyJRdk"
          />
        </div>

        {!showYoutubeBubble && (
          <div
            className="fixed overflow-hidden bottom-4 left-4 bg-zinc-200 shadow-md shadow-zinc-700 rounded-full z-20 text-6xl"
            onClick={() => setShowYoutubeBubble(true)}
          >
            <FcMusic />
          </div>
        )}

        <div className="flex w-full text-2xl">
          <div className="flex items-center gap-4">
            <div className="font-light text-gray-100">
              alexandro<span className="font-bold text-rose-400">TAPIA</span>
            </div>
            <div className="flex gap-2">
              <div>
                <AiFillGithub />
              </div>
              <div>
                <AiFillLinkedin />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center flex-wrap gap-12">
          <div className="relative w-full max-w-sm aspect-square overflow-hidden rounded-full">
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-black bg-opacity-40"></div>
            <Image
              src="/picture.jpeg"
              width={600}
              height={600}
              alt="profile-picture"
              className="object-contain"
              priority
            />
          </div>
          <div className="text-6xl ml-0 z-10 m-0 font-bold -mt-32 lg:mt-0 lg:-ml-24">
            <div>Hi there! I am a</div>
            <div>
              <span className="text-rose-400">full stack </span>
              developer
            </div>
          </div>
        </div>
        <div className="p-4 border-zinc-700 border">
          Senior Full Stack Developer, Indie Game Developer and Blockchain
          Developer from Ecuador with experience in languages and frameworks
          like: JavaScript (React, Next.js, Angular, AngularJS, Express,
          Electron, Ionic, NestJS), Python (Django {">"} 2.0, Flask, Tornado{" "}
          {">"} 2.0, Pandas, PySpark, Jinja2, MongoEngine, PyMongo), CSS - SCSS
          (Bootstrap, Tailwind), C# (Unity, ASP.NET), MQL4 - MQL5 (Metatrader),
          Solidity (HardHat, Ganache, Remix), Go (Gin Gonic), Rust (Rocket).
          Designing and managing databases in MongoDB, Redis, PostgreSQL, MySQL,
          MariaDB, Firebase RTD - Firestore. Architecting and deploying cloud
          infrastructure in AWS, Google Cloud, Azure, Heroku, Firebase, Netlify,
          and Vercel. Using paid and open-source technologies like Git, Postman,
          Celery, RabbitMQ, Unity, Tiled, Krita, Visual Studio, Twilio,
          DialogFlow, Jira, Slack, HubSpot, Zapier, Hubstaff, Bitbucket,
          Confluence and more.
        </div>
        <div className="flex justify-start">
          <div className="max-w-lg flex flex-col gap-8">
            <div className="text-4xl font-bold">
              <span className="border-b-rose-500 border-b-4">Biography</span>
            </div>
            <div>
              This good boy was born in Ecuador 🇪🇨 in 1995. Since a joung kiddo
              I was a fan of computers and technology. I started programming
              back in school in Visual Basic and I simply feel in love with
              coding. In the university my passion for technology lead me to
              study mechatronics engineering. While studying I had the chance of
              working part time as a developer. Time passed, I published a
              paper, became the number one student in my career, getting the
              best graduated honor of the 2019 promotion and right after that I
              started working professionally as a software engineer.
            </div>
          </div>
        </div>
        <div className="flex justify-end text-right">
          <div className="max-w-lg flex flex-col gap-8">
            <div className="text-4xl font-bold">
              <span className="border-b-rose-500 border-b-4">Experience</span>
            </div>
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
                        <span className="text-rose-400"> {job.period}</span>
                      </div>
                      <div>{job.description}</div>
                    </div>
                    <div className="flex gap-2 flex-wrap">
                      {job.technologies.map((technology) => (
                        <button
                          key={`${job.company}-${technology}`}
                          onClick={() => {
                            router.push(`/?q=${technology}`);
                          }}
                          className="text-sm px-2 text-white border-white border hover:bg-white hover:text-gray-500 rounded-sm font-mono"
                        >
                          {technology}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="h-80"></div>
      </div>
    </div>
  );
}
