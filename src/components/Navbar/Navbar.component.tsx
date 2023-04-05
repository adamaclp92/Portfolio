import "./Navbar.style.scss";

import LanguageModel from "../../models/languageModel";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { SiAboutdotme } from "react-icons/si";
import { AiFillProject } from "react-icons/ai";
import { TbMessageCircle } from "react-icons/tb";
import { RiContactsLine } from "react-icons/ri";
import { useState } from "react";

const Navbar = (onSetLanguage: any) => {
  const languages = [
    { code: "en", name: "English" },
    { code: "hun", name: "Hungarian" },
  ];

  const [currentLanguage, setCurrentLanguage] = useState<LanguageModel>(
    languages[0]
  );
  const [anotherLanguage, setAnotherLanguage] = useState<LanguageModel>(
    languages[1]
  );
  const [activeNav, setActiveNav] = useState("#");

  const handleLanguageChange = (language: LanguageModel) => {
    setAnotherLanguage(currentLanguage);
    setCurrentLanguage(language);

    onSetLanguage.onSetLanguage(language);
  };

  return (
    <nav className="navbar_container">
      <a
        href="#"
        className={activeNav === "#" ? "navbar_active" : ""}
        onClick={() => setActiveNav("#")}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#introduction"
        className={activeNav === "#introduction" ? "navbar_active" : ""}
        onClick={() => setActiveNav("#introduction")}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#about"
        className={activeNav === "#about" ? "navbar_active" : ""}
        onClick={() => setActiveNav("#about")}
      >
        <SiAboutdotme />
      </a>
      <a
        href="#projects"
        className={activeNav === "#projects" ? "navbar_active" : ""}
        onClick={() => setActiveNav("#projects")}
      >
        <AiFillProject />
      </a>
      <a
        href="#message"
        className={activeNav === "#message" ? "navbar_active" : ""}
        onClick={() => setActiveNav("#message")}
      >
        <TbMessageCircle />
      </a>
      <a>
        <p onClick={() => handleLanguageChange(anotherLanguage)}>
          {anotherLanguage.code}
        </p>
      </a>
    </nav>
  );
};

export default Navbar;
