import React from 'react';
import './home.css';
import Carousel from "./Carousel"


class Home extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: null
        }
    }

    render(){
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <Carousel />
            </div>
        
        )
    }
}

export default Home;
