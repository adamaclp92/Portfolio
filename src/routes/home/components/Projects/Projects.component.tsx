import { Container } from "semantic-ui-react";
import circleimage from "../../../../assets/circle-drawer.png";
import colorchooser from "../../../../assets/color-chooser.png";
import synonymapi from "../../../../assets/synonym-api.png";
import tenzies from "../../../../assets/tenzies.png";
import foodorder from "../../../../assets/food-order.png";

import "./Projects.style.scss";
import LanguageModel from "../../models/languageModel";
import ProjectDiv from "./UI/ProjectDiv.component";

const Navigation = (language: LanguageModel) => {
  const projectsObjArray = [
    {
      id: 0,
      englishTitle: "CircleDrawer App",
      hungarianTitle: "Kör rajzolós app",
      stack: "HTML, SCSS, React, Typescript.",
      to: "circledrawer",
      src: circleimage,
      github:
        "https://github.com/adamaclp92/ReactLearning/tree/main/practice-projects2/src/projects/circle-drawer",
    },
    {
      id: 1,
      englishTitle: "Color Finder App",
      hungarianTitle: "Szín kitaláló app",
      stack: "HTML, SCSS, React, Typescript.",
      to: "colorchooser",
      src: colorchooser,
      github:
        "https://github.com/adamaclp92/ReactLearning/tree/main/practice-projects2/src/projects/color-chooser",
    },
    {
      id: 2,
      englishTitle: "Synonym API",
      hungarianTitle: "Szinoníma API",
      stack: "HTML, SCSS, React, Typescript.",
      to: "synonymapi",
      src: synonymapi,
      github:
        "https://github.com/adamaclp92/ReactLearning/tree/main/practice-projects2/src/projects/synonym-api",
    },
    {
      id: 3,
      englishTitle: "Tenzies",
      hungarianTitle: "Tenzies",
      stack: "HTML, CSS, React.",
      to: "tenzies",
      src: tenzies,
      github:
        "https://github.com/adamaclp92/ReactLearning/tree/main/my-app11%20-%20Tenzies",
    },
    {
      id: 4,
      englishTitle: "Food Order App",
      hungarianTitle: "Étel rendelős app",
      stack: "HTML, CSS, React.",
      to: "foodorder",
      src: foodorder,
      github:
        "https://github.com/adamaclp92/ReactLearning/tree/main/my-app17%20-%20FoodOrderApp",
    }
    /*{
      id: 5,
      englishTitle: "Clothes Webshop",
      hungarianTitle: "Ruha Webshop",
      stack: "HTML, SCSS, React.",
      to: "clothesshop",
      src: foodorder,
      github:
        "https://github.com/adamaclp92/ReactLearning/tree/main/my-app17%20-%20FoodOrderApp",
    },*/
  ];

  const projectsList = projectsObjArray.map((project) => {
    return (
      <ProjectDiv
        key={project.id}
        language={language.code}
        englishTitle={project.englishTitle}
        hungarianTitle={project.hungarianTitle}
        stack={project.stack}
        to={project.to}
        src={project.src}
        github={project.github}
      />
    );
  });

  return (
    <Container id="projects" className="projects_container">
      {language.code === "en" ? (
        <h1>My Recently Projets</h1>
      ) : (
        <h1>Projektjeim</h1>
      )}
      {language.code === "en" ? (
        <p>The projects are only available in English for the time being.</p>
      ) : (
        <p>A projektek egyelőre csak angol nyelven elérhetőek</p>
      )}
      <hr />
      <div className="projects_project_list">{projectsList}</div>
    </Container>
  );
};

export default Navigation;
