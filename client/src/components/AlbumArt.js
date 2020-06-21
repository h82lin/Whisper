import React from "react"

import CurrentRaw from "./playback/CurrentRaw.js"
import CurrentArt from "./playback/CurrentArt.js"

import "./css/AlbumArt.css"


function AlbumArt () {

    const Arted = CurrentRaw.map((item) => <CurrentArt
    key={item.id}
    art={item.art} 
    />);
        
    return(
        <div className="albumArt">
            {Arted}
        </div>
		)
}


export default AlbumArt