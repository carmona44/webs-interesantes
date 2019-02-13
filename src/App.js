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
    fetch('https://gist.githubusercontent.com/carmona44/7265da7c5a2e0e53e8e8557f22e1e870/raw/83cf11296dca92e3cd61b0dfdc3baaaca80329f1/webs.json')
        .then(response => response.json())
        .then(webs => this.setState({webs : webs.webs}))
        .then(() => this.setState({ isFetching: false }));
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
        <footer className="pie-pagina">Made on Earth by Human.</footer>
      </div>
    );
  }
}

export default App;
