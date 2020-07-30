import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/pages/home";
import Navbar from './components/layout/navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddUser from './components/users/adduser';
import EditUser from './components/users/EditUser';
import User from './components/users/users';


function App(props) {
  return (
    <Router>
    <div className="App">
    <Navbar />

    <switch>
      <Route exact path="/" component={Home}/>
      
      <Route exact path="/users/adduser" component={AddUser} />
      <Route exact path="/users/edit/:id" component={EditUser} />
      <Route exact path="/users/:id" component={User} />

    </switch>
      
    </div>
    </Router>
  );
}

export default App;
