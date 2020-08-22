import React, {Component} from 'react';
import './App.css';
import '../public/facebook.svg';

class App extends Component {
  render (){
    return (
      <div className="container-fluid p-0">
        <nav className="navbar navbar-expand-md navbar-dark">
          <a className="navbar-brand" href="/">
            <i>Bichano.com</i>
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMainToggler"
          aria-controls="navbarMainToggler" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <section className="collapse navbar-collapse" id="navbarMainToggler">
            <div className="navbar-nav ml-auto">
              <a className="nav-item nav-link" href="#">Fotos</a>
              <a className="nav-item nav-link" href="#">Curiosidades</a>
              <a className="nav-item nav-link" href="#">Adote um bichano</a>
            </div>
          </section>
        </nav>


       <footer className="footer container pt-3 text-center col-12">  
          <div className="container d-flex justify-content-around col-8 col-md-4">
            <img className="social-icon" src="facebook.png" alt="facebook"></img>
            <img className="social-icon" src="instagram.png" alt="instagram"></img>
            <img className="social-icon" src="twitter.png" alt="twitter"></img>
          </div>
       </footer>
      </div>
    );
  }
}

export default App;
