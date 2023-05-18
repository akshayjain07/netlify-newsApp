import React, { Component } from 'react'
import {Link} from "react-router-dom";


export class NavBar extends Component {

  constructor() {
    super();
    console.log("I am Akshay Jain");
    this.state = {
      mode: "light"
    };
  }

  handleMode = () => {
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    const newMode = this.state.mode === 'light' ? 'dark' : 'light';
    document.body.classList.add('bg-'+(newMode==='dark'?'success':'light'));
    console.log(newMode);
    this.setState({
      mode: newMode
    });
  };  

  render() {
    // const {onClick} = this.props;
    return (
      <div>
        <nav className={`navbar navbar-expand-lg navbar-${this.state.mode} bg-${this.state.mode} bg-body-${this.state.mode}`}>
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">News Monkey</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to='/' onClick={() => console.log("home")}>Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to='/business' onClick={() => console.log("business")}>Business</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to='/entertainment' onClick={() => console.log("entertainment")}>Entertainment</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to='/health' onClick={() => console.log("health")}>Health</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to='/science' onClick={() => console.log("science")}>Science</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to='/sports' onClick={() => console.log("sports")}>sports</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to='/technology' onClick={() => console.log("technology")}>Technology</Link>
                </li>
            </ul>
            </div>
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={this.handleMode}/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{ color: this.state.mode === 'light' ? 'black' : 'white' }}>Dark Mode</label>
            </div>
        </div>
        </nav>
      </div>
    )
  }
}

export default NavBar