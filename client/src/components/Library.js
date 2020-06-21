import React, { Component } from "react"

import Tracks from "./discover/Tracks.js"
import libRaw from "./discover/LibraryRaw.js"
import "./css/Discover.css"
import "./css/Tracks.css"

class Library extends Component {
    render() {

		const LibraryLi = libRaw.map(trackData => <Tracks 
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
			<h1 className="catagory">Library</h1>
				{LibraryLi}
			</div>
		)
	}
}

export default Library