import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Konsultacijas from "./components/Konsultacijas";
import Monitors from "./components/Monitors";
import Home from "./components/Home";
import Article1 from "./components/articles/Svars";
import Article2 from "./components/articles/Atsauksmes";
import Article3 from "./components/articles/Viri";
import Article4 from "./components/articles/Prieks";
import Article5 from "./components/articles/Article5";
import Article6 from "./components/articles/Article6";
import Article7 from "./components/articles/Article7";
import Forma from "./components/articles/Forma";
import About from "./components/articles/About";
import Trenini from "./components/articles/Trenini";
import "./App.css";

class App extends Component {
  componentDidMount() {
    document.title = "Sporto Vesels - Dzīvo Labāk";
  }
  render() {
    return (
      <Router>
        <Layout>
          <Route exact path="/" component={Home} />
          <Route path="/Konsultacijas" component={Konsultacijas} />
          <Route path="/Monitors" component={Monitors} />
          <Route path="/Article1" component={Article1} />
          <Route path="/Article2" component={Article2} />
          <Route path="/Article3" component={Article3} />
          <Route path="/Article4" component={Article4} />
          <Route path="/Article5" component={Article5} />
          <Route path="/Article6" component={Article6} />
          <Route path="/Article7" component={Article7} />
          <Route path="/Forma" component={Forma} />
          <Route path="/About" component={About} />
          <Route path="/Trenini" component={Trenini} />
        </Layout>
      </Router>
    );
  }
}

export default App;
