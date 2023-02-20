# FrontEnd Portfolio

The main purpose of this portfolio to introduce some of my learning projects. 

## Portfolio Page Stack
    -HTML
    -CSS,SCSS
    -Javascript - React
    -Typescript


## Node-module extensions
    -react
    -react-router-dom
    -semantic-ui-react
    -sweetalert2
    -emailjs-com
    -tailwind

## Components

### App
Routing settings for the Landing Portfolio page and the projects page. The example projects are in different components in different folders. Every components have an own SASS style file. These files describe their own elements of the components'. In these files I made media queries which responsible for the responsiveness.

### Projects folder
It collects all of my projects. The actual project description is in that folder.

### Routes/Home
This is a container component. It collects the page's main components.

This Portfolio contains 6 sections: 
    -Navbar
    -Introduction
    -About
    -Projects
    -Message
    -Contacts

The user can choose two different language which is the following:
    -English
    -Hungarian

When the language has chosen, the current language has stored in the currentLanguage state variable. The language type was declared in the languageModel interface.
The portfolio sections got this currentLanguage via props. 

LanguageModel elements:
  code: string;
  name: string;
  asset: string;

### Introduction
Contain an image from me and a little indtroduction.

### About
Contain a little description about my studies and future goals. Also shows the technologies and skills that I'm using.
The technologies and skills were described in the config folder (logos.ts and skills.ts) as JSON objects array. In the component I mapped through the arrays (logosMapping, skillsMapping).

### Projects
The projects JSON array is in the config folder. The project component maps through this array and every project has an UI container called ProjectDiv. Every ProjectDiv contains a project image and two buttons (live, source). the live demo routing was created by React Router. 

### Message
Users can send email messages to me. The component contains a form and a handlesubmit function sends the forms' data to emailjs API. The users get feedback about the messages sending success.

### Contacts
Footer section which contains my email, github and linkedin contact.