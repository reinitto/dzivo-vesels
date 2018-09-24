import React from "react";
import "./Footer2.css";
import profile from "../img/nr_21.jpg";

const footerDivStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  flexDirection: "column"
};

export default () => {
  return (
    <footer
      className="page-footer row no-display
     "
    >
      <div className="container-fluid borderFooter">
        <div className="col-sm-4 footerDivs">
          <div
            style={{
              display: "flex"
            }}
          >
            <a href="/about">
              <img src={profile} alt="" style={{ maxHeight: "150px" }} />
            </a>
            <ul className="list-group">
              <li className="list-group-item">Normunds Rozenšteins</li>

              <li className="list-group-item">
                Personīgais treneris / Fitnesa konsultants
              </li>
              <li className="list-group-item"> +371 27841853</li>
              <li className="list-group-item">
                <a
                  href="mailto:fitnesakonsultants@inbox.lv"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  fitnesakonsultants@inbox.lv
                </a>
              </li>
            </ul>
            <p />
          </div>
        </div>
        <div className="col-sm-4 midDiv" style={footerDivStyles}>
          <a href="/">Sākums</a>
          <a href="/Trenini">Individuālie treniņi</a>
          <a href="/Konsultacijas">Konsultācijas</a>
          <a href="/Article2">Atsauksmes</a>
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
