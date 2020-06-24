import React, { Component } from "react"
import UploadMusicContract from "./contracts/UploadMusic.json"
import getWeb3 from "./getWeb3"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Logo from "./components/Logo.js"
import Navbar from "./components/Navbar.js"
import PlayBack from "./components/PlayBack.js"
import Recommended from "./components/Recommended.js"
import Page2 from "./components/Page2.js"
import Discover from "./components/Discover.js"
import Trending from "./components/Trending.js"
import Uploads from "./components/Uploads.js"
import Upload from "./components/Upload.js"
import AlbumArtHolder from "./components/albumArtplaceholder.jpg"
import SearchResult from './components/SearchResult.js'
import "./App.css";
import "./components/css/AlbumArt.css"
import "./components/css/Search.css"

class App extends Component {
  constructor(props) {
		super(props);
		this.state = {
      searchKey: '',
      thisTitle: 'd( o_o )b',
      thisArtist: 'Whisper',
      thisGenre: 'Sound',
      thisArt: AlbumArtHolder,
      thisMusic: '',
      thisDate: '2020-06-24',
		}
  }
  
  callbackTitle = (dataFromChild) => {
    this.setState({ thisTitle: dataFromChild });
  }
  allbackTitle = (dataFromChild) => {
    this.setState({ thisTitle: dataFromChild });
  }
  callbackArtist = (dataFromChild) => {
    this.setState({ thisArtist: dataFromChild });
  }
  callbackGenre = (dataFromChild) => {
    this.setState({ thisGenre: dataFromChild });
  }
  callbackArt = (dataFromChild) => {
    this.setState({ thisArt: dataFromChild });
  }
  callbackMusic = (dataFromChild) => {
    this.setState({ thisMusic: dataFromChild });
  }
  callbackDate = (dataFromChild) => {
    this.setState({ thisDate: dataFromChild });
  }
  updateSearch(event) {
    this.setState({searchKey: event.target.value})
  }
  
  //web3 stuff
  state = { web3: null, accounts: null, contract: null };
  componentDidMount = async () => {
    try {
      const web3 = await getWeb3();
      const accounts = await web3.eth.getAccounts();
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = UploadMusicContract.networks[networkId];
      const instance = new web3.eth.Contract(
        UploadMusicContract.abi,
        deployedNetwork && deployedNetwork.address,
      );
      this.setState({ web3, accounts, contract: instance }, this.runExample);
    } catch (error) {
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }

    return (
    <Router>
      <div className="app">
          <Logo />
          <div className="search">
				    <form>
					    <input 
					    type="text" 
					    placeholder="Search" 
					    value={this.state.search}
					    onChange={this.updateSearch.bind(this)}
					    />	
				    </form>
			    </div>
          <Navbar />
          <div className="albumArt">
                <img src={this.state.thisArt} alt="Album Art" />
          </div>
          <PlayBack
          artistFromApp={this.state.thisArtist}
          titleFromApp={this.state.thisTitle}
          musicFromApp={this.state.thisMusic}
          />
          <Recommended 
          callTitleFromParent={this.callbackTitle}
          callArtistFromParent={this.callbackArtist}
          callArtFromParent={this.callbackArt}
          callMusicFromParent={this.callbackMusic}
          />
          <Switch>
            <Route path="/" exact render={(routeProps) => (<Discover
            callTitleFromParent={this.callbackTitle}
            callArtistFromParent={this.callbackArtist}
            callGenreFromParent={this.callbackGenre}
            callArtFromParent={this.callbackArt}
            callMusicFromParent={this.callbackMusic}
            callDateFromParent={this.callbackDate}
            {...routeProps} web3={this.state.web3} accounts={this.state.accounts} contract={this.state.contract} />)}
            />
            <Route path="/Page2" component={Page2} />
            <Route path="/SearchResult" render={(routeProps) => (<SearchResult
            callTitleFromParent={this.callbackTitle}
            callArtistFromParent={this.callbackArtist}
            callGenreFromParent={this.callbackGenre}
            callArtFromParent={this.callbackArt}
            callMusicFromParent={this.callbackMusic}
            callDateFromParent={this.callbackDate}
            {...routeProps} web3={this.state.web3} accounts={this.state.accounts} contract={this.state.contract} />)}
            />
            <Route path="/Trending" component={Trending} />
            <Route path="/Following" component={Trending} />
            <Route path="/Library" component={Trending} />
            <Route path="/History" component={Trending} />
            <Route path="/Listen Later" component={Trending} />
            <Route path="/Favourites" component={Trending} />
            <Route path="/Uploads" exact component={Uploads} />
            <Route path="/Uploads/Upload" render={(routeProps) => (<Upload {...routeProps} web3={this.state.web3} accounts={this.state.accounts} contract={this.state.contract} />)}/>
          </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
