// import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/NavBar';
import News from './Components/News';

export default class App extends Component {

  // constructor() {
  //   super();
  //   console.log("I am Akshay Jain");
  //   this.state = {
  //     mode: "light"
  //   };
  // }
  
  // handleMode = () => {
  //   document.body.classList.remove('bg-light');
  //   document.body.classList.remove('bg-dark');
  //   const newMode = this.state.mode === 'light' ? 'dark' : 'light';
  //   document.body.classList.add('bg-' + newMode);
  //   console.log(newMode);
  //   this.setState({
  //     mode: newMode
  //   });
  // };  

  render() {
    return (
      <div>
        <Navbar/>
        <News/>
      </div>
    )
  }
}
