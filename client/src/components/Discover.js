import React, { Component } from "react"
import Tracks from "./discover/Tracks.js"

import "./css/Discover.css"
import "./css/Tracks.css"

class Discover extends Component {
	constructor(props) {
			super(props)
			this.state = {
				length: 0,
				//title: '',
				//artist: '',
				//genre: '',
				//date: '',
				//musicURL:'',
				//albumArtURL:'',
				web3: this.props.web3,
				accounts: this.props.accounts,
				contract: this.props.contract,
				count: [],
				thisTitle: '',
				thisArtist: '',
				thisArt: '',
				thisMusic: '',
				thisDate: '',
				thisGenre: '',
			}
		}

	componentDidMount = async () => {
		const {accounts, contract} = this.state
		this.setState({length: await contract.methods.getLength().call({ from: accounts[0] })})
		var lengthInt = parseInt(this.state.length)
		this.setState({count: Array.from(Array(lengthInt).keys())})
		//this.setState({title: await contract.methods.getTitle(0).call({ from: accounts[0] })})
		//this.setState({artist: await contract.methods.getArtist(0).call({ from: accounts[0] })})
		//this.setState({genre: await contract.methods.getGenre(0).call({ from: accounts[0] })})
		//this.setState({date: await contract.methods.getPublishDate(0).call({ from: accounts[0] })})
		//this.setState({musicURL: await contract.methods.getMusicURL(0).call({ from: accounts[0] })})
		//this.setState({albumArtURL: await contract.methods.getAlbumArt(0).call({ from: accounts[0] })})
		}
	
	callbackTitle = (dataFromChild) => {
		this.setState({ thisTitle: dataFromChild }); 
		this.props.callTitleFromParent(dataFromChild);
	  }
	callbackArtist = (dataFromChild) => {
		this.setState({ thisArtist: dataFromChild });
		this.props.callArtistFromParent(dataFromChild);
	}
	callbackArt = (dataFromChild) => {
		this.setState({ thisArt: dataFromChild });
		this.props.callArtFromParent(dataFromChild);
	}
	callbackMusic = (dataFromChild) => {
		this.setState({ thisMusic: dataFromChild });
		this.props.callMusicFromParent(dataFromChild);
	}
	callbackGenre = (dataFromChild) => {
		this.setState({ thisGenre: dataFromChild });
		this.props.callGenreFromParent(dataFromChild);
	}
	callbackDate = (dataFromChild) => {
		this.setState({ thisDate: dataFromChild });
		this.props.callDateFromParent(dataFromChild);
	}
	render() {
		const ListItems = this.state.count.map((number, index) =>
			<Tracks 
			key={index}
			web3={this.state.web3}
			accounts={this.state.accounts}
			contract={this.state.contract}
			realKey={index}
			callTitleFromParent={this.callbackTitle}
            callArtistFromParent={this.callbackArtist}
            callArtFromParent={this.callbackArt}
			callMusicFromParent={this.callbackMusic} 
			callGenreFromParent={this.callbackGenre}
			callDateFromParent={this.callbackDate} 
			/>	
		);
		return(
			<div className = "mid">
				<div className="discover">
					<h1>Discover</h1>
					{ListItems}
				</div>	
			</div>
	)
}
}
export default Discover
