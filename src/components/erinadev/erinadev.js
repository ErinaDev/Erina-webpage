import React, { Component } from 'react'
import Data from "./../../data.json"

export default class erinadev extends Component {
  render() {
    return (
    <section className="portfolio-block website gradient">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-12 col-lg-5 offset-lg-1 text">
            <h3
              data-aos="fade-right"
              data-aos-duration={750}
              data-aos-once="true"
            >
              Construido con&nbsp;
              <i className="fas fa-heart pulse animated infinite" /> por
              ErinaDev
            </h3>
            <p data-aos="zoom-out" data-aos-duration={900} data-aos-once="true">
              Somos un equipo de personas que les gusta desarollar ideas en su
              tiempo libre.&nbsp;
            </p>
            <p> Nos dedicamos a ofrecer herramientas de administración y bots a la medida para comunidades con un alto tráfico y demanda de usuarios.</p>
            <p> <b>Creado el</b> 9 de febrero de 2020 </p>
          </div>
          <div className="col-xl-1 offset-xl-0" />
          <div className="col" size={20}>
            <img
              data-aos="fade"
              data-aos-once="true"
              className="erina-logo-dev"
              src={process.env.PUBLIC_URL + '/logo-dev.png'}
            />
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