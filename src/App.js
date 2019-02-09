import React, { Component } from 'react';
import './App.css';
import ControlledExpansionPanels from './ExpansionPanels';
import SearchAppBar from './AppBar';
import CircularProgress from '@material-ui/core/CircularProgress';


class App extends Component {
  constructor(props){
      super(props);
      this.state = {
          webs: null,
          isFetching: true,
          busqueda: []
      };

      this.filtrarBusqueda = this.filtrarBusqueda.bind(this);
  }


  componentWillMount(){
    this.apiFetchWebs();
    this.setState({ isFetching: false });
  }

  apiFetchWebs = async () => await fetch('https://salvadorzapatacas.github.io/webs-interesantes/db.json')
                                  .then(response => response.json())
                                  .then(webs => this.setState({webs}));

  

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

    if (webs && !isFetching) {
      
      body = <ControlledExpansionPanels webs={this.state.busqueda.length > 0 ? this.state.busqueda : this.state.webs}/>
    } else {
      console.log('WEBS' , this.state.webs);
      body = <CircularProgress />;
    }

    return (
      <div>
        <SearchAppBar onchange={this.filtrarBusqueda}/>
        { body } 
        {/* <ControlledExpansionPanels webs={this.state.busqueda.length > 0 ? this.state.busqueda : this.state.webs}/> */}
        <footer className="pie-pagina">"Made on Earth by Human."</footer>
      </div>
    );
  }
}

export default App;
