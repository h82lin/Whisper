import React, { Component } from "react"
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { storage } from "../../firebase"

import "../css/AlbumArt.css"
import "../css/Playback.css"

class Currents extends Component {
	constructor() {
		super();
		this.state = {
			song: ''
		}
	  }

	componentDidMount() {
		this.getUrl().then(result => this.setState({
			song: result
		}))
	}

	getUrl() {
		const gsReference = storage.refFromURL(this.props.pb)
		const url = gsReference.getDownloadURL()
		return url
	}
	render() {
		return(
			<div className="playback2">
				<div className="songInfo">
					<div className="artista">
						<h1>{this.props.artist}</h1>
					</div>
					<div className="titlea">
						<h1>{this.props.title}</h1>
					</div>
				</div>
				<div className="audioDiv">
            		<AudioPlayer className="audioPlayer"
            		progressUpdateInterval={50} 
           			src={this.state.song}
           			layout="stacked-reverse"/>
       			</div>
			</div>
		)
	}
}

export default Currents