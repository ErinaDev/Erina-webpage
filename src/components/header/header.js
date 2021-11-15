import React, { Component } from 'react'
import Data from "./../../data.json"
import {useHistory} from 'react-router-dom'

const Header = () => {
  
    let history = useHistory()
    return (
      <nav className="navbar navbar-dark navbar-expand-lg fixed-top bg-white portfolio-navbar gradient">
  <div className="container">
    <a className="navbar-brand logo" href="/">
      <strong>Erina</strong>
    </a>
    <button
      data-toggle="collapse"
      data-target="#navbarNav-1"
      className="navbar-toggler"
    >
      <span className="sr-only">Toggle navigation</span>
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="nav navbar-nav ml-auto">
        {/*                     <li class="nav-item" role="presentation"><a class="nav-link active" href="index.html">Estado</a></li>
              <li class="nav-item" role="presentation"><a class="nav-link active" href="#">Ayuda</a></li>
              <li class="nav-item" role="presentation"><a class="nav-link active" href="#">Comandos</a></li> */}
      </ul>
    </div>
    <div className="collapse navbar-collapse" id="navbarNav-1">
      <ul className="nav navbar-nav ml-auto">
        <li className="nav-item" role="presentation">
            <a className="nav-link active" onClick={()=>history.push('/sobre-nosotros')} href="#">Sobre nosotros</a>
            
        </li>
        <li className="nav-item" role="presentation">
          <a
            className="nav-link active"
            href={Data.botInvite}
          >
            Añadir a servidor
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a className="nav-link active" href={Data.paypal}>
            Donar
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>

   )
  }

export default Header