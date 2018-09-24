import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
var Navbar = require("react-bootstrap").Navbar;
var Nav = require("react-bootstrap").Nav;
var NavItem = require("react-bootstrap").NavItem;

export default () => {
  return (
    <div
      className="container-fluid border no-wrap"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <Navbar collapseOnSelect className="white">
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">
              <h4
                style={{
                  fontWeight: 500,
                  textDecoration: "underline"
                }}
              >
                Sporto Vesels <strong> - </strong>{" "}
                <b style={{ color: "#026f89" }}>Dzīvo Labāk</b>
              </h4>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight className=" navbar-right">
            <NavItem eventKey={1} href="/Trenini">
              <h4>Individuālie treniņi</h4>
            </NavItem>
            <NavItem eventKey={3} href="/Konsultacijas">
              <h4>Konsultācijas</h4>
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
    </div>
  );
};
