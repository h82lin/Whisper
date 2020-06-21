import React, { Component } from "react"

import Tracks from "./discover/Tracks.js"
import trendingRaw from "./discover/TrendingRaw.js"
import "./css/Discover.css"
import "./css/Tracks.css"

class Trending extends Component {

	render() {

		const TrackLi = trendingRaw.map(trackData => <Tracks 
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
				<h1 className="catagory">Trending</h1>
				{TrackLi}
			</div>
		)
	}
}

export default Trending