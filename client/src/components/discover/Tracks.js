import React, { Component } from "react"
import play from "../play.png"
import progBar from "../waveform.jpg"

import "../css/Tracks.css"

class Tracks extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			artist: '',
			genre: '',
			date: '',
			musicURL:'',
			albumArtURL:'',
			web3: null,
			accounts: null,
			contract: null,
		}
	}

	componentDidMount = async () => {
		this.setState({web3: await this.props.web3})
		this.setState({accounts: await this.props.accounts})
		this.setState({contract: await this.props.contract})
		const {accounts, contract} = this.state
		this.setState({title: await contract.methods.getTitle(this.props.realKey).call({ from: accounts[0] })})
		this.setState({artist: await contract.methods.getArtist(this.props.realKey).call({ from: accounts[0] })})
		this.setState({genre: await contract.methods.getGenre(this.props.realKey).call({ from: accounts[0] })})
		this.setState({date: await contract.methods.getPublishDate(this.props.realKey).call({ from: accounts[0] })})
		this.setState({musicURL: await contract.methods.getMusicURL(this.props.realKey).call({ from: accounts[0] })})
		this.setState({albumArtURL: await contract.methods.getAlbumArt(this.props.realKey).call({ from: accounts[0] })})
	}

	imageClick = () => {
		this.props.callTitleFromParent(this.state.title);
		this.props.callArtistFromParent(this.state.artist);
		this.props.callGenreFromParent(this.state.genre);
		this.props.callDateFromParent(this.state.date);
		this.props.callMusicFromParent(this.state.musicURL);
		this.props.callArtFromParent(this.state.albumArtURL);
	}

	render() {
		return(
				<div className="tracks">
					<div className="ta">
						<img src={play} alt="music" onClick={() => this.imageClick()} />
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
		)
	}
}

export default Tracks
