import React, { Component } from 'react'
import Data from "./../../data.json"

export default class footer extends Component {
  render() {
    return (
      <div className="footer-dark">
  <footer>
    <div className="container">
      <div className="row">
        <div className="col-xl-2">
          <img src={process.env.PUBLIC_URL + '/logo.png'} style={{ width: 105 }} />
        </div>
        <div className="col-sm-6 col-md-3 col-xl-2 item">
          <h3>Erina</h3>
          <a href={Data.twitter} />
          <ul>
            <li>
              <a href={Data.paypal}>Donar</a>
            </li>
            <li>
              <a href={Data.discord}>Discord</a>
            </li>
          </ul>
        </div>
        <div className="col-xl-2">
          <h3>ErinaDev</h3>
          <ul>
            <li>
              <a href={Data.github}>GitHub</a>
            </li>
            <li>
              <a href={Data.twitter}>Twitter</a>
            </li>
          </ul>
        </div>
      </div>
      <p className="copyright">
        © {(new Date().getFullYear())} ErinaDev. Todos los derechos reservados.
      </p>
    </div>
  </footer>
</div>

    )
  }
}