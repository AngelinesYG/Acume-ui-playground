import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import {Route, Switch, Link} from 'react-router-dom'
import {Redirect} from 'react-router'
import './App.css';
import * as ReactBootStrap from 'react-bootstrap'
import ScrollUpButton from 'react-scroll-up-button'
import Nav from './components/Nav'
import SignUp from './components/SignUp'
import Table from './components/Table'

const App = () => {
   const users = [
      {
      first_name: "Sydney",
      last_name: "Cole",
      email: "something@mail.com",
      age: "21",
      },
      {
      first_name: "Junior",
      last_name: "Cole",
      email: "something@mail.com",
      age: "27",
      }
   ]

   const renderUser = (user, index) =>{
      return(
         <tr key={index}>
            <td>{user.first_name}</td>
            <td>{user.last_name}</td>
            <td>{user.email}</td>
            <td>{user.age}</td>
         </tr>
      )
   }

   // render(){
      return(
         <div>
         <ReactBootStrap.Table striped bordered hover size="sm">
           <thead>
             <tr>
               <th>First Name</th>
               <th>Last Name</th>
               <th>Email</th>
               <th>Age</th>
             </tr>
           </thead>
           <tbody>
            {users.map(renderUser)}
           </tbody>
           </ReactBootStrap.Table>
         </div>
      )


}

export default App
