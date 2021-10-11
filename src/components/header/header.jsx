import React from "react";

const headerComponent = () => {
  return (
    <header>
      <h1>Mi Portafolio</h1>
      <div className="socials">
        <a href="https://github.com/Fernando0654" target="_blank">
          <i className="fa fa-github" aria-hidden="true"></i>
        </a>
        <a href="#">
          <i className="fa fa-linkedin" aria-hidden="true"></i>
        </a>
        <a
          href="https://www.youtube.com/channel/UCTi1u_GAXS9l5Bi-sOmCQCg"
          target="_blank"
        >
          <i className="fa fa-youtube" aria-hidden="true"></i>
        </a>
      </div>
      <div className="preferencias" id="home">
        <div className="language">
          <span>Es</span>
        </div>
        <div className="brightness" id="adjust-bright">
          <div className="circle-bright">
            <i id="bright-icon" className="fas fa-sun"></i>
          </div>
        </div>
      </div>
    </header>
  );
};

export default headerComponent;
