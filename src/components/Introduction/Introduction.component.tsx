import LanguageModel from "../../models/languageModel";


import "./Introduction.style.scss";
import React from "react";
import Cta from "../Projects/UI/Cta.component";

const Introduction = (language: LanguageModel) => {
  return (
    <header>
      <div className="container intro_container" id="introduction">
        {language.code === "en" ? (
          <React.Fragment>
            <div className="intro_text_div">
              <h5 className="intro_name">Hello, I'm</h5>
              <h1>Adam Rago</h1>
              <h5 className="intro_description text-light">
                Frontend Javascript Developer.
              </h5>
            </div>

            <Cta {...language} />


          </React.Fragment>
        ) : (
          <React.Fragment>
            <div className="intro_text_div">
              <h5 className="intro_name">Szia, a nevem</h5>
              <h1>Ragó Ádám</h1>
              <h5 className="intro_description text-light">
                Frontend Javascript fejlesztő.
              </h5>
            </div>

            <Cta {...language} />


          </React.Fragment>
        )}
      </div>
    </header>
  );
};

export default Introduction;
