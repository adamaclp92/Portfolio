import React from "react";
import LanguageModel from "../../../models/languageModel";

const Cta = (language: LanguageModel) => {
  return (
    <React.Fragment>
      {language.code === "en" ? (
        <div className="cta">
          <a className="btn" href="../../../assets/cv_ENG.pdf" download="cv.pdf">
           Download CV
          </a>
          <a className="btn btn-primary" href="#contact">
            Message me
          </a>
        </div>
      ) : (
        <div className="cta">
          <a className="btn" href="../../../assets/cv_HUN.pdf" download="cv.pdf">
           Önéletrajz letöltése
          </a>
          <a className="btn btn-primary" href="#contact">
            Üzenj nekem
          </a>
        </div>
      )}
    </React.Fragment>
  );
};

export default Cta;
