import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  useLocation
} from "react-router-dom";


import Header from './components/header/header';
import Main from './components/main/main';
import Footer from './components/footer/footer';
import ErinaDev from "./components/erinadev/erinadev";
import CuatroCeroCuatro from "./components/404/404";

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <Header />

      <Switch>
      <Route exact path="/">
      <Main />
      </Route>

      <Route path="/sobre-nosotros" component={ErinaDev}>
      <ErinaDev />
      </Route>

      <Route path="*">
            <CuatroCeroCuatro />
          </Route>
        
      </Switch>
      <Footer />
      </div>
      </Router>
    );
  }
}
export default App;