import React, { Component } from 'react';
import './App.css';
import ControlledExpansionPanels from './ExpansionPanels';
import SearchAppBar from './AppBar';
import LinearProgress from '@material-ui/core/LinearProgress';


class App extends Component {
  constructor(props){
      super(props);
      this.state = {
          webs: [],
          isFetching: true,
          busqueda: []
      };

      this.filtrarBusqueda = this.filtrarBusqueda.bind(this);
  }


  componentWillMount(){
    this.apiFetchWebs();
    this.setState({ isFetching: false });
  }

  apiFetchWebs = async () => await fetch('https://carmona44.github.io/webs-interesantes/webs.json')
                                  .then(response => response.json())
                                  .then(webs => this.setState({webs : webs.webs}));

  

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

    const { isFetching, webs} = this.state;
    let body;

    if (webs.length !== 0 && !isFetching) {
      body = <ControlledExpansionPanels webs={this.state.busqueda.length > 0 ? this.state.busqueda : this.state.webs}/>
    } else {
      // TODO
      body = <LinearProgress/>
    }

    return (
      <div>
        <SearchAppBar onchange={this.filtrarBusqueda}/>
        { body } 
        <footer className="pie-pagina">"Made on Earth by Human."</footer>
      </div>
    );
  }
}

export default App;
