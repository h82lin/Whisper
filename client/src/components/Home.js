import React from 'react';
import Discover from "./Discover.js"
import Recommended from "./Recommended.js"


function Home() {
    return (
      <div>
        <Recommended />
        <Discover />
      </div>
    );
  }
  
  export default Home;