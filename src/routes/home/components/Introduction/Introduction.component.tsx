import LanguageModel from "../../models/languageModel";
import IntroImage from "../../assets/photo.jpeg";

import "./Introduction.style.scss";

const Introduction = (language: LanguageModel) => {
  return (
    <div className="intro_container">
      <img className="intro_img" src={IntroImage} alt="intro_image" />
      {language.code === "en" ? (
        <div className="intro_text_div">
          <h1 className="intro_name">I'm Adam Rago</h1>
          <p className="intro_description">
            I'm a frontend Javascript Developer. This is my portfolio website
            where I would like to introduce myself and my practicing projects.
          </p>
        </div>
      ) : (
        <div className="intro_text_div">
          <h1 className="intro_name">A nevem Ragó Ádám</h1>
          <p className="intro_description">
            Frontend Javascript fejlesztő vagyok. Ez a portfólió weboldalam,
            ahol szeretnék bemutatkozni, valamint bemutatni néhány gyakorló
            projektemet.
          </p>
        </div>
      )}
    </div>
  );
};

export default Introduction;
