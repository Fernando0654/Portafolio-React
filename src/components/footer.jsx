import React from "react";
import "../scss/components/footer.scss";
import { FaCopyright } from "react-icons/fa";

const footer = () => {
  return (
    <footer>
      <p>Sitio realizado por FernandoFeN en REACT</p>
      <p>
        Todos los derechos reservados
        <FaCopyright />
      </p>
    </footer>
  );
};

export default footer;