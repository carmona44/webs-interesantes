import React, { Component } from 'react';
import './App.css';
import ControlledExpansionPanels from './ExpansionPanels';
import SearchAppBar from './AppBar';
import DATA from './webs.json';

class App extends Component {
  constructor(props){
      super(props);
      this.state = {
          webs: DATA.webs,
          busqueda: []
      };

      this.filtrarBusqueda = this.filtrarBusqueda.bind(this);
  }

  filtrarBusqueda(event){
      const regex = new RegExp(event.target.value, 'gi');
      const newWebs = this.state.webs.filter(web => {
          return web.nombre.match(regex);
      });

      this.setState({
         busqueda: newWebs
      });
  }

  render() {
    return (
      <div>
        <SearchAppBar onchange={this.filtrarBusqueda}/>
        <ControlledExpansionPanels webs={this.state.busqueda.length > 0 ? this.state.busqueda : this.state.webs}/>
        <footer className="pie-pagina">"Made on Earth by Human."</footer>
      </div>
    );
  }
}

export default App;
