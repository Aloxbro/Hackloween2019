import React from "react";
import "./App.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Main from "./components/Main";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import "./components/TryMe";
import "./components/OurSelection";
import "./components/LandingPage";
import "./components/Home";

function App() {
  return (
    <Router>
        <div style={{ width: "100%", margin: "auto" }}>
          <Layout>
            <Header transparent title="Title" className="header-color" title="Hallowcine"  scroll>
              <Navigation>
                <Link to="/home"> 
                <p className="home-btn">Home</p>
                </Link>
                <Link to="/our-selection">
                <p className="our-selection-btn">Our Selection</p>
                </Link>
                <Link to="/try-me">
                  <p className="try-me-btn">Try Me</p>
                  </Link>
              </Navigation>
            </Header>
            <Drawer>
              <Navigation>
                <Link to="/home">
                  <p className="linkbutton">Home</p>
                  </Link>
                <Link to="/our-selection">
                  <p className="linkbutton">Our Selection</p>
                  </Link>
                <Link to="/try-me">
                  <p className="linkbutton">Try Me</p>
                  </Link>
              </Navigation>
              <img src="https://imgur.com/cmQ5TzQ.png" alt="logo qui dechire" className="logo-muertos"/>  
            </Drawer>
            <Content>
              <div className="page-content" />
              <Main />
            </Content>
          </Layout>
        </div>
    </Router>
  );
}

export default App;
