import React, { Component } from "react"
import { storage } from "../../firebase"
import play from "../play.png"
import progBar from "../soundwave.png"

import "../css/Tracks.css"

class Tracks extends Component {
	constructor() {
		super();
		this.state = {
			albumA: ''
		}
	}

	componentDidMount() {
		this.getUrl().then(result => this.setState({
			albumA: result
		}))
	}

	getUrl() {
		const gsReference = storage.refFromURL(this.props.art)
		const url = gsReference.getDownloadURL()
		return url
	}


	render() {
		return(
				<div className="tracks">
					<div className="ta">
						<img src={play} alt="music" />
					</div>
					<div className="progBar">
						<img src={progBar} alt="." />
					</div>
					<div className="artist">
						<h1>{this.props.artist}</h1>
					</div>
					<div className="art">
						<img src={this.state.albumA} alt="." />
					</div>
					<div className="title">
						<h1>{this.props.title}</h1>
					</div>
					<div className="genre">
						<h1>{this.props.genre}</h1>
					</div>
					<div className="date">
						<h1>{this.props.date}</h1>
					</div>
				</div>
		)
	}
}

export default Tracks
