import React from "react";
import { FormattedMessage } from "react-intl";
import "../scss/components/home.scss";

const home = () => {
  return (
    <div className="home" id="home">
      <div className="presentation">
        <div className="presentation-card">
          <h1>
            <FormattedMessage
              id="home.title"
              defaultMessage="Hi! My name is Fernando"
            />
          </h1>
          <div className="circle-wrapper">
            <div className="circle">
              <p>@FernandoFeN</p>
            </div>
            <div className="circleShadow"></div>
          </div>
          <p>
            <FormattedMessage
              id="home.text"
              defaultMessage="Something went wrong"
            />
          </p>
          <p>
            <i></i>
            "
            <FormattedMessage
              id="home.quote"
              defaultMessage="Something went wrong"
            />
            "
          </p>
          <button>
            <FormattedMessage id="home.download" defaultMessage="Download CV" />
            <i className="fa fa-download" aria-hidden="true"></i>
          </button>
        </div>
      </div>
      <div className="about-short">
        <h2>
          <FormattedMessage id="home.aboutTitle" defaultMessage="About this site" />
        </h2>
        <p>
          <FormattedMessage id="home.about" defaultMessage="Something went wrong, sorry" />
        </p>
      </div>
    </div>
  );
};

export default home;
