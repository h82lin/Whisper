import React from "react"

import Tracks from "./discover/Tracks.js"
import trackRaw from "./discover/TrackRaw.js"

import "./css/Discover.css"
import "./css/Tracks.css"

function Discover () {

	const TrackLi = trackRaw.map(trackData => <Tracks 
		key={trackData.id} 
		ta={trackData.ta} 
		pb={trackData.pb}
		artist={trackData.artist}
		art={trackData.art}
		title={trackData.title}
		genre={trackData.genre}
		date={trackData.date}
		 />)

	return(
		<div className="discover">
			<h1 className="catagory">Discover</h1>
			{TrackLi}
		</div>
	)
}

export default Discover