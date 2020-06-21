import React, { Component } from "react"

import "../css/AlbumArt.css"

class CurrentArt extends Component {
    render() {
        return (
            <img src={this.props.art} alt="Album Art" className="albumArt" />
        )     
    }  
}

export default CurrentArt