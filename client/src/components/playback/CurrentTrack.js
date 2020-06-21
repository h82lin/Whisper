import React, { Component }from "react"

import "../css/CurrentTrack.css"
import currentRaw from "./CurrentRaw.js"
import CopyCat from "./CopyCat.js"

class CurrentTrack extends Component {
	render(){
		const TrackInfo = currentRaw.map(currentData => <CopyCat 
			key={currentData.id} 
			pb={currentData.pb}
			artist={currentData.artist}
			art={currentData.art}
			title={currentData.title}
			 />)
		return(
			<div>
				{TrackInfo}
			</div>
		)
	}
	
}

export default CurrentTrack