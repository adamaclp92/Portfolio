import LanguageModel from "../../models/languageModel";
import { FormEvent } from "react";
import { Form, Input, TextArea, Button, Container } from "semantic-ui-react";
import Swal from "sweetalert2";
import emailjs from "emailjs-com";
import { AiFillGithub } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { AiFillLinkedin } from "react-icons/ai";

import "./Contacts.style.scss";

const SERVICE_ID = "service_iatmhno";
const TEMPLATE_ID = "template_mtvuynw";
const USER_ID = "2sxORzJd0j_NUqowP";

const Contacts = (language: LanguageModel) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (e.currentTarget === null) return;

    console.log(e.currentTarget);
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.currentTarget, USER_ID).then(
      (result) => {
        Swal.fire({
          icon: "success",
          title: `${
            language.code === "en"
              ? "Message Sent Successfully"
              : "Üzenet sikeresen elküldve"
          }`,
        });
      },
      (error) => {
        Swal.fire({
          icon: "error",
          title: `${
            language.code === "en"
              ? "Ooops Something Went Wrong!"
              : "Ajjaj, valami nem sikerült!"
          }`,
          text: error.text,
        });
      }
    );
    e.currentTarget.reset();
  };

  return (
    <Container id="message" className="message_container">
      <h1 className="contact_title">
        {language.code === "en" ? <p>Contacts</p> : <p>Elérhetőségek</p>}
      </h1>
      <hr />
      <h3 className="message_title">
        {language.code === "en" ? <p>Message Me</p> : <p>Üzenj nekem</p>}
      </h3>

      <div className="message_grid">
        <div className="contact_footer_container">
          <ul id="contact">
            <div className="contact_column">
              <div className="contact_row">
                <li>
                  <HiOutlineMail size={30} />
                </li>
                <li>
                  {language.code === "en" ? <p>E-mail</p> : <p>E-mail cím</p>}
                </li>
                <li>
                  <p className="contact_email">adamaclp92@gmail.com</p>
                </li>
              </div>

              <div className="contact_row">
                <a
                  href="https://github.com/adamaclp92?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li>
                    <AiFillGithub size={30} />
                  </li>
                  <li>
                    <p>GitHub</p>
                  </li>
                  <li>https://github.com/adamaclp92</li>
                </a>
              </div>

              <div className="contact_row">
                <a
                  href="https://www.linkedin.com/in/%C3%A1d%C3%A1m-rag%C3%B3-b2a2b61a1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li>
                    <AiFillLinkedin size={30} />
                  </li>
                  <li>
                    <p>LinkedIn</p>
                  </li>
                </a>
              </div>
            </div>
          </ul>
        </div>

        <div className="message_form">
          <Form onSubmit={handleSubmit}>
            <Form.Field
              id="form.input-control-email"
              control={Input}
              name="user_email"
              placeholder={language.code === "en" ? "Email" : "Email cím"}
              required
              className="message_email"
            />
            <Form.Field
              id="form-input-control-last-name"
              control={Input}
              name="user_name"
              placeholder={language.code === "en" ? "Name" : "Név"}
              required
            />
            <Form.Field
              id="form-textarea-control-opinion"
              control={TextArea}
              name="user_message"
              placeholder={
                language.code === "en" ? "Message" : "Üzenet szövege"
              }
              required
            />
            <Button type="submit" className=" btn btn-primary ">
              {language.code === "en" ? "Send Message" : "Üzenet küldése"}
            </Button>
          </Form>
        </div>
      </div>

      <p className="contact_last_item">
        <p>Copyright @ 2023 Adam Rago. All rights reserved.</p>
      </p>
    </Container>
  );
};

export default Contacts;
