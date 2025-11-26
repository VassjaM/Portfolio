// src/pages/Home.jsx
import Header from "../components/Header";

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
        <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-(--color-font-primary) font-black tracking-normal">
          JUNIOR
          <br />
          FRONTEND
          <br />
          DEVELOPER
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row px-5">
        <div className="flex flex-col lg:max-w-[50%]">
          <h2 className="text-2xl font-bold tracking-normal">
            HELLO. I AM VASSILIJ
          </h2>
          <p className="text-base text-(--color-text-primary) tracking-wide indent-15 px-7 py-8">
            I combine my passion for front-end development with thoughtful
            design to create clear and accessible digital experiences.
            Typography, details, and clean code are at the core of my work. My
            goal is to build websites that are both technically precise and
            visually compelling.
          </p>
        </div>
        <div className="flex flex-col lg:max-w-[50%]">
          <h2 className="text-2xl font-bold tracking-normal">KEY SKILLS</h2>
          <div className="flex flex-wrap justify-start gap-3 py-8">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-5 py-2 bg-(--color-background-accent) text-(--color-font-primary) rounded-full text-base font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
