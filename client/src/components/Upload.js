import React, { Component } from "react"
import { storage } from '../firebase'

import "./css/Discover.css"
import "./css/Tracks.css"
import "./css/Uploads.css"

class Upload extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            artist: '',
            genre: '',
            date: '',
            musicURL:'',
            albumArtURL:'',
            musicFile: null,
            albumArt: null,
            web3: this.props.web3,
            accounts: this.props.accounts,
            contract: this.props.contract
        }

        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleArtistChange = this.handleArtistChange.bind(this);
        this.handleGenreChange = this.handleGenreChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleMusicFileChange = this.handleMusicFileChange.bind(this);
        this.handleAlbumArtChange = this.handleAlbumArtChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSubmit2 = this.handleSubmit2.bind(this);
        this.sendToBlockchain = this.sendToBlockchain.bind(this);
    }


    handleTitleChange = event => {
        this.setState({
        title: event.target.value
        })
    }
    handleArtistChange = event => {
        this.setState({
            artist: event.target.value
        })
    }

    handleGenreChange = event => {
        this.setState({
            genre: event.target.value
        })
    }

    handleDateChange = event => {
        this.setState({
            date: event.target.value
        })
    }

    handleMusicFileChange = event => {
        this.setState({
            musicFile: event.target.files[0]
        })
    }

    handleAlbumArtChange = event => {
        this.setState({
            albumArt: event.target.files[0]
        })
    }

    handleSubmit = event => {
        const uploadMusicFile = storage.ref(`${this.state.musicFile.name}/${this.state.musicFile.name}`).put(this.state.musicFile);
        uploadMusicFile.on(
            "state_changed",
            snapshot => {},
            error => {
                console.log(error);
            },
             () => {
                storage
                    .ref(this.state.musicFile.name)
                    .child(this.state.musicFile.name)
                    .getDownloadURL()
                    .then(url => {
                        this.setState({musicURL: url},
                        () => this.handleSubmit2());
                    });
            });
        event.preventDefault()
    }

    handleSubmit2 = event => {
        const uploadAlbumArt = storage.ref(`${this.state.musicFile.name}/${this.state.albumArt.name}`).put(this.state.albumArt);
        uploadAlbumArt.on(
            "state_changed",
            snapshot => {},
            error => {
                console.log(error);
            },
            () => {
                storage
                    .ref(this.state.musicFile.name)
                    .child(this.state.albumArt.name)
                    .getDownloadURL()
                    .then(url => {
                        this.setState({albumArtURL: url},
                        () => this.sendToBlockchain());
                    });
            });

        alert("File Uploaded")
    }

    sendToBlockchain = async () => {
        const { accounts, contract } = this.state;
        await contract.methods.uploadMusic(this.state.title, this.state.artist, this.state.genre, this.state.date, this.state.musicURL, this.state.albumArtURL).send({ from: accounts[0] });
    }

    render() {
        const { title, artist, genre, date} = this.state
        return(
			<div className="mid">
                <form onSubmit={this.handleSubmit} className="uploadForm">
                    <div/>
                    <div>
                        <label>Title: </label>
                        <input
                        type='text'
                        value={title}
                        onChange={this.handleTitleChange}
                        placeholder="d( o_o )b"
                        />
                    </div>
                    <div>
                        <label>Artist: </label>
                        <input
                        type='text'
                        value={artist}
                        onChange={this.handleArtistChange}
                        placeholder="Whisper"
                        />
                    </div>
                    <div>
                        <label>Publish Date: </label>
                        <input
                        type='text'
                        value={date}
                        onChange={this.handleDateChange}
                        placeholder="00-00-00"
                        />
                    </div>
                    <div>
                        <label>Genre: </label>
                        <select value={genre} onChange={this.handleGenreChange} placeholder="Select Genre from Dropdown">
                            <option value="select">Select</option>
                            <option value="pop">Pop</option>
                            <option value="classic">Classic</option>
                            <option value="house">House</option>
                            <option value="trap">Trap</option>
                        </select>
                    </div>
                    <div>
                        <label>Music File: </label>
                        <input
                        type='file'
                        onChange={this.handleMusicFileChange}
                        />
                    </div>
                    <div>
                        <label>Album Art: </label>
                        <input
                        type='file'
                        onChange={this.handleAlbumArtChange}
                        />
                    </div>
                    <button type="submit" className="submit" >Submit</button>
                </form>
            </div>
		)
	}
}

export default Upload
