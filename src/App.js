import React, { Component } from 'react';
import './css/App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

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
        <div>
          {this.state.isLoading ? (
            <h1>Loading...</h1>
          ) : (
            <div>
              <Header />
              <Main />
              <Footer />
            </div>
          )}
        </div>
      )
  }
}

export default App;
