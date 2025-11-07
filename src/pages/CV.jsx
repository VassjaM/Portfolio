import Header from "../components/Header";
import "./CV.css";
import cvPDF from "../assets/cv/CV - Vassilij Misenko.pdf"
import cvImage from "../assets/cv/CV - Vassilij Misenko.jpg"

export default function CV() {
  return (
    <div>
      <Header />
      <div className="cv-container">
        <h1>My CV</h1>
      </div>
      <div>
         <img 
          src={cvImage} 
          alt="CV Preview"
          className="cv-preview"
        />
      </div>
    </div>
  );
}