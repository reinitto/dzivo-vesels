import React from "react";
import "../News.css";
import SideBar from "./SideBar";

const ArticleLayout = props => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 col-md-offset-2 container">
          {props.children}
        </div>
        <div className="col-md-3 col-md-offset-1">
          <SideBar />
        </div>
      </div>
    </div>
  );
};
export default ArticleLayout;
