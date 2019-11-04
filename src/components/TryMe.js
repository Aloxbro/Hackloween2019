import React from 'react';
import Home from './Home';
import GlitchEffect from "react-glitch-effect";

function TryMe () {
    return (
        <GlitchEffect onHover duration="15s">
            <Home />
        </GlitchEffect>
    )
}

export default TryMe;
