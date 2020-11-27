import React, { Component } from 'react';
import './App.css';

import Token from "./components/token"
import Login from "./components/login"

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        <Login/>
{/*  
         <Token/> */}
         
      </div>
     );
  }
}
 
export default App;


