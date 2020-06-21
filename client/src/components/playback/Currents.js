import React, { Component } from "react"

import { GrCirclePlay } from 'react-icons/gr'
import { BsVolumeDownFill } from 'react-icons/bs'
import { MdSkipNext } from 'react-icons/md'
import { MdSkipPrevious } from 'react-icons/md'
import { TiArrowShuffle } from 'react-icons/ti'
import { FiRepeat } from 'react-icons/fi'
import { AiOutlineHeart } from 'react-icons/ai'

import "../css/AlbumArt.css"
import "../css/Playback.css"

class Currents extends Component {
	render() {
		return(
				<div className="box">
					<div className="play">
						<GrCirclePlay />
					</div>
					<div className="volume">
						<BsVolumeDownFill />
					</div>
					<div className="next">
						<MdSkipNext />
					</div>
					<div className="prev">
						<MdSkipPrevious />
					</div>
					<div className="shuffle">
						<TiArrowShuffle />
					</div>
					<div className="repeat">
						<FiRepeat />
					</div>
					<div className="heart">
						<AiOutlineHeart />
					</div>
					<div className="artista">{this.props.artist}</div>
					<div className="pbar">{this.props.pb}</div>
					<div className="titlea">{this.props.title}</div>
					<div className="datea">{this.props.date}</div>
				</div>
		)
	}
}

export default Currents