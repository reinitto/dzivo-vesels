import React from "react";
import "./Footer2.css";
import profile from "../img/nr_31.jpg";

import { Link } from "react-router-dom";

const footerStyle = {
  display: "flex",
  justifyContent: "space-around"
};
const flexGrow = {
  flexGrow: 1
};

export default () => {
  return (
    <footer className="container-fluid ">
      <div className="borderFooter row " style={footerStyle}>
        <div
          style={{
            display: "flex",
            overflow: "hidden",
            maxWidth: "400px",
            padding: "0 0",
            flexGrow: 2
          }}
        >
          {" "}
          <Link to="/About" className="no-display">
            <img src={profile} alt="" className="img-responsive " />
          </Link>
        </div>

        <div style={flexGrow}>
          <ul className="list-group">
            <li className="list-group-item">
              {" "}
              <h4>
                <strong>Normunds Rozenšteins</strong>{" "}
              </h4>
            </li>

            <li className="list-group-item">
              <h4>
                <strong>Personīgais treneris / Fitnesa konsultants</strong>
              </h4>
            </li>
            <li className="list-group-item">
              <h4>
                <i className="fa fa-phone" aria-hidden="true" />
                <strong> +371 27841853</strong>{" "}
              </h4>
            </li>
            <li className="list-group-item">
              <a
                href="mailto:fitnesakonsultants@inbox.lv"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h4>
                  <i className="fa fa-envelope color-gmail"> </i>
                  <strong> fitnesakonsultants@inbox.lv</strong>
                </h4>
              </a>
            </li>
          </ul>
        </div>

        <div className=" midDiv footerDiv" style={flexGrow}>
          <Link to="/">
            <h4>Sākums</h4>
          </Link>
          <Link to="/Trenini">
            <h4>Individuālie treniņi</h4>
          </Link>
          <Link to="/Konsultacijas">
            <h4>Konsultācijas</h4>
          </Link>
          <Link to="/Atsauksmes">
            {" "}
            <h4>Atsauksmes</h4>{" "}
          </Link>
        </div>
        <div
          className="footerDiv"
          style={{
            marginRight: "5vw",
            flexGrow: 1
          }}
        >
          <a
            href="https://www.facebook.com/sporto.vesels"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-facebook color-facebook fa-2x"> </i>
          </a>
          <a
            href="https://twitter.com/sporto_vesels"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-twitter color-twitter fa-2x"> </i>
          </a>
        </div>
      </div>
    </footer>
  );
};
