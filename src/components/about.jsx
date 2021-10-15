import React, { useState } from "react";
// ESTILOS
import { BsChevronUp, BsChevronDown } from "react-icons/bs";
import {
  FaLocationArrow,
  FaUniversity,
  FaUserAlt,
  FaCode,
} from "react-icons/fa";
import { FormattedMessage } from "react-intl";
import "../scss/components/about.scss";

const about = () => {
  const [position, setposition] = useState(1);
  const [translateY, settranslateY] = useState(0);
  // ESTILOS JS
  const currentItem = {
    fontWeight: "bold",
    borderBottom: "0.5px solid rgb(77, 75, 187)",
  };
  const Item = {
    fontSize: "0.7rem",
  };
  const current = {
    transform: `translateY(${translateY}vh)`,
  };
  // FUNCTIONS
  function goBack() {
    if (position <= 1) {
      setposition(1);
      return;
    }
    setposition(position - 1);
    settranslateY(translateY + 40);
  }
  function goNext() {
    if (position >= 7) {
      setposition(7);
      return;
    }
    setposition(position + 1);
    settranslateY(translateY - 40);
  }
  // UI
  return (
    <div className="about" id="about">
      <div className="card-about">
        <div className="card-me">
          <img
            src="./assets/img/header-img.jpg"
            className="header-img"
            alt="header photo"
          />
          <img
            src="./assets/img/img-me.png"
            className="header-me"
            alt="my photo"
          />
          <h1>Alcantara Mateo Luis Fernando</h1>
        </div>
        <div className="general">
          <div className="box-general">
            <p>
              <FormattedMessage
                id="about.descr"
                defaultMessage="Something went wrong"
              />
            </p>
          </div>
          <div className="box-personal">
            <h4>
              <FaLocationArrow />
              &nbsp;&nbsp;
              <FormattedMessage
                id="about.location"
                defaultMessage="Mexico, Mexico City"
              />
            </h4>
            <h4>
              <FaUniversity />
              &nbsp;&nbsp;
              <FormattedMessage
                id="about.degree"
                defaultMessage="Student in Systems Engineering"
              />
            </h4>
            <h4>
              <FaUserAlt />
              &nbsp;&nbsp;
              <FormattedMessage id="about.age" defaultMessage="22 years old" />
            </h4>
            <h4>
              <FaCode />
              &nbsp;&nbsp;
              <FormattedMessage
                id="about.learning"
                defaultMessage="Web developer, AI trainee"
              />
            </h4>
          </div>
        </div>
      </div>
      <div className="timeline">
        <div className="timeline-linear">
          <div className="btn-group">
            <button className="btn_back" onClick={goBack}>
              <BsChevronUp />
            </button>
          </div>
          <span style={position == 1 ? currentItem : Item}>2015</span>
          <span style={position == 2 ? currentItem : Item}>2016</span>
          <span style={position == 3 ? currentItem : Item}>2017</span>
          <span style={position == 4 ? currentItem : Item}>2018</span>
          <span style={position == 5 ? currentItem : Item}>2019</span>
          <span style={position == 6 ? currentItem : Item}>2020</span>
          <span style={position == 7 ? currentItem : Item}>2021</span>
          <div className="btn-group">
            <button className="btn_next" onClick={goNext}>
              <BsChevronDown className="icon-next" />
            </button>
          </div>
        </div>
        <div id="mySwipe" className="swipe">
          <div className="swipe-wrap" style={current}>
            <div className="swipe-content">
              <div className="caja">
                <div className="book" id="java">
                  <div className="book-front"></div>
                </div>
              </div>
              <div className="caja">
                <div className="book" id="c">
                  <div className="book-front"></div>
                </div>
              </div>
              <div className="caja">
                <div className="book" id="cPlus">
                  <div className="book-front"></div>
                </div>
              </div>
              <p>
                <FormattedMessage id="about.year1" />
              </p>
            </div>
            <div className="swipe-content">
              <div className="caja">
                <div className="book" id="html">
                  <div className="book-front"></div>
                </div>
              </div>
              <div className="caja">
                <div className="book" id="css">
                  <div className="book-front"></div>
                </div>
              </div>
              <div className="caja">
                <div className="book" id="js">
                  <div className="book-front"></div>
                </div>
              </div>
              <p>
              <FormattedMessage id="about.year2" />
              </p>
            </div>
            <div className="swipe-content" id="2017">
              <div className="caja">
                <div className="book" id="php">
                  <div className="book-front"></div>
                </div>
              </div>
              <div className="caja">
                <div className="book" id="mysql">
                  <div className="book-front"></div>
                </div>
              </div>
              <div className="caja">
                <div className="book" id="apache">
                  <div className="book-front"></div>
                </div>
              </div>
              <p>
              <FormattedMessage id="about.year3" />
              </p>
            </div>
            <div className="swipe-content" id="2018">
              <div className="caja">
                <div className="book" id="fb">
                  <div className="book-front"></div>
                </div>
              </div>
              <div className="caja">
                <div className="book" id="jquery">
                  <div className="book-front"></div>
                </div>
              </div>
              <div className="caja">
                <div className="book" id="sass">
                  <div className="book-front"></div>
                </div>
              </div>
              <p>
              <FormattedMessage id="about.year4" />
              </p>
            </div>
            <div className="swipe-content" id="2019">
              <div className="caja">
                <div className="book" id="angular">
                  <div className="book-front"></div>
                </div>
              </div>
              <div className="caja">
                <div className="book" id="ts">
                  <div className="book-front"></div>
                </div>
              </div>
              <div className="caja">
                <div className="book" id="ionic">
                  <div className="book-front"></div>
                </div>
              </div>
              <p>
              <FormattedMessage id="about.year5" />
              </p>
            </div>
            <div className="swipe-content" id="2020">
              <div className="caja">
                <div className="book" id="angular">
                  <div className="book-front"></div>
                </div>
              </div>
              <div className="caja">
                <div className="book" id="react">
                  <div className="book-front"></div>
                </div>
              </div>
              <div className="caja">
                <div className="book" id="mongodb">
                  <div className="book-front"></div>
                </div>
              </div>
              <p>
              <FormattedMessage id="about.year6" />
              </p>
            </div>
            <div className="swipe-content" id="2021">
              <div className="caja">
                <div className="book" id="react">
                  <div className="book-front"></div>
                </div>
              </div>
              <div className="caja">
                <div className="book" id="nodejs">
                  <div className="book-front"></div>
                </div>
              </div>
              <div className="caja">
                <div className="book" id="python">
                  <div className="book-front"></div>
                </div>
              </div>
              <p>
              <FormattedMessage id="about.year7" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
