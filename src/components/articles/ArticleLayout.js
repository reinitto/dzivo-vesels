import React from "react";
import "../News.css";
import SideBar from "./SideBar";

const ArticleLayout = props => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-6 col-sm-offset-2 container">
          {props.children}
        </div>
        <div className=" col-xs-12 col-sm-3  col-sm-offset-1">
          <SideBar />
        </div>
      </div>
    </div>
  );
};
export default ArticleLayout;
