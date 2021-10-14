import React from "react";
import "../scss/components/footer.scss";
import { FaCopyright } from "react-icons/fa";
import { FormattedMessage } from "react-intl";

const footer = () => {
  return (
    <footer>
      <p>
        <FormattedMessage
          id="footer.title"
          defaultMessage="Website created by FernandoFeN"
        />
      </p>
      <p>
        <FormattedMessage
          id="footer.copyright"
          defaultMessage="All rights reserved"
        />
        &nbsp;&nbsp;
        <FaCopyright />
      </p>
    </footer>
  );
};

export default footer;
