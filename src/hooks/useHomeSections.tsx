import ContactForm from "@/components/ContactForm";
import TechnologyButton from "@/components/TechnologyButton";
import { ZpacewaySectionProps } from "@/components/ZpacewaySection";
import { getCertificates } from "@/constants/certificates";
import Image from "next/image";
import jobs from "../constants/jobs";
import { Carousel } from "react-responsive-carousel";

const useHomeSections = () => {
  return [
    {
      title: "Introduction",
      align: "center",
      fullWidth: true,
      children: (
        <div className="flex flex-col gap-4 text-left">
          <div>
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
          <div>
            Co-founder of{" "}
            <a
              className="text-emerald-400 font-bold"
              href="https://kingsofbinary.com/"
            >
              Kings of Binary
            </a>
            ,{" "}
            <a
              className="text-emerald-400 font-bold"
              href="https://www.youtube.com/@kingsofbinary"
            >
              Kings of Indices{" "}
            </a>
            and{" "}
            <a
              className="text-emerald-400 font-bold"
              href="https://www.instagram.com/devlocalhost"
            >
              Localhost
            </a>
            , creator of{" "}
            <a
              className="text-emerald-400 font-bold"
              href="https://www.npmjs.com/package/@zpaceway/react-signals"
            >
              react-signals
            </a>{" "}
            and{" "}
            <a
              className="text-emerald-400 font-bold"
              href="https://www.npmjs.com/package/@zpaceway/react-boilerplate-cli"
            >
              react-boilerplate-cli
            </a>
            , co-author of the paper (main developer) “
            <a
              className="text-emerald-400 font-bold"
              href="https://sci-hub.hkvisa.net/10.1007/978-3-319-95282-6_40"
            >
              Pose Estimation Based on Monocular Visual Odometry and Lane
              Detection for Intelligent Vehicles
            </a>
            ”
          </div>
        </div>
      ),
    },
    {
      title: "Biography",
      align: "left",
      fullWidth: false,
      children: (
        <div>
          This good boy was born in Ecuador 🇪🇨 in 1995. Since a joung kiddo I
          was a fan of computers and technology. I started programming back in
          school in Visual Basic and I simply feel in love with coding. In the
          university my passion for technology lead me to study Mechatronics
          Engineering in{" "}
          <span className="text-emerald-400 font-bold">
            Universidad de las Fuerzas Armadas
          </span>{" "}
          in Ecuador. While studying I had the chance of working part time as a
          developer. Time passed, I published a paper, became the number one
          student in my career, getting the best graduated honor of the 2019
          promotion and right after that I started working professionally as a
          software engineer.
        </div>
      ),
    },
    {
      title: "Experience",
      align: "right",
      fullWidth: false,
      children: (
        <div className="flex flex-col gap-8">
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
                      <span className="text-emerald-400"> {job.period}</span>
                    </div>
                    <div>{job.description}</div>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    {job.technologies.map((technology) => {
                      const technologyId = `${job.company}-${technology}`;
                      return (
                        <TechnologyButton key={technologyId}>
                          {technology}
                        </TechnologyButton>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Certificates",
      align: "center",
      fullWidth: false,
      children: (
        <div className="flex flex-col w-full gap-1 text-xs">
          <Carousel
            renderThumbs={() =>
              getCertificates().map((certificate) => (
                <div
                  key={`certificate-index-${certificate}`}
                  className="w-full relative"
                >
                  <Image
                    src={certificate}
                    width={100}
                    height={100}
                    alt="logo"
                  />
                </div>
              ))
            }
          >
            {getCertificates().map((certificate) => (
              <div key={`certificate-${certificate}`}>
                <Image
                  width={600}
                  height={400}
                  src={certificate}
                  priority
                  alt={`certificate-${certificate}`}
                />
              </div>
            ))}
          </Carousel>
        </div>
      ),
    },
    {
      title: "Contact",
      align: "left",
      fullWidth: false,
      children: (
        <div className="flex flex-col w-full text-left gap-4">
          <div>
            Feel free to contact me and {"let's"} do great things together! You
            can also schedule a{" "}
            <span className="text-emerald-400 font-bold">meeting</span> by
            clicking on the calendar in the floating menu on the right.
          </div>
          <ContactForm />
        </div>
      ),
    },
  ] as ZpacewaySectionProps[];
};

export default useHomeSections;
