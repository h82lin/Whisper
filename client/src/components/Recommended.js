import React, { Component } from "react"

import Recons from "./recommended/Recons.js"
import ReconRaw from "./recommended/ReconRaw.js"

import "../App.css"
import "./css/Recommended.css"
import "./css/Recons.css"

class Recommended extends Component { 
    constructor(props) {
        super(props)
        this.state = {
            thisTitle: 'Title',
            thisArtist: 'Artist',
            thisArt: 'Art',
            thisMusic: 'Msuic',
        }
    }

    callbackTitle = (dataFromChild) => {
        this.setState({ thisTitle: dataFromChild }); 
        this.props.allTitleFromParent(dataFromChild);
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
   
    render() {
        const ReconLi = ReconRaw.map(ReconData => <Recons 
            key={ReconData.id}  
            artist={ReconData.artist}
            art={ReconData.art}
            title={ReconData.title}
            genre={ReconData.genre}
            date={ReconData.date}
            pb={ReconData.pb}
            callTitleFromParent={this.callbackTitle}
            callArtistFromParent={this.callbackArtist}
            callArtFromParent={this.callbackArt}
            callMusicFromParent={this.callbackMusic}
             />)
             
		return(
			<div className="recommended">
                <h1>Popular Tracks</h1>
				{ReconLi}
			</div>
		)
	}
}

export default Recommended