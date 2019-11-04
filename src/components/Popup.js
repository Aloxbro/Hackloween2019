import React from 'react'
import './Popup.css'



class Popup extends React.Component {
  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
  
        <button onClick={this.props.closePopup}>CLOSE ME
          <embed src="https://i.makeagif.com/media/10-26-2014/0sL3X5.gif" width="1680" height="860" title=""/>
          </button>
        </div>
      </div>
    )
  }
}

export default Popup 