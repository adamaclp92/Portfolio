import React from "react";
import LanguageModel from "../../../models/languageModel";
import cv_ENG from "../../../assets/cv_ENG.pdf"
import cv_HUN from "../../../assets/cv_HUN.pdf"

const Cta = (language) => {
  return (
    <React.Fragment>
      {language.code === "en" ? (
        <div className="cta">
          <a className="btn" href={cv_ENG} download="cv.pdf">
           Download CV
          </a>
          <a className="btn btn-primary" href="#contact">
            Message me
          </a>
        </div>
      ) : (
        <div className="cta">
          <a className="btn" href={cv_HUN} download="cv.pdf">
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
