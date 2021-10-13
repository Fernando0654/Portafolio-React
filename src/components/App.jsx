import React, { useContext } from "react";
import { LangProvider } from "../context/lang.context";
// COMPONENTES
import HeaderComponent from "./header";
import HomeComponent from "./home";
import AboutComponent from "./about";
import WorkComponent from "./work";
import ContactComponent from "./contact";
import FooterComponent from "./footer";
// ESTILOS
import "../scss/general.scss";

const App = () => {
  const language = useContext(LangProvider);
  return (
    <>
      <HeaderComponent />
      <main>
        <HomeComponent />
        <AboutComponent />
        <WorkComponent />
        <ContactComponent />
        <FooterComponent />
      </main>
    </>
  );
};

export default App;
