import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "./Navbar";
import Footer from "./Footer2";
import Intro from "./Intro";

const Layout = props => (
  <div>
    <Helmet>
      <html lang="lv" />
    </Helmet>
    <Navbar />
    <Intro />
    <div>{props.children}</div>
    <Footer />
  </div>
);

export default Layout;
