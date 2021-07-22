import Navbar from "./Components/NAVBAR/Navbar"
import LeftColumn from "./Components/LEFT/LeftColumn"
import MiddleColumn from "./Components/MIDDLE/MiddleColumn"
import RightColumn from "./Components/RIGHT/RightColumn";
import "./App.css"



import React, { Component } from 'react';

class App extends Component {


  render() {
    return (
      <div>
          <Navbar/>

          <div className = "down_components">
          
            <MiddleColumn/>
          
   
          </div>

       
      </div>
    );
  }
}

export default App;







