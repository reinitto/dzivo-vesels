import React from "react";
import "./Footer2.css";
import profile from "../img/nr_31.jpg";

const footerStyle = {
  display: "flex",
  justifyContent: "space-around"
};

export default () => {
  return (
    <footer className="container-fluid ">
      <div className="borderFooter row " style={footerStyle}>
        <div
          style={{
            display: "flex",
            overflow: "hidden",
            maxWidth: "400px"
          }}
        >
          {" "}
          <a href="/About">
            <img src={profile} alt="" className="img-responsive no-display" />
          </a>
        </div>

        <div>
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
                <i class="fa fa-phone" aria-hidden="true" />
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

        <div className=" midDiv footerDiv">
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
        <div
          className="footerDiv"
          style={{
            marginRight: "5vw"
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
