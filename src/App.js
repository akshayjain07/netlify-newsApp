// import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';

export default class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     urlPart: 'random'
  //   };
  // }
  // handleButtonClick = (newUrlPart) => {
  //   this.setState({ urlPart: newUrlPart });
  // };


  render() {
    // const { urlPart } = this.state;
    return (
      <div>
        <NavBar/>
        {/* <NavBar onClick={this.handleButtonClick}/> */}
        <News/>
        {/* <News urlPart={urlPart}/> */}
      </div>
    )
  }
}
