import React from "react";
import "./Footer2.css";
import profile from "../img/nr_31.jpg";

var Navbar = require("react-bootstrap").Navbar;
var Nav = require("react-bootstrap").Nav;
var NavItem = require("react-bootstrap").NavItem;
const footerStyle = {
  display: "flex",
  justifyContent: "space-around"
};

export default () => {
  return (
    <footer className="container-fluid ">
      <div
        style={{
          display: "flex",
          overflow: "hidden",
          maxWidth: "200px"
        }}
      >
        {" "}
        <a href="/About">
          <img src={profile} alt="" className="img-responsive" />{" "}
          <h4 style={{ textAlign: "center" }}>
            <strong>Normunds Rozenšteins</strong>{" "}
          </h4>
        </a>
      </div>
      <div className="container">
        <Navbar collapseOnSelect className="white">
          <Navbar.Header>
            <Navbar.Brand />
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight className=" navbar-right">
              <NavItem eventKey={1} href="/">
                <h4>Sākums</h4>
              </NavItem>
              <NavItem eventKey={2} href="/Trenini">
                <h4>Individuālie treniņi</h4>
              </NavItem>
              <NavItem eventKey={3} href="/Konsultacijas">
                <h4>Konsultācijas</h4>
              </NavItem>
              <NavItem eventKey={4} href="/Seminari">
                <h4>Semināri</h4>
              </NavItem>
              <NavItem eventKey={5} href="/About">
                <h4> Par mani</h4>
              </NavItem>{" "}
              <NavItem
                eventKey={6}
                target="_blank"
                href="https://twitter.com/sporto_vesels"
                id="floatdiv2"
              >
                <i className="fa fa-twitter color-twitter fa-2x" />
              </NavItem>
              <NavItem
                eventKey={7}
                target="_blank"
                href="https://www.facebook.com/sporto.vesels"
                id="floatdiv"
              >
                <i className="fa fa-facebook color-facebook fa-2x" />
              </NavItem>
              <NavItem
                eventKey={8}
                target="_blank"
                href="mailto:fitnesakonsultants@inbox.lv"
                id="floatdiv"
              >
                <i className="fa fa-envelope color-gmail fa-2x" />
              </NavItem>
            </Nav>
          </Navbar.Collapse>
          <div className="main-title-container">
            <h1 className="main-title">
              Sporto Vesels <strong>-</strong> <b> Dzīvo Labāk!</b>
            </h1>
          </div>
        </Navbar>{" "}
      </div>
    </footer>
  );
};
