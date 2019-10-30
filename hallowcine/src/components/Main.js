import React from 'react';
import 
{ Switch,
Route  }
from 'react-router-dom';
import LandingPage from './LandingPage';
import OurSelection from './OurSelection';
import TryMe from './TryMe';

function Main() {
    return (
        <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/our-selection" component={OurSelection} />
            <Route exact path="/try-me" component={TryMe} />
        </Switch>
    )
}

export default Main;