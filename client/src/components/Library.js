import React, { Component } from "react"
import Tracks from "./discover/Tracks.js"

import "./css/Discover.css"
import "./css/Tracks.css"

class Library extends Component {
  constructor(props) {
			super(props)
			this.state = {
				length: 0,
				web3: this.props.web3,
				accounts: this.props.accounts,
				contract: this.props.contract,
				count: [],
        count1:[0,1,2],
				artist: '',
				art: '',
				title: '',
				genre: '',
				date: ''
			}
  }
  componentDidMount = async () => {
      const {accounts, contract} = this.state
    	this.setState({length: await contract.methods.getLength().call({ from: this.props.address })})
      for (var i = 0; i < this.state.length; i++) {
          const accountNum = await contract.methods.getArtist(i).call({ from: this.props.address })
          if(accountNum == this.props.address){
              this.state.count.push(Number(i))
          }
      }
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
          <h1>Library</h1>
          {ListItems}
        </div>
      </div>
  )
}
}
export default Library
