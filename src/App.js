import React, { Component } from 'react';
import './App.css';
import ControlledExpansionPanels from './ExpansionPanels';
import SearchAppBar from './AppBar';
import DATA from './webs.json';

class App extends Component {
  render() {
    var i = -1;

    return (
      <div>
        <SearchAppBar />
        {
          Object.keys(DATA).map(e => <ControlledExpansionPanels key={i += 1} tipo={e}/>)
        }
        <footer className="pie-pagina">"Made on Earth by Human."</footer>
      </div>
    );
  }
}

export default App;
