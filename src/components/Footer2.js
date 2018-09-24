import React from "react";
import "./Footer2.css";
import profile from "../img/nr_2.jpg";

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
              <li className="list-group-item">fitnesakonsultants@inbox.lv</li>
            </ul>
            <p />
          </div>
        </div>
        <div className="col-sm-4 midDiv" style={footerDivStyles}>
          <a href="/">Sākums</a>
          <a href="/Trenini">Individualie treniņi</a>
          <a href="/Konsultacijas">Konsultācijas</a>
          <a href="/Article2">Atsauksmes</a>
        </div>
        <div className="col-sm-4" style={footerDivStyles}>
          <a href="https://www.facebook.com/sporto.vesels">
            <i className="fa fa-facebook color-facebook fa-2x"> </i>
          </a>
          <a href="https://twitter.com/sporto_vesels">
            <i className="fa fa-twitter color-twitter fa-2x"> </i>
          </a>
          <a href="mailto:fitnesakonsultants@inbox.lv">
            <i className="fa fa-envelope color-gmail fa-2x"> </i>
          </a>
        </div>
      </div>

      <div className="footer-copyright text-center py-3">© 2018 Copyright:</div>
    </footer>
  );
};
