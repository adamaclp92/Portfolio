import { Link } from "react-router-dom";
import { Image } from "semantic-ui-react";

import "./ProjectDiv.style.scss";

interface Props {
  language: string;
  englishTitle: string;
  hungarianTitle: string;
  stack: string;
  href: string;
  src: any;
  github: string;
}

const ProjectDiv = (Props: Props) => {
  return (
    <div className="projectDiv_project">
      <Image className="projectDiv_image" src={Props.src} />
      <div className="projectDiv_project_description">
        {Props.language === "en" ? (
          <h2 className="projectDiv_title">{Props.englishTitle}</h2>
        ) : (
          <h2 className="projectDiv_title">{Props.hungarianTitle}</h2>
        )}
        <p className="projectDiv_description">Stack: {Props.stack}</p>

        <a href={Props.href} target="_blank">
          <button className="button1 btn btn-primary">
            <i className="angellist icon"></i>Live Demo
          </button>
        </a>

        <a href={Props.github} target="_blank" rel="noopener noreferrer">
          <button className="button2 btn btn-primary">
            <i className="github icon"></i>View Source
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectDiv;
