import React, { Component } from 'react'

export class Navbar extends Component {

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
    return (
      <div>
        {/* <nav className={`navbar navbar-expand-lg navbar-{this.state.mode} bg-{this.state.mode} bg-body-{this.state.mode}`}> */}
        <nav className={`navbar navbar-expand-lg navbar-${this.state.mode} bg-${this.state.mode} bg-body-${this.state.mode}`}>
        {/* <nav className={`navbar navbar-expand-lg navbar-dark bg-dark bg-body-dark`}> */}
        {/* <nav className="navbar navbar-expand-lg bg-body-tertiary"> */}
        <div className="container-fluid">
            <a className="navbar-brand" href="/">News Monkey</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/about">Politics</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/about">Sports</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/about">Share Bazaar</a>
                </li>
            </ul>
            </div>
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={this.handleMode}/>
              {/* <label className={`form-check-label" htmlFor="flexSwitchCheckDefault style=${this.mode==='dark'?'dark':'light'}`}>Dark Mode</label> */}
              {/* <label className={`form-check-label`} htmlFor="flexSwitchCheckDefault" style={{ color: this.state.mode === 'light' ? 'dark' : 'light' }}>Dark Mode</label> */}
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{ color: this.state.mode === 'light' ? 'black' : 'white' }}>Dark Mode</label>
            </div>
        </div>
        </nav>
      </div>
    )
  }
}

export default Navbar