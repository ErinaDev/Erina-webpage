import React, { Component } from 'react'
import Data from "./../../data.json"

export default class header extends Component {
  render() {
    return (
      <section className="portfolio-block website gradient">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-12 col-lg-5 offset-lg-1 text">
            <h3>404</h3>
          </div>
          <div className="col-md-12 col-lg-5">
            <div className="portfolio-laptop-mockup" />
          </div>
        </div>
      </div>
    </section>
   )
  }
}