import React from "react";
import "../scss/components/contact.scss";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BiMinusCircle } from "react-icons/bi";
import { BsStopCircle } from "react-icons/bs";

const contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="contact-header">
        <AiOutlineCloseCircle className="icon-window close" />
        <BiMinusCircle className="icon-window" />
        <BsStopCircle className="icon-window" />
        <p>CONTÁCTAME@Fernando~Portfolio~</p>
      </div>
      <div className="contact-body">
        <div className="contact-descr">
          <p>
            Puedes enviarme un mensaje colocando solamente tu nombre, un email y
            un cuerpo de mensaje. ¡Gracias!
          </p>
        </div>
        <div className="contact-form">
          <form>
            <div className="input-box">
              <label htmlFor="name">Portfolio@tu-nombre:~$</label>
              <input type="text" placeholder="Nombre" />
            </div>
            <div className="input-box">
              <label htmlFor="email">Portfolio@tu-correo:~$</label>
              <input type="email" placeholder="Correo" />
            </div>
            <div className="input-box">
              <label htmlFor="matter">Portfolio@tu-asunto:~$</label>
              <input type="text" placeholder="Asunto" />
            </div>
            <div className="input-box">
              <label htmlFor="send">Portfolio@enviar:~$</label>
              <input type="submit" value="Enviar mi mensaje" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default contact;
