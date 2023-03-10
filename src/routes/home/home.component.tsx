import React, { useState } from "react";
import en from "./assets/en.png";
import hun from "./assets/hun.png";

import "./home.style.scss";
import Navbar from "./components/Navbar/Navbar.component";
import LanguageModel from "./models/languageModel";
import Introduction from "./components/Introduction/Introduction.component";
import About from "./components/About/About.components";
import Message from "./components/Message/Message.component";
import Navigation from "./components/Projects/Projects.component";
import Contacts from "./components/Contacts/Contacts.components";

const languages = [
  { code: "en", name: "English", asset: en },
  { code: "hun", name: "Hungarian", asset: hun },
];

const Home = () => {
  const [currentLanguage, setCurrentLanguage] = useState<LanguageModel>(
    languages[0]
  );

  const changeLanguage = (selectedLanguage: LanguageModel) => {
    setCurrentLanguage(selectedLanguage);
  };

  const options = languages.map((language) => {
    if (language.code !== currentLanguage.code) {
      return (
        <li
          key={language.code}
          className="home_alternativeLanguage"
          onClick={() => changeLanguage(language)}
        >
          <img src={language.asset} alt="language_asset" />
        </li>
      );
    }
  });

  return (
    <div className="main">
      <div className="home_lang">
        <div className="home_imageContainer">
          <img src={currentLanguage.asset} alt="currentLanguage_asset" />
        </div>
        <ul className="home_dropdown">{options}</ul>
      </div>

      <Navbar {...currentLanguage} />

      <Introduction {...currentLanguage} />

      <About {...currentLanguage} />

      <Navigation {...currentLanguage} />

      <Message {...currentLanguage} />

      <Contacts {...currentLanguage} />
    </div>
  );
};

export default Home;
