import React, { Component } from 'react';
import './css/App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import About from './components/About';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class App extends Component {

  constructor() {
    super();
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    this.setState({isLoading: false});
  }

  render() {
      return(
        <Router>
          <div>
            {this.state.isLoading ? (
              <h1>Loading...</h1>
            ) : (
              <div className="body">
                <Header />
                <Switch>
                  <Route path="/" exact component={Main} />
                  <Route path="/about" component={About} />
                </Switch>
                <Footer />
              </div>
            )}
          </div>
        </Router>
      )
  }
}

export default App;
