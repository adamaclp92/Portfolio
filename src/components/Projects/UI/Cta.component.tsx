import React from "react";
import LanguageModel from "../../../models/languageModel";

const Cta = (language: LanguageModel) => {
  return (
    <React.Fragment>
      {language.code === "en" ? (
        <div className="cta">
          <a className="btn" href="">
            Download CV
          </a>
          <a className="btn btn-primary" href="#contact">
            Message me
          </a>
        </div>
      ) : (
        <div className="cta">
          <a className="btn" href="">
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
