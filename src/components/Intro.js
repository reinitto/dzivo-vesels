import React from "react";
import profile from "../img/nr_31.jpg";
import "./Intro.css";

export default () => {
  return (
    <div className="container-fluid borderStyle">
      <div className="col-xs-3" style={{ padding: "0 0" }}>
        <a href="/About">
          <img src={profile} alt="" className="img-responsive" />
          <h4>Normunds Rozenšteins</h4>
          <p>Personīgais treneris</p>{" "}
        </a>
      </div>
      <div className="col-xs-9">
        <div className="main-title-container">
          <h1 className="main-title">
            Sporto Vesels <strong>-</strong> <b> Dzīvo Labāk!</b>
          </h1>
        </div>
      </div>
    </div>
  );
};
