import Header from "../components/Header";
import "./CV.css";
import cvPDF from "../assets/cv/CV - Vassilij Misenko.pdf"
import cvImage from "../assets/cv/CV - Vassilij Misenko.jpg"

export default function CV() {
  return (
    <div className="min-h-screen text-[var(--color-font-primary)]">
      <Header />

      <div className="w-full max-w-[900px] mx-auto pt-12 px-5">
        <div className="flex flex-row justify-between md:items-center gap-4 pb-8">
          <h1 className="text-4xl font-bold md:text-5xl">My CV</h1>

          <a href={cvPDF} download className="
            px-4 py-2
            bg-[var(--color-primary-accent)] 
            text-white 
            rounded-lg 
            font-semibold 
            transition-all 
            hover:bg-[#646cff]">
            Download PDF
          </a>
        </div>
      </div>

      <div className="px-5">
         <img 
          src={cvImage} 
          alt="CV Preview"
          className="w-full 
            max-w-[900px] 
            mx-auto 
            rounded-xl 
            shadow-xl 
            block"
        />
      </div>
      <div className="h-1000"></div>
    </div>
  );
}