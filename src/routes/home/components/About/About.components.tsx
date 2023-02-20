import LanguageModel from "../../models/languageModel";
import "./About.style.scss";
import skills from "../../config/skills";
import logos from "../../config/logos";

interface logo {
  text: string;
  logo: string;
}

const About = (language: LanguageModel) => {
  const logosMapping = logos.map((logo: logo) => {
    return (
      <div key={logo.text} className="about_column">
        <div className="about_overlay_img">
          <img src={logo.logo} />
        </div>
        <div className="about_overlay">
          <div className="about_text">{logo.text}</div>
        </div>
      </div>
    );
  });

  const skillsMapping = skills.map((skill) => {
    return <p key={skill}>{skill}</p>;
  });

  return (
    <div id="about" className="about_container">
      <h1 className="about_title">
        {language.code === "en" ? <p>About</p> : <p>Rólam</p>}
      </h1>
      <hr />
      {language.code === "en" ? (
        <p className="about_text">
          I started learning programming at the university in 2018. I have
          learnt many technologies there and beside the university I'm also
          improving my developing skills continuously. I'm interested in
          FullStack developing therefore I'm practising Java and I'm also using
          SQL.
        </p>
      ) : (
        <p className="about_text">
          2018-ban kezdtem el foglalkozni a programozással az egyetemen. Sok
          technológiával megismerkedtem itt és egyetem mellett azóta is
          folyamatosan fejlesztem magam. A tervem az, hogy lehetőség szerint
          továbbképezzem magam FullStack irányba. Ennek kapcsán belekóstoltam
          már a Java-ba, valamint SQL-t folyamatosan használok.
        </p>
      )}

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
    </div>
  );
};

export default About;
