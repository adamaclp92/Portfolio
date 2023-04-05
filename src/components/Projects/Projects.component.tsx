import "./Projects.style.scss";
import LanguageModel from "../../models/languageModel";
import ProjectDiv from "./UI/ProjectDiv.component";
import projectsObjArray from "../../config/projects";

const Navigation = (language: LanguageModel) => {
  const projectsList = projectsObjArray.map((project) => {
    return (
      <ProjectDiv
        key={project.id}
        language={language.code}
        englishTitle={project.englishTitle}
        hungarianTitle={project.hungarianTitle}
        stack={project.stack}
        src={project.src}
        github={project.github}
        href={project.href}
      />
    );
  });

  return (
    <div id="projects" className="projects_container">
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
    </div>
  );
};

export default Navigation;
