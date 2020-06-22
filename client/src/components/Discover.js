import React, { Component } from "react"
import Tracks from "./discover/Tracks.js"
import trackRaw from "./discover/TrackRaw.js"
import play from "./play.png"
import progBar from "./soundwave.png"

import "./css/Discover.css"
import "./css/Tracks.css"

class Discover extends Component {
	constructor(props) {
			super(props)
			this.state = {
					title: '',
					artist: '',
					genre: '',
					date: '',
					musicURL:'',
					albumArtURL:'',
					web3: this.props.web3,
					accounts: this.props.accounts,
					contract: this.props.contract
			}
		}

			  componentDidMount = async () => {
					const {accounts, contract} = this.state
				  this.setState({title: await contract.methods.getTitle(10).call({ from: accounts[0] })})
					this.setState({artist: await contract.methods.getArtist(10).call({ from: accounts[0] })})
					this.setState({genre: await contract.methods.getGenre(10).call({ from: accounts[0] })})
					this.setState({date: await contract.methods.getPublishDate(10).call({ from: accounts[0] })})
					this.setState({musicURL: await contract.methods.getMusicURL(10).call({ from: accounts[0] })})
          this.setState({albumArtURL: await contract.methods.getAlbumArt(10).call({ from: accounts[0] })})

				}

/*
	const TrackLi = trackRaw.map(trackData => <Tracks
		key={trackData.id}
		ta={trackData.ta}
		pb={trackData.pb}
		artist={trackData.artist}
		Al={trackData.art}
		title={trackData.title}
		genre={trackData.genre}
		date={trackData.date}
		 />)
*/render() {
	return(
		<div className = "mid">
			<div className="discover">
				<h1>Discover</h1>
				<div className="tracks">
					<div className="ta">
						<img src={play} alt="music" />
					</div>
					<div className="progBar">
						<img src={progBar} alt="." />
					</div>
					<div className="artist">
						<h1>{this.state.artist}</h1>
					</div>
					<div className="art">
						<img src={this.state.albumArtURL} alt="." />
					</div>
					<div className="title">
						<h1>{this.state.title}</h1>
					</div>
					<div className="genre">
						<h1>{this.state.genre}</h1>
					</div>
					<div className="date">
						<h1>{this.state.date}</h1>
					</div>
				</div>
			</div>
		</div>
	)
}
}
export default Discover
