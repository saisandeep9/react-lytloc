import React, { Component } from 'react';
import './App.css';
import {
  Route,
  Switch
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Token from "./components/token"
import Login from "./components/login"
import NavBar from "./components/navbar"
import "font-awesome/css/font-awesome.css";
import auth from "./services/authService";
import Logout from "./components/logout"

class App extends Component {
 state = {
    user: {},
  };

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }
 componentDidMount() {


  
 }




  render() { 
       const { user } = this.state;

       console.log(user)
         console.log(localStorage.token)
    return ( 
      <div>
  

           <NavBar user={this.state.user} />
          <ToastContainer />
          <React.Fragment>

           <Switch>
  <Route path="/" exact component={Login} />

               {user &&(
<>
     <Route path="/home" exact component={Token} />
        <Route path="/logout" exact component={Logout} />
        </>
               )}
      
         
        
         
           </Switch>
     
   </React.Fragment>
         
      </div>
     );
  }
}
 
export default App;


