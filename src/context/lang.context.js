import React, { useState } from "react";
import esLang from "../lang/es-MX.json";
import enLang from "../lang/en-US.json";
import { IntlProvider } from "react-intl";

const langContext = React.createContext();

const LangProvider = ({ children }) => {
  let localeSaved = "en-US";
  let langSaved = enLang;
  const isLangSaved = localStorage.getItem("lang");
  if (isLangSaved) {
    localeSaved = isLangSaved;
    if (isLangSaved === "es-MX") {
      langSaved = esLang;
    } else if (isLangSaved === "en-US") {
      langSaved = enLang;
    }
  }
  const [language, setlanguage] = useState(langSaved);
  const [locale, setlocale] = useState(localeSaved);
  const setLanguage = (language) => {
    switch (language) {
      case "es-MX":
        setlanguage(esLang);
        setlocale("es-MX");
        localStorage.setItem("lang", "es-MX");
        break;
      case "en-US":
        setlanguage(enLang);
        setlocale("en-US");
        localStorage.setItem("lang", "en-US");
        break;
      default:
        setlanguage(enLang);
        setlocale("en-US");
        localStorage.setItem("lang", "en-US");
        break;
    }
  };
  return (
    <langContext.Provider value={{ setLanguage: setLanguage }}>
      <IntlProvider locale={locale} messages={language}>
        {children}
      </IntlProvider>
    </langContext.Provider>
  );
};

export { LangProvider, langContext };
