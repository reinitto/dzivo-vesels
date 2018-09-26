import React from "react";
import profile from "../img/nr_31.jpg";
import "./Intro.css";

export default () => {
  return (
    <div className="container-fluid borderStyle">
      <div className="col-xs-3">
        <a href="/About">
          <img src={profile} alt="" className="img-responsive" />
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
