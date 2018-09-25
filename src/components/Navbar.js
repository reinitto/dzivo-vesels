import React from "react";
import { Link } from "react-router-dom";
import nr_31 from "../img/nr_31.jpg";
import "./Navbar.css";

var Navbar = require("react-bootstrap").Navbar;
var Nav = require("react-bootstrap").Nav;
var NavItem = require("react-bootstrap").NavItem;

export default () => {
  return (
    <div className="container-fluid border" style={{ display: "flex" }}>
      <div className="row">
        <div className="col-xs-4 col-sm-2">
          <img src={nr_31} className="img-responsive" alt="" />{" "}
          <a href="/About">
            <h4
              style={{
                fontWeight: 500,
                textDecoration: "underline",
                textAlign: "center",

                padding: "10px 15px"
              }}
            >
              Normunds Rozenšteins
            </h4>
          </a>
        </div>

        <div
          className="col-xs-8 col-sm-10 "
          style={{
            display: "flex",
            flexDirection: "column"
          }}
        >
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
                <NavItem eventKey={1} href="/Trenini">
                  <h4>Individuālie treniņi</h4>
                </NavItem>
                <NavItem eventKey={3} href="/Konsultacijas">
                  <h4>Konsultācijas</h4>
                </NavItem>
                <NavItem eventKey={3} href="/Seminari">
                  <h4>Semināri</h4>
                </NavItem>
                <NavItem eventKey={2} href="/About">
                  <h4> Par mani</h4>
                </NavItem>{" "}
                <NavItem
                  eventKey={3}
                  target="_blank"
                  href="https://twitter.com/sporto_vesels"
                  id="floatdiv2"
                >
                  <i className="fa fa-twitter color-twitter fa-2x" />
                </NavItem>
                <NavItem
                  eventKey={4}
                  target="_blank"
                  href="https://www.facebook.com/sporto.vesels"
                  id="floatdiv"
                >
                  <i className="fa fa-facebook color-facebook fa-2x" />
                </NavItem>
                <NavItem
                  eventKey={5}
                  target="_blank"
                  href="mailto:fitnesakonsultants@inbox.lv"
                  id="floatdiv"
                >
                  <i className="fa fa-envelope color-gmail fa-2x" />
                </NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <div className="main-title-container">
            <h1 className="main-title">
              Sporto Vesels <strong>-</strong> <b> Dzīvo Labāk</b>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
