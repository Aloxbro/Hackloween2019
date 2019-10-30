import React from 'react';
import MovieCard from "./MovieCard"

class LandingPage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: null
        }
    }

    render(){
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <h1>Hello</h1>
                <MovieCard />



            </div>
        
        )
    }
}

export default LandingPage;