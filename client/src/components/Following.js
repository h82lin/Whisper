import React, { Component } from "react"

import Tracks from "./discover/Tracks.js"
import trackRaw from "./discover/FollowingRaw.js"
import "./css/Discover.css"
import "./css/Tracks.css"

class Following extends Component {

	render() {

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
				<h1 className="catagory">Following</h1>
				{TrackLi}
			</div>
		)
	}
}

export default Following