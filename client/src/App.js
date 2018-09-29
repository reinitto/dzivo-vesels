import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Layout from "./components/Layout";
import Konsultacijas from "./components/Konsultacijas";
import Monitors from "./components/Monitors";
import Home from "./components/Home";
import jwt_decode from "jwt-decode";
import setAuthToken from "./components/utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { clearCurrentProfile } from "./actions/profileActions";

import Article from "./components/Article";

import Atsauksmes from "./components/articles/Atsauksmes";
import About from "./components/articles/About";
import Trenini from "./components/articles/Trenini";
import "./App.css";

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Clear current Profile
    store.dispatch(clearCurrentProfile());
    // Redirect to login
    window.location.href = "/login";
  }
}

class App extends Component {
  componentDidMount() {
    document.title = "Sporto Vesels - Dzīvo Labāk";
  }
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Layout>
            <Route exact path="/" component={Home} />
            <Route path="/Konsultacijas" component={Konsultacijas} />
            <Route path="/Monitors" component={Monitors} />
            <Route path="/Monitors" component={Monitors} />
            <Route path="/Atsauksmes" component={Atsauksmes} />

            <Route path="/About" component={About} />
            <Route path="/Trenini" component={Trenini} />
            <Route path="/api/posts/:id" component={Article} />
          </Layout>
        </Router>
      </Provider>
    );
  }
}

export default App;
