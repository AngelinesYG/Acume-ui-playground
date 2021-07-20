import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import {Route, Switch, Link} from 'react-router-dom'
import {Redirect} from 'react-router'
import './App.css';
import ScrollUpButton from 'react-scroll-up-button'
import Nav from './components/Nav'
import SignUp from './components/SignUp'
import Table from './components/Table'

class App extends Component {

   render(){
      return(
         <div>
         <Table/>
         </div>
      )
   }

}

export default App
