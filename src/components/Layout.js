import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "./Navbar";
import Footer from "./Footer2";

const Layout = props => (
  <div>
    <Helmet>
      <html lang="lv" />
    </Helmet>
    <Navbar />
    <div>{props.children}</div>
    <Footer />
  </div>
);

export default Layout;
