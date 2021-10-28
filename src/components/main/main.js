import React, { Component } from 'react'
import Data from "./../../data.json"
import ErinaDev from "../erinadev/erinadev"

export default class main extends Component {
  render() {
    return (
    <main className="page lanidng-page">
  <section className="portfolio-block block-intro">
    <div className="container">
      <div
        className="avatar"
        style={{
          backgroundImage:
            'url("https://raw.githubusercontent.com/ErinaDev/API/master/brand/icon.png")'
        }}
      />
      <h1 className="erina-title" style={{ margin: "-10px" }}>
        <strong>Erina</strong>
      </h1>
      <p>
        <br />
        Una bot de Discord multipropósito en español.
      </p>
      <div className="about-me">
        <a
          className="btn btn-outline-primary btn-lg tada animated"
          role="button"
          href={Data.botInvite}
          style={{ filter: "blur(0px) grayscale(0%) hue-rotate(0deg)" }}
        >
          Invitar
          <br />
        </a>
      </div>
    </div>
  </section>
  <section className="portfolio-block skills">
    <div className="container">
      <div className="heading">
        <h2 className="erina-title">Modular, versátil e interactiva</h2>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="card special-skill-item border-0">
            <div className="card-header bg-transparent border-0">
              <i className="icon ion-flash" />
            </div>
            <div className="card-body">
              <h3 className="card-title erina-title">Moderación</h3>
              <p className="card-text">
                Gestiona, supervisa y encuesta. Obtén un impulso y conviértete
                en un verdadero vocero de la ley.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card special-skill-item border-0">
            <div className="card-header bg-transparent border-0">
              <i className="icon ion-settings" />
            </div>
            <div className="card-body">
              <h3 className="card-title erina-title">Administración</h3>
              <p className="card-text">
                Mejora tu servidor con plugins de chat y funciones interactivas
                como bienvenidas y roles automáticos.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card special-skill-item border-0">
            <div className="card-header bg-transparent border-0">
              <i className="icon ion-ios-game-controller-b" />
            </div>
            <div className="card-body">
              <h3 className="card-title erina-title">
                Utilidad y entretenimiento
              </h3>
              <p className="card-text">
                Desde buscar imagenes de animales, bailar y manipular imagenes
                hasta escribir en braille y consultar la pokédex.&nbsp;
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section className="portfolio-block call-to-action border-bottom">
      <div className="container">
        <div className="d-flex justify-content-center align-items-center content">
          <h3 data-aos="zoom-in" data-aos-once="true">
            ¿Necesitas ayuda o más información?
          </h3>
          <a
            className="btn btn-outline-primary btn-lg"
            role="button"
            href={Data.discord}
          >
            Visitar servidor oficial
          </a>
        </div>
      </div>
    </section>
    <ErinaDev />
    <section />
  </section>
</main>
)
  }
}