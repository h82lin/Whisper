import React, { Component } from "react"
import { storage } from "../../firebase"

import "../css/Recons.css"

class Recons extends Component {
	constructor() {
		super();
		this.state = {
			albumA: '',
			musicURL: ''
		}
	  }

	componentDidMount() {
		this.getAlbumAUrl().then(result => this.setState({
			albumA: result
		}))
		this.getMusicUrl().then(result => this.setState({
			musicURL: result
		}))
	}

	getAlbumAUrl() {
		const gsReference = storage.refFromURL(this.props.art)
		const url = gsReference.getDownloadURL()
		return url
	}
	
	getMusicUrl() {
		const gsReference = storage.refFromURL(this.props.pb)
		const url = gsReference.getDownloadURL()
		return url
	}

	imageClick = () => {
		this.props.callTitleFromParent(this.props.title);
		this.props.callArtistFromParent(this.props.artist);
		this.props.callMusicFromParent(this.state.musicURL);
		this.props.callArtFromParent(this.state.albumA);
	}

	render() {
		return(
				<div className="recons">
					<div className="artistr">
						<h1>{this.props.artist}</h1>
					</div>
					<div className="artr">
						<img  src={this.state.albumA} alt="Album Art" onClick={() => this.imageClick()} />
					</div>
					<div className="titler">
						<h1>{this.props.title}</h1>
					</div>
				</div>
		)
	}
}

export default Recons