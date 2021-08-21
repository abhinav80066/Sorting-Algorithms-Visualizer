import React, { Component } from 'react'
import './App.css';

import TopBar from './components/books/TopBar';

class App extends Component {
  render(){
    return (
      <div className="App">
        <TopBar></TopBar>
        
      </div>
    );
  }
}

export default App;
