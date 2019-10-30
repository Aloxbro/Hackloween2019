import React from 'react';
import 
{ Switch,
Route  }
from 'react-router-dom';
import LandingPage from './LandingPage';
import OurSelection from './OurSelection';
import TryMe from './TryMe';
import Home from './Home';

function Main() {
    return (
        <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/home" component={Home} />
            <Route path="/our-selection" component={OurSelection} />
            <Route path="/try-me" component={TryMe} />
        </Switch>
    )
}

export default Main;
