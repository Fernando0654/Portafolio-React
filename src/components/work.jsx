import React from "react";
import "../scss/components/work.scss";
// ICONS
import { BsFillFileCodeFill, BsGithub } from "react-icons/bs";
import { FaLaptopCode } from "react-icons/fa";
import { FormattedMessage } from "react-intl";
// IMAGENES
import w1 from "../assets/img/work/1.png";
import w2 from "../assets/img/work/2.png";
import w3 from "../assets/img/work/3.png";
import w4 from "../assets/img/work/4.png";
import w5 from "../assets/img/work/5.png";
import w6 from "../assets/img/work/6.png";
import w7 from "../assets/img/work/7.png";
import w8 from "../assets/img/work/8.png";
import w9 from "../assets/img/work/9.png";
import w10 from "../assets/img/work/10.png";
import w11 from "../assets/img/work/11.png";

const work = () => {
  return (
    <div className="portfolio" id="portfolio">
      <h1>Mis Proyectos</h1>
      <div className="glide">
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            <li className="glide__slide">
              <img src={w1} alt="" width="100%" />
              <p>
                <BsFillFileCodeFill />
                &nbsp;&nbsp;
                <FormattedMessage id="work.work1" defaultMessage="Calculator" />
              </p>
              <div className="external-links">
                <a
                  href="https://github.com/Fernando0654/FEM_4_Calculator_App.git"
                  target="_blank"
                >
                  Github Repo &nbsp;&nbsp;
                  <BsGithub />
                </a>
                <a
                  href="https://fernando0654.github.io/FEM_4_Calculator_App/"
                  target="_blank"
                >
                  <FormattedMessage id="work.live" defaultMessage="Live Site" />
                  &nbsp;&nbsp;
                  <FaLaptopCode />
                </a>
              </div>
            </li>
            <li className="glide__slide">
              <img src={w2} alt="" width="100%" />
              <p>
                <BsFillFileCodeFill />
                &nbsp;&nbsp;
                <FormattedMessage
                  id="work.work2"
                  defaultMessage="Sunnyside Landing Page"
                />
              </p>
              <div className="external-links">
                <a
                  href="https://github.com/Fernando0654/FEM_3_Sunnyside_Landing_Page.git"
                  target="_blank"
                >
                  Github Repo &nbsp;&nbsp;
                  <BsGithub />
                </a>
                <a
                  href="https://fernando0654.github.io/FEM_3_Sunnyside_Landing_Page/"
                  target="_blank"
                >
                  <FormattedMessage id="work.live" defaultMessage="Live Site" />
                  &nbsp;&nbsp;
                  <FaLaptopCode />
                </a>
              </div>
            </li>
            <li className="glide__slide">
              <img src={w3} alt="" width="100%" />
              <p>
                <BsFillFileCodeFill />
                &nbsp;&nbsp;
                <FormattedMessage
                  id="work.work3"
                  defaultMessage="Time Tracking Dashboard"
                />
              </p>
              <div className="external-links">
                <a href="#">
                  Github Repo &nbsp;&nbsp;
                  <BsGithub />
                </a>
                <a
                  href="https://fernando0654.github.io/FEM_8_TimeTracking/"
                  target="_blank"
                >
                  <FormattedMessage id="work.live" defaultMessage="Live Site" />{" "}
                  &nbsp;&nbsp;
                  <FaLaptopCode />
                </a>
              </div>
            </li>
            <li className="glide__slide">
              <img src={w4} alt="" width="100%" />
              <p>
                <BsFillFileCodeFill />
                &nbsp;&nbsp;
                <FormattedMessage
                  id="work.work4"
                  defaultMessage="Tip App Calculator"
                />
              </p>
              <div className="external-links">
                <a
                  href="https://github.com/Fernando0654/FEM_1_Tip_Calculator.git"
                  target="_blank"
                >
                  Github Repo &nbsp;&nbsp;
                  <BsGithub />
                </a>
                <a
                  href="https://fernando0654.github.io/FEM_1_Tip_Calculator/"
                  target="_blank"
                >
                  <FormattedMessage id="work.live" defaultMessage="Live Site" />{" "}
                  &nbsp;&nbsp;
                  <FaLaptopCode />
                </a>
              </div>
            </li>
            <li className="glide__slide">
              <img src={w5} alt="" width="100%" />
              <p>
                <BsFillFileCodeFill />
                &nbsp;&nbsp;
                <FormattedMessage
                  id="work.work5"
                  defaultMessage="Stats Preview"
                />
              </p>
              <div className="external-links">
                <a
                  href="https://github.com/Fernando0654/FEM_5_Stats-Preview.git"
                  target="_blank"
                >
                  Github Repo &nbsp;&nbsp;
                  <BsGithub />
                </a>
                <a
                  href="https://fernando0654.github.io/FEM_5_Stats-Preview/"
                  target="_blank"
                >
                  <FormattedMessage id="work.live" defaultMessage="Live Site" />{" "}
                  &nbsp;&nbsp;
                  <FaLaptopCode />
                </a>
              </div>
            </li>
            <li className="glide__slide">
              <img src={w6} alt="" width="100%" />
              <p>
                <BsFillFileCodeFill />
                &nbsp;&nbsp;
                <FormattedMessage
                  id="work.work6"
                  defaultMessage="Blogr Landing Page"
                />
              </p>
              <div className="external-links">
                <a
                  href="https://github.com/Fernando0654/FEM_7_Blogr.git"
                  target="_blank"
                >
                  Github Repo &nbsp;&nbsp;
                  <BsGithub />
                </a>
                <a
                  href="https://fernando0654.github.io/FEM_7_Blogr/"
                  target="_blank"
                >
                  <FormattedMessage id="work.live" defaultMessage="Live Site" />{" "}
                  &nbsp;&nbsp;
                  <FaLaptopCode />
                </a>
              </div>
            </li>
            <li className="glide__slide">
              <img src={w7} alt="" width="100%" />
              <p>
                <BsFillFileCodeFill />
                &nbsp;&nbsp;
                <FormattedMessage
                  id="work.work7"
                  defaultMessage="Order Summary Component"
                />
              </p>
              <div className="external-links">
                <a
                  href="https://github.com/Fernando0654/FEM_2_Order-Summary.git"
                  target="_blank"
                >
                  Github Repo &nbsp;&nbsp;
                  <BsGithub />
                </a>
                <a
                  href="https://fernando0654.github.io/FEM_2_Order-Summary/"
                  target="_blank"
                >
                  <FormattedMessage id="work.live" defaultMessage="Live Site" />{" "}
                  &nbsp;&nbsp;
                  <FaLaptopCode />
                </a>
              </div>
            </li>
            <li className="glide__slide">
              <img src={w8} alt="" width="100%" />
              <p>
                <BsFillFileCodeFill />
                &nbsp;&nbsp;
                <FormattedMessage
                  id="work.work1"
                  defaultMessage="3 Column Preview Card"
                />
              </p>
              <div className="external-links">
                <a
                  href="https://github.com/Fernando0654/FEM_6_3Column-Preview-Card.git"
                  target="_blank"
                >
                  Github Repo &nbsp;&nbsp;
                  <BsGithub />
                </a>
                <a
                  href="https://fernando0654.github.io/FEM_6_3Column-Preview-Card/"
                  target="_blank"
                >
                  <FormattedMessage id="work.live" defaultMessage="Live Site" />{" "}
                  &nbsp;&nbsp;
                  <FaLaptopCode />
                </a>
              </div>
            </li>
            <li className="glide__slide">
              <img src={w9} alt="" width="100%" />
              <p>
                <BsFillFileCodeFill />
                &nbsp;&nbsp;
                <FormattedMessage
                  id="work.work9"
                  defaultMessage="Crowdfunding Landing Page"
                />
              </p>
              <div className="external-links">
                <a
                  href="https://github.com/Fernando0654/FEM_9_Crowdfunding.git"
                  target="_blank"
                >
                  Github Repo &nbsp;&nbsp;
                  <BsGithub />
                </a>
                <a
                  href="https://fernando0654.github.io/FEM_9_Crowdfunding/"
                  target="_blank"
                >
                  <FormattedMessage
                    id="work.live"
                    defaultMessage="Crowdfunding Landing Page"
                  />
                  &nbsp;&nbsp;
                  <FaLaptopCode />
                </a>
              </div>
            </li>
            <li className="glide__slide">
              <img src={w10} alt="" width="100%" />
              <p>
                <BsFillFileCodeFill />
                &nbsp;&nbsp;
                <FormattedMessage
                  id="work.work10"
                  defaultMessage="Profile Card Component"
                />
              </p>
              <div className="external-links">
                <a
                  href="https://github.com/Fernando0654/FEM_11_Profile-Card-Component.git"
                  target="_blank"
                >
                  Github Repo &nbsp;&nbsp;
                  <BsGithub />
                </a>
                <a
                  href="https://fernando0654.github.io/FEM_11_Profile-Card-Component/"
                  target="_blank"
                >
                  <FormattedMessage
                    id="work.live"
                    defaultMessage="Live Site "
                  />
                  &nbsp;&nbsp;
                  <FaLaptopCode />
                </a>
              </div>
            </li>
            <li className="glide__slide">
              <img src={w11} alt="" width="100%" />
              <p>
                <BsFillFileCodeFill />
                &nbsp;&nbsp;
                <FormattedMessage
                  id="work.work11"
                  defaultMessage="Accordion Card"
                />
              </p>
              <div className="external-links">
                <a
                  href="https://github.com/Fernando0654/FEM_10-Accordion-Card.git"
                  target="_blank"
                >
                  Github Repo &nbsp;&nbsp;
                  <BsGithub />
                </a>
                <a
                  href="https://fernando0654.github.io/FEM_10-Accordion-Card/"
                  target="_blank"
                >
                  <FormattedMessage
                    id="work.work1"
                    defaultMessage="Live Site"
                  />{" "}
                  &nbsp;&nbsp;
                  <FaLaptopCode />
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default work;
