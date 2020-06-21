import React, { Component } from "react"

import Recons from "./recommended/Recons.js"
import ReconRaw from "./recommended/ReconRaw.js"

import "../App.css"
import "./css/Recommended.css"
import "./css/Recons.css"

class Recommended extends Component { 
	render() {

        const ReconLi = ReconRaw.map(ReconData => <Recons 
            key={ReconData.id}  
            artist={ReconData.artist}
            art={ReconData.art}
            title={ReconData.title}
            genre={ReconData.genre}
            date={ReconData.date}
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