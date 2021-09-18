import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import Home from "./components/home/home";
import Login from "./components/home/login";
import Activate from "./components/home/activate";
import Adminpannel from "./components/adminpannel/adminpannel";


function App(){

  const user = localStorage.getItem('profile');
  
  return(
    <Router>
    <Switch>
      <Route path="/" exact  component = {Home} /> 
      <Route path="/login" component={user ? Adminpannel : Login}/>
      <Route path="/auth/activate/:token"  component={Activate}/>
      <Route path="/adminpannel" component={user ? Adminpannel : Login}/>
    </Switch>
  </Router>
  )
}

export default App;