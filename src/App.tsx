import React, { useState } from "react";

import "./App.scss";
import Navbar from "./components/Navbar/Navbar.component";
import LanguageModel from "./models/languageModel";
import Introduction from "./components/Introduction/Introduction.component";
import About from "./components/About/About.components";
import Navigation from "./components/Projects/Projects.component";
import Contacts from "./components/Contacts/Contacts.components";

const languages = [
  { code: "en", name: "English" },
  { code: "hun", name: "Hungarian" },
];

const App = () => {
  const [currentLanguage, setCurrentLanguage] = useState<LanguageModel>(
    languages[0]
  );

  const changeLanguage = (selectedLanguage: LanguageModel) => {
    setCurrentLanguage(selectedLanguage);
  };

  return (
    <div className="main">
      <Navbar onSetLanguage={changeLanguage} />

      <Introduction {...currentLanguage} />

      <About {...currentLanguage} />

      <Navigation {...currentLanguage} />

      <Contacts {...currentLanguage} />
    </div>
  );
};

export default App;
