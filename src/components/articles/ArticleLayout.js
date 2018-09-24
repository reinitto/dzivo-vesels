import React from "react";
import "../News.css";
import SideBar from "./SideBar";

const ArticleLayout = props => {
  return (
    <div className="row">
      <div className="col-md-6 col-md-offset-2">{props.children}</div>
      <div className="col-md-3 col-md-offset-1">
        <SideBar />
      </div>
    </div>
  );
};
export default ArticleLayout;
