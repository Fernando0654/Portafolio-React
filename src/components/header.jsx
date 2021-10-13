import React, { useState, useContext } from "react";
import { FormattedMessage } from "react-intl";
// ICONS
import "../scss/components/header.scss";
import { FiMoon, FiSun } from "react-icons/fi";
import { BsYoutube, BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { langContext } from "../context/lang.context";

const headerComponent = () => {
  const language = useContext(langContext);
  const [lightMode, setlightMode] = useState(false);
  const [lang, setlang] = useState("en-US");
  const changeMode = () => {
    setlightMode(!lightMode);
    if (lightMode) {
      document.querySelector("body").classList.remove("light");
    } else {
      document.querySelector("body").classList.add("light");
    }
  };
  const changeLanguage = () => {
    if (lang === "en-US") {
      document.getElementById("lang-text").innerText = "EN";
      setlang("es-MX");
      language.setLanguage("es-MX");
    }
    if (lang === "es-MX") {
      document.getElementById("lang-text").innerText = "ES";
      setlang("en-US");
      language.setLanguage("en-US");
    }
  };
  return (
    <header>
      <h1>
        <FormattedMessage id="app.title" defaultMessage="ERROR" />
      </h1>
      <div className="socials">
        <a href="https://github.com/Fernando0654" target="_blank">
          <BsGithub className="icon" />
        </a>
        <a href="#">
          <FaLinkedinIn className="icon" />
        </a>
        <a
          href="https://www.youtube.com/channel/UCTi1u_GAXS9l5Bi-sOmCQCg"
          target="_blank"
        >
          <BsYoutube className="icon" />
        </a>
      </div>
      <div className="preferencias" id="home">
        <div className="language" onClick={() => changeLanguage()}>
          <span id="lang-text">Es</span>
        </div>
        <div className="brightness" onClick={changeMode}>
          <div className="circle-bright">
            {lightMode ? <FiMoon /> : <FiSun />}
          </div>
        </div>
      </div>
    </header>
  );
};

export default headerComponent;
