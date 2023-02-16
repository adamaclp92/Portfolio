import React from 'react'

import { Link } from "react-router-dom";
import {Image} from "semantic-ui-react";

import './ProjectDiv.style.scss'

interface Props {
    language: string,
    englishTitle: string,
    hungarianTitle: string,
    stack: string,
    to: string,
    src: any,
    github: string
}


const ProjectDiv = (Props: Props) => {
  return (
    <div className="project">
    <Image className="image" src={Props.src}/>
    <div className="project_description">
      {Props.language === "en" ? <h5 className="title">{Props.englishTitle}</h5> : <h5 className="title">{Props.hungarianTitle}</h5>}
      <p>Stack: {Props.stack}</p> 
      <Link className="nav-link" to={Props.to}><button className="button1 ui primary button mini"><i className="angellist icon"></i>Live Demo</button></Link>
      <a href={Props.github} target="_blank"><button className="button2 ui secondary mini button"><i className="github icon"></i>View Source</button></a>
    </div>
   
</div>
  )
}

export default ProjectDiv