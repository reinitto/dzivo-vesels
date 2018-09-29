import React from "react";
import profile from "../img/nr_31.jpg";
import "./Intro.css";

export default () => {
  return (
    <div className="container-fluid borderStyle">
      <div
        className="row"
        style={{
          display: "flex",
          alignItems: "center"
        }}
      >
        <div className="col-xs-2">
          <a href="/About" className="text-center">
            <img src={profile} alt="" className="img-responsive" />
            <h4>Normunds Rozenšteins</h4>
            <p>Personīgais treneris</p>{" "}
          </a>
        </div>
        <div className="col-xs-8">
          <div>
            <h1 className="main-title text-center">
              Sporto Vesels <strong>-</strong> <b> Dzīvo Labāk!</b>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
