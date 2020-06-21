import React from 'react';

import Currents from "./playback/Currents.js"
import CurrentRaw from "./playback/CurrentRaw.js"

import "./css/Playback.css"
import "../App.css"
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

function PlayBack() {
    
    const Currt = CurrentRaw.map(currentData => <Currents 
		key={currentData.id} 
		pb={currentData.pb}
		artist={currentData.artist}
		title={currentData.title}
		genre={currentData.genre}
		date={currentData.date}
		 />)

  return (
    <div className="playback">   
    <div className="audioDiv">
            <AudioPlayer className="audioPlayer"
            progressUpdateInterval={50} 
            src="https://firebasestorage.googleapis.com/v0/b/group7-df874.appspot.com/o/Acejax%20-%20By%20My%20Side%20(ft.%20Danilyon).mp3%2FAcejax%20-%20By%20My%20Side%20(ft.%20Danilyon).mp3?alt=media&token=3e763743-7283-4e7b-86f0-776043158f0a"
            layout="stacked-reverse"/>
        </div>
        <div className="songInfo">
            <h1 className="title">Song name</h1>
            <h1 className="artist">Artist</h1>
            <h1 className="date">Date</h1>
        </div>
        
    </div>
  );
}

export default PlayBack;
