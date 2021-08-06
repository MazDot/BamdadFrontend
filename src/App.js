import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopNav from './Components/TopNav.js';
import HomePage from './Components/HomePage.js';
import ProductDetail from './Components/ProductDetail.js';
import Stores from './Components/Stores.js';
import StoreDetail from './Components/StoreDetail.js';
import NotFound from './Components/NotFound.js';
import Login from './Components/LoginPage.js';
import Signup from './Components/SignupPage.js';
import EditProfile from './Components/EditProfile.js';
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
              <Route path="/product/:id" component={ProductDetail} />
              <Route exact path="/stores" component={Stores} />
              <Route path="/stores/:id" component={StoreDetail} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
              <Route path="/editprofile" component={EditProfile} />
              <Route component={NotFound} />
            </Switch>
          </Router>
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
