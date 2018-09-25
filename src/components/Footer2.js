import React from "react";
import "./Footer2.css";
import profile from "../img/nr_21.jpg";

const footerDivStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  flexDirection: "column"
};

const footerStyle = {
  display: "flex",
  justifyContent: "space-around"
};

export default () => {
  return (
    <footer className="container-fluid ">
      <div className="borderFooter row " style={footerStyle}>
        <div className="col-sm-4 footerDivs ">
          <div
            style={{
              display: "flex"
            }}
          >
            <a href="/about">
              <img src={profile} alt="" className="img-responsive" />
            </a>
            <ul className="list-group">
              <li className="list-group-item">
                {" "}
                <strong>Normunds Rozenšteins</strong>{" "}
              </li>

              <li className="list-group-item">
                <strong>Personīgais treneris / Fitnesa konsultants</strong>
              </li>
              <li className="list-group-item">
                <strong> +371 27841853</strong>{" "}
              </li>
              <li className="list-group-item">
                <a
                  href="mailto:fitnesakonsultants@inbox.lv"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <strong>fitnesakonsultants@inbox.lv</strong>
                </a>
              </li>
            </ul>
            <p />
          </div>
        </div>
        <div className="col-sm-4 midDiv" style={footerDivStyles}>
          <a href="/">
            <h4>Sākums</h4>
          </a>
          <a href="/Trenini">
            <h4>Individuālie treniņi</h4>
          </a>
          <a href="/Konsultacijas">
            <h4>Konsultācijas</h4>
          </a>
          <a href="/Article2">
            {" "}
            <h4>Atsauksmes</h4>{" "}
          </a>
        </div>
        <div className="col-sm-4" style={footerDivStyles}>
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
          <a
            href="mailto:fitnesakonsultants@inbox.lv"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-envelope color-gmail fa-2x"> </i>
          </a>
        </div>
      </div>
    </footer>
  );
};
