import emailjs from "emailjs-com";
import React from "react";
import "../scss/components/contact.scss";
import { MdFileDownloadDone } from "react-icons/md";
import { FaRegSadCry } from "react-icons/fa";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FormattedMessage } from "react-intl";

const contact = () => {
  function sendEmail(e) {
    e.preventDefault();
    console.log(e.target[0].value)
    if(e.target[0].value === "" || e.target[1].value === "" || e.target[2].value === "") {
      return;
    }
    document.getElementById("sending").style.display = "block";
    emailjs
      .sendForm(
        "service_8i4n26h",
        "template_33p34ka",
        e.target,
        "user_5Qj4lmfszJbjpR4lqr6TY"
      )
      .then(
        (result) => {
          document.getElementById("succeed").style.display = "block";
          document.getElementById("sending").style.display = "none";
        },
        (error) => {
          document.getElementById("error").style.display = "block";
          document.getElementById("sending").style.display = "none";
        }
      );
    e.target.reset();
    setTimeout(() => {
      document.getElementById("succeed").style.display = "none";
      document.getElementById("error").style.display = "none";
    }, 4000);
  }
  function handleInput(e) {
    if (e.target.value !== "") {
      document.getElementById(`l${e.target.name}`).style.display = "none";
    } else {
      document.getElementById(`l${e.target.name}`).style.display = "block";
    }
  }
  return (
    <div className="contact" id="contact">
      <h1>
        <FormattedMessage id="contact.title" defaultMessage="Contact" />
      </h1>
      <div className="contact-body">
        <div className="contact-descr">
          <p>
            <FormattedMessage id="contact.descr" defaultMessage="Holy molly" />
          </p>
        </div>
        <div className="message">
          <span className="succeed" id="succeed">
            <MdFileDownloadDone />
            <FormattedMessage
              id="contact.succeed"
              defaultMessage="Email sent succesfully"
            />
          </span>
          <span className="error" id="error">
            <FaRegSadCry />
            <FormattedMessage
              id="contact.error"
              defaultMessage="Something wnet wrong..."
            />
          </span>
          <span className="sending" id="sending">
            <AiOutlineLoading3Quarters className="loading-icon" />
            <FormattedMessage
              id="contact.loading"
              defaultMessage="Sending..."
            />
          </span>
        </div>
        <form onSubmit={sendEmail} className="contact-form">
          <div className="input-box">
            <label htmlFor="name" id="lname">
              <FormattedMessage id="contact.name" defaultMessage="Name" />
            </label>
            <input type="text" name="name" onChange={handleInput} />
            <label htmlFor="email" id="lemail">
              <FormattedMessage id="contact.email" defaultMessage="Email" />
            </label>
            <input type="email" name="email" onChange={handleInput} />
          </div>
          <div className="input-box subject">
            <label htmlFor="asunto" id="lasunto">
              <FormattedMessage id="contact.asunto" defaultMessage="Email" />
            </label>
            <textarea
              cols="30"
              rows="10"
              name="asunto"
              onChange={handleInput}
            ></textarea>
          </div>
          <div className="input-box">
            <button type="submit">
              <FormattedMessage id="contact.btn" defaultMessage="Send" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default contact;
