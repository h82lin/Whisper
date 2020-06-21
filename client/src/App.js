import React, { Component } from "react"
import UploadMusicContract from "./contracts/UploadMusic.json"
import getWeb3 from "./getWeb3"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Logo from "./components/Logo.js"
import Search from "./components/Search.js"

import Navbar from "./components/Navbar.js"

import AlbumArt from "./components/AlbumArt.js"
import PlayBack from "./components/PlayBack.js"
import Recommended from "./components/Recommended.js"
import Page2 from "./components/Page2.js"
import Discover from "./components/Discover.js"
import Trending from "./components/Trending.js"
import Following from "./components/Following.js"
import Library from "./components/Library.js"
import Uploads from "./components/Uploads.js"
import Upload from "./components/Upload.js"

import "./App.css";

class App extends Component {
  state = { web3: null, accounts: null, contract: null };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = UploadMusicContract.networks[networkId];
      const instance = new web3.eth.Contract(
        UploadMusicContract.abi,
        deployedNetwork && deployedNetwork.address,
      );

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts, contract: instance }, this.runExample);
    } catch (error) {
      // Catch any errors for any of the above operations.
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
          <Search />
          <Navbar />
          <AlbumArt />
          <PlayBack />
          <Recommended />
          <Switch>
            <Route path="/" exact component={Discover} />
            <Route path="/Page2" component={Page2} />
            <Route path="/Trending" component={Trending} />
            <Route path="/Following" component={Following} />
            <Route path="/Library" component={Library} />
            <Route path="/Uploads" exact component={Uploads} />
            <Route path="/Uploads/Upload" render={(routeProps) => (<Upload {...routeProps} web3={this.state.web3} accounts={this.state.accounts} contract={this.state.contract} />)}/> />
          </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
