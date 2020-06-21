import React, { Component } from "react"
import { Link } from 'react-router-dom';

import "./css/Discover.css"
import "./css/Tracks.css"
import "./css/Uploads.css"

class Uploads extends Component {
    render() {
        const linkStyle = {color:"transparent"}
        return(
			<div className="discover">
				<h1>Uploads
                    <Link style={linkStyle} to="/Uploads/Upload">
                        <h2 className="upload">+ Upload</h2>
				    </Link>
                </h1>
			</div>
		)
	}
}

export default Uploads
