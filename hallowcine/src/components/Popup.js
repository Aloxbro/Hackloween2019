import React from 'react'
import './Popup.css';



class Popup extends React.Component {
  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
  
        <button onClick={this.props.closePopup}>CLOSE ME
          <iframe src="https://giphy.com/embed/xT9KVulIY1nilRb9Di" width="480" height="260" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/filmeditor-horror-evil-dead-xT9KVulIY1nilRb9Di"></a></p>
          </button>
        </div>
      </div>
    );
  }
}

export default Popup 