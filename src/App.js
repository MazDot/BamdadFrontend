import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopNav from './Components/TopNav.js';
import HomePage from './Components/HomePage.js';
import Product from './Components/Product.js';
import Stores from './Components/Stores.js';
import StoreDetail from './Components/StoreDetail.js';
import NotFound from './Components/NotFound.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Container className="App">
        <Router>
          <TopNav />
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/home" component={HomePage} />
              <Route path="/product" component={Product} />
              <Route exact path="/stores" component={Stores} />
              <Route path="/stores/:id" component={StoreDetail} />
              <Route component={NotFound} />
            </Switch>
          </Router>
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
