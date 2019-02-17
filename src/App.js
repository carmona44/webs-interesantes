import React, { Component } from 'react';
import { connect } from "react-redux";
import './App.css';
import ControlledExpansionPanels from './ExpansionPanels';
import SearchAppBar from './AppBar';
import LinearProgress from '@material-ui/core/LinearProgress';
import * as actions from "./actions";
import { bindActionCreators } from "redux";
import { getWebsFilter } from "./selectors/";


class App extends Component {
  
  componentWillMount(){
    this.props.fetchWebs();
  }



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
        <SearchAppBar onchange={this.props.setSearch}/>
        { body } 
        <footer className="pie-pagina">Made on Earth by Human.</footer>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  busqueda: getWebsFilter(state),
  webs: state.webs.webs,
  isFetching: state.global.isFetching,
});

const mapDispatchToPropsActions = dispatch => 
  bindActionCreators(actions, dispatch);



export default connect(mapStateToProps, mapDispatchToPropsActions)(App);
