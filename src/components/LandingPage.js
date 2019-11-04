import React from 'react'
import "./LandingPage.css"
import Popup from './Popup'
import './Home'
import {Link} from "react-router-dom"

class LandingPage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            showPopup: false
        }
    }

    togglePopup() {
        this.setState({
          showPopup: !this.state.showPopup
        })
    }    
    render(){
        return (
            <div className="page">
                <div className="buttonContainer">
                    <div className="item">
                        <span>
                        <button onClick={this.togglePopup.bind(this)}>Trick</button>
                      
                        {this.state.showPopup ? 
                        <Popup
                            text='Close Me'
                            closePopup={this.togglePopup.bind(this)}
                        />
                        : null
        }
                        </span>
                    </div>

                    <div className="item">
                        <span>
                            <Link to="/home">
                            <button>
                            Treat
                            </button>
                            </Link>
                        </span>
                    </div>

                </div>
            </div>
        )
        
    }
}

export default LandingPage;
