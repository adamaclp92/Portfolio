import LanguageModel from "../../models/languageModel";
import "./About.style.scss";
import skills from "../../config/skills";
import logos from "../../config/logos";
import AboutPicture from "../../assets/about.png";
import { IconType } from "react-icons/lib";

interface logo {
  text: string;
  logo: IconType;
}

const About = (language: LanguageModel) => {
  const logosMapping = logos.map((logo: any) => {
    return (
      <li key={logo.text}>
        <div className="about_logo">
          <logo.logo size={30} />
        </div>
        <div className="about_logo_text">{logo.text}</div>
      </li>
    );
  });

  const skillsMapping = skills.map((skill) => {
    return <li key={skill}>{skill}</li>;
  });

  return (
    <div id="about" className="container about_container">
      {language.code === "en" ? (
        <h1 className="about_title">About Me</h1>
      ) : (
        <h1 className="about_title">Rólam</h1>
      )}

      <div className="about_column">
        <div className="about_image">
          <img src={AboutPicture}></img>
        </div>

        <div className="about_main">
          {language.code === "en" ? (
            <h3 className="about_skills_text">Technologies</h3>
          ) : (
            <h3 className="about_skills_text">Technológiák</h3>
          )}
          <div className="about_skills_icons">
            <ul>{logosMapping}</ul>
          </div>
        </div>

        <div className="about_others">
          {language.code === "en" ? (
            <h3 className="about_other_skills">Other skills</h3>
          ) : (
            <h3 className="about_other_skills">Egyéb skillek</h3>
          )}
          <div className="about_other_skills_icons">
            <ul>{skillsMapping}</ul>
          </div>
        </div>
      </div>

      <div className="about_description">
        {language.code === "en" ? (
          <p className="about_text">
            I started learning programming at the university in 2018. I have
            learnt many technologies there and beside the university I'm also
            improving my developing skills continuously. I'm interested in
            FullStack developing therefore I'm practising Java and I'm also
            using SQL. Next milestones in studies: improving my Typescript and
            React Context skills.
          </p>
        ) : (
          <p className="about_text">
            2018-ban kezdtem el foglalkozni a programozással az egyetemen. Sok
            technológiával megismerkedtem itt és egyetem mellett azóta is
            folyamatosan fejlesztem magam. A tervem az, hogy lehetőség szerint
            továbbképezzem magam FullStack irányba. Ennek kapcsán belekóstoltam
            már a Java-ba, valamint SQL-t folyamatosan használok. Következő
            mérföldkövek a tanulmányokban: fejleszteni a Typescript és React
            Context tudásomat.
          </p>
        )}
      </div>

      {/*
          <div className="about_main">
        {language.code === "en" ? (
          <h3 className="about_dev_skills">Technologies</h3>
        ) : (
          <h3 className="about_dev_skills">Technológiák</h3>
        )}
        <div className="about_dev_logos">{logosMapping}</div>
      </div>

      <div className="about_others">
        {language.code === "en" ? (
          <h3 className="about_other_dev_skills">Other skills</h3>
        ) : (
          <h3 className="about_other_dev_skills">Egyéb skillek</h3>
        )}
        <div className="about_other_overlay">{skillsMapping}</div>
      </div>
     */}
    </div>
  );
};

export default About;
