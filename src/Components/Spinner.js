import React, { Component } from 'react'
import loading from './loading.gif'

export default class Spinner extends Component {
  render() {
    return (
      <div className="text-center">
        {/* <img src={loading} alt="loading"/> */}
        {/* <img src={loading} alt="loading" height="100px" width="100px" /> */}
        <img src={loading} alt="loading" height="100vh" width="100vw" />
      </div>
    )
  }
}
