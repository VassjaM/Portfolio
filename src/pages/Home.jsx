// src/pages/Home.jsx
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="flex px-5 mb-18">
        <h1 className="text-6xl text-(--color-font-primary) font-black tracking-normal">JUNIOR<br/>FRONTEND<br/>DEVELOPER</h1>
      </div>
      <div className="flex flex-col px-5">
        <h2 className="text-2xl text-(--color-font-primary) font-bold tracking-normal">HELLO. I AM VASSILIJ</h2>
        <h3 className="text-base text-(--color-text-primary) tracking-wide indent-15 px-7 py-8">
          I combine my passion for front-end development with thoughtful design to create clear
          and accessible digital experiences. Typography, details, and clean code are at the core
          of my work. My goal is to build websites that are both technically precise and visually compelling.
        </h3>
      </div>
    </div>
  );
}