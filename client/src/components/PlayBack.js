import AudioPlayer from 'react-h5-audio-player';
import React, { Component } from "react"

import 'react-h5-audio-player/lib/styles.css';
import "./css/Playback.css"
import "../App.css"

class PlayBack extends Component {

    render() {
      return (
        <div className="playback">            
		  	  <div className="playback2">
		  	   <div className="songInfo">
		  		    <div className="artista">
		  		  	  <h1>{this.props.artistFromApp}</h1>
		  		  	</div>
		  	  	  <div className="titlea">
		  	  		  <h1>{this.props.titleFromApp}</h1>
		  	  	  </div>
		  	  	</div>
		    	  <div className="audioDiv">
             <AudioPlayer className="audioPlayer"
             progressUpdateInterval={50} 
             src={this.props.musicFromApp}
             layout="stacked-reverse"
             />
            </div>
		      </div>    
        </div>
      );
   }
}

export default PlayBack;
