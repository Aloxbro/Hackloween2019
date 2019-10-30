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
import './components/LandingPage';
import './components/OurSelection';
import './components/TryMe';
import GlitchEffect from 'react-glitch-effect';

function App() {
  return (
    <Router>
      <div className="Main-div">
        <Layout>
          <GlitchEffect onHover={true}>
            <Header className="header-color" title="Hallowcine" scroll>
            <Navigation>
              <Link to="/">Home</Link>
              <Link to="/our-selection">Our Selection</Link>
              <Link to="/try-me">Try Me</Link>
            </Navigation>
            </Header>
          </GlitchEffect>
          <Drawer title="Hallowcine" >
            <Navigation>
            <Link to="/">Home</Link>
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
