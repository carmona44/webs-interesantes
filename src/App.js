import React, { Component } from 'react';
import './App.css';
import ControlledExpansionPanels from './ExpansionPanels';
import SearchAppBar from './AppBar';

class App extends Component {
  render() {
    return (
      <div>
        <SearchAppBar />
        <ControlledExpansionPanels />
        <footer className="pie-pagina">"Made on Earth by Human."</footer>
      </div>
    );
  }
}

export default App;
