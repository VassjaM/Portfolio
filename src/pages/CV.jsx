import Header from "../components/Header";
import "./CV.css";
import cvPDF from "../assets/cv/CV - Vassilij Misenko.pdf"
import cvImage from "../assets/cv/CV - Vassilij Misenko.jpg"

export default function CV() {
  return (
    <div>
      <Header />
      <div className="cv-container">
        <div className="cv-header-row">
          <h1>My CV</h1>
          <a href={cvPDF} download className="cv-download-btn">
              Download PDF
          </a>
        </div>
      </div>
      <div>
         <img 
          src={cvImage} 
          alt="CV Preview"
          className="cv-preview"
        />
      </div>
      <div className="spacer"></div>
    </div>
  );
}