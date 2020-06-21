import React, { Component } from "react"

import "../css/Tracks.css"

class Tracks extends Component {
	render() {
		return(
				<div className="tracks">
					<div className="ta">
						<img src="https://img.icons8.com/nolan/96/musical.png" alt="music" />
					</div>
					<div className="progBar">{this.props.pb}</div>
					<div className="artist">{this.props.artist}</div>
					<img className="art" src="{this.props.art}" alt="Album Art" />
					<div className="title">{this.props.title}</div>
					<div className="genre">{this.props.genre}</div>
					<div className="date">{this.props.date}</div>
				</div>
		)
	}
}

export default Tracks