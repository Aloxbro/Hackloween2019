import React from 'react';
import Home from './Home';
import GlitchEffect from "react-glitch-effect";

function TryMe () {
    return (
        <GlitchEffect>
            <Home />
        </GlitchEffect>
    )
}

export default TryMe;
