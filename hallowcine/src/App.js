import React from 'react';
import './App.css';
import 
{ BrowserRouter as Router,
Link}
from "react-router-dom"
import 
{ Layout, 
  Header, 
  Navigation, 
  Drawer, 
  Content
} from "react-mdl";
import Main from './components/Main';
import './components/Home';
import './components/Home';
import './components/OurSelection';
import './components/TryMe';
import GlitchEffect from 'react-glitch-effect';

function App() {
  return (
    <Router>
      <div className="Main-div">
        <Layout>
            <Header className="header-color" title="Hallowcine" scroll>
            <Navigation>
              <Link to="/home">Home</Link>
              <Link to="/our-selection">Our Selection</Link>
              <Link to="/try-me">Try Me</Link>
            </Navigation>
            </Header>
          <Drawer title="Hallowcine">
            <Navigation>
              <Link to="/home">Home</Link>
              <Link to="/our-selection">Our Selection</Link>
              <Link to="/try-me">Try Me</Link>
            </Navigation>
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
