import React, { Component } from 'react';
import { connect } from "react-redux";
import './App.css';
import ControlledExpansionPanels from './ExpansionPanels';
import SearchAppBar from './AppBar';
import LinearProgress from '@material-ui/core/LinearProgress';
import * as actions from "./actions";
import { bindActionCreators } from "redux";


class App extends Component {
  


  componentWillMount(){
    this.props.fetchWebs();
  }

 /*  filtrarBusqueda(event){
      const regex = new RegExp(event.target.value, 'gi');
      const newWebs = this.state.webs.filter(web => {
          return web.nombre.match(regex);
      });

      this.setState({
         busqueda: newWebs
      });
  } */

  render() {
    const { isFetching, webs, busqueda} = this.props;
    let body;

    if (webs && webs !== 0 && !isFetching) {
      body = <ControlledExpansionPanels webs={busqueda.length > 0 ? busqueda : webs}/>
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


const mapStateToProps = state => ({
  webs: state.webs.webs,
  isFetching: state.global.isFetching,
  busqueda: state.global.search
});

const mapDispatchToPropsActions = dispatch => 
  bindActionCreators(actions, dispatch);



export default connect(mapStateToProps, mapDispatchToPropsActions)(App);
