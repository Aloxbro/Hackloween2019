import React from 'react';
import "./LandingPage.css";

class LandingPage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            
        }
    }

    render(){
        return (
            <div className="page">
                <div className="buttonContainer">
                    <div className="item">
                        <span>
                        <button onClick={""}>
                        Trick
                        </button>
                        </span>
                    </div>

                    <div className="item">
                        <span>
                        <button onClick={""}>
                        Treat
                        </button>
                        </span>
                    </div>

                </div>
            </div>
        )
        
    }
}

export default LandingPage;
