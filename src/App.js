import market from './market.png';
import signout from './signout.png';
import account from './account.png';
import './App.css';
import React, { Component }  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="row">
          <div className="col-md-1">
            <button class="btn btn-default">
              <img src={market} width="40" />
            </button>
          </div>
          <div className="col-md-1">
            <button class="btn btn-default">
              <img src={signout} width="30" />
            </button>
          </div>
          <div className="col-md-5">
            <div class="input-group">
              <input type="search" id="form1" class="form-control" placeholder="Search" />
            </div>
          </div>
          <div className="col-md-1">
            <button class="btn btn-default">
              <img src={account} width="30" />
            </button>
          </div>
          <div className="col-md-2">
            <button type="button" class="btn btn-primary">Sign Up</button>
          </div>
          <div className="col-md-2">
            <button type="button" class="btn btn-primary">Sign In</button>
          </div>
        </div>
      </header>

      <body>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <div className="col-md-10">
              <a href="#" class="btn btn-outline-dark">Sport</a>
              <a href="#" class="btn btn-outline-dark">Vehicle</a>
              <a href="#" class="btn btn-outline-dark">Board Games</a>
              <a href="#" class="btn btn-outline-dark">Dolls</a>
              <a href="#" class="btn btn-outline-dark">Educational</a>
              <a href="#" class="btn btn-outline-dark">Puzzle</a>
              <a href="#" class="btn btn-outline-dark">Lego</a>
            </div>
            <div className="col-md-2">
              <button type="button" class="btn btn-dark">Markets</button>
            </div>
          </div>
        </nav>

        <div className="row">
          <div className="CardList">
            <div className="row">
              <div className="col-md-3">
                <div class="card">
                  <img src="https://images-na.ssl-images-amazon.com/images/I/71RzKYJZ1lL.__AC_SX300_SY300_QL70_FMwebp_.jpg" class="card-img-top" alt="..."></img>
                  <div class="card-body">
                    <h5 class="card-title">Magic Speed Cube</h5>
                    <p class="card-text">3x3 Easy Turning and Smooth Play Durable Puzzle Cube Toy for Kids</p>
                    <a href="#" class="btn btn-primary">View</a>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div class="card">
                  <img src="https://images-na.ssl-images-amazon.com/images/I/81bPWskNWpL.__AC_SY300_SX300_QL70_FMwebp_.jpg" class="card-img-top" alt="..."></img>
                  <div class="card-body">
                    <h5 class="card-title">Jigsaw Puzzle</h5>
                    <p class="card-text">A Stroll in Paris - 1000 Piece Jigsaw Puzzle</p>
                    <a href="#" class="btn btn-primary">View</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </body>
    </div>
  );
}

export default App;
