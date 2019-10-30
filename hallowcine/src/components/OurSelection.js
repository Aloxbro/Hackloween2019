import React from 'react';
import {Grid,
Cell}
from 'react-mdl';

function OurSelection () {
    return (
        <Grid className="grid-one">
            <Cell col={6}>
                <h1>Hello</h1>
            </Cell>
            <Cell col={6}>
                <h1>World !</h1>
            </Cell>
        </Grid>
    )
}

export default OurSelection;