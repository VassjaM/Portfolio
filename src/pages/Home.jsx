// src/pages/Home.jsx
import Header from "../components/Header";
import locationIcon from "../assets/icons/location.svg";
import birthdayIcon from "../assets/icons/birthday.svg";
import titleIcon from "../assets/icons/title.svg";
import workIcon from "../assets/icons/work.svg";

export default function Home() {
  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "Git",
    "React",
    "Webtypography",
    "Figma",
    "TailwindCSS",
  ];

  return (
    <div>
      <Header />
      <div className="flex px-5 md:px-10 lg:px-20 xl:px-40 mb-18 md:mb-20 lg:mb-22 xl:mb-24">
        <h1 className="text-7xl md:text-7xl lg:text-8xl xl:text-9xl text-[var(--color-font-primary)] font-black tracking-normal">
          TYPE
          <br />
          MOTION
          <br />
          INTERFACES
        </h1>
      </div>
      <div className="flex px-5 mb-9">
        <h2 className="text-4xl">
          HELLO. I AM{" "}
          <span className="text-(--color-primary-accent) font-(family-name:<--font-family-title>)">
            VASSILIJ
          </span>
        </h2>
      </div>
      <div className="px-5 py-2">
        <h3 className="font-normal">ABOUT ME</h3>
      </div>
      <div className="flex flex-col px-13">
        <div className="flex flex-col gap-2 py-5">
          <div className="flex items-center gap-4">
            <img src={locationIcon} className="w-6 h-6" />
            <p className="text-base">Gummersbach, Germany</p>
          </div>
          <div className="flex items-center gap-4">
            <img src={birthdayIcon} className="w-6 h-6" />
            <p className="text-base">24 Years Old</p>
          </div>
          <div className="flex items-center gap-4">
            <img src={titleIcon} className="w-6 h-6" />
            <p className="text-base">Junior Frontend Developer</p>
          </div>
          <div className="flex items-center gap-4">
            <img src={workIcon} className="w-6 h-6" />
            <p className="text-base">TH Köln Alumni</p>
          </div>
        </div>
          <p className="indent-20 py-5">
            I combine my passion for front-end development with thoughtful
            design to create clear and accessible digital experiences.
            Typography, details, and clean code are at the core of my work. My
            goal is to build websites that are both technically precise and
            visually compelling.
          </p>
      </div>
      <div className="px-5 py-2">
        <h3 className="font-normal">KEY SKILLS</h3>
      </div>
      <div className="flex flex-col px-13">
          <div className="flex flex-wrap justify-start gap-2 py-5">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-1 bg-(--color-background-accent) text-(--color-font-primary) rounded-full text-base font-normal"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      <div className="h-1000"></div>
    </div>
  );
}
