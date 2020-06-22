import React from 'react';

import Currents from "./playback/Currents.js"
import CurrentRaw from "./playback/CurrentRaw.js"

import "./css/Playback.css"
import "../App.css"

function PlayBack() {
    
    const Currt = CurrentRaw.map(currentData => <Currents 
		key={currentData.id} 
		pb={currentData.pb}
		artist={currentData.artist}
		title={currentData.title}
		genre={currentData.genre}
		date={currentData.date}
		 />)
    console.log(Currt.pb)
  return (

    <div className="playback">            
      {Currt} 
    </div>
  );
}

export default PlayBack;
