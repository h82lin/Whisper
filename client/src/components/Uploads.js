import React, { Component } from "react"
import { Link } from 'react-router-dom';

import "./css/Discover.css"
import "./css/Tracks.css"
import "./css/Uploads.css"

class Uploads extends Component {
    render() {
        const linkStyle = {textDecoration:"transparent"}
        return(
			<div className="mid">
				<div className="uploads">
                    <h1>Uploads
                        <Link style={linkStyle} className="upload" to="/Uploads/Upload">
                            <h2>+ Upload</h2>
				        </Link>
                    </h1>
                </div>
			</div>
		)
	}
}

export default Uploads
