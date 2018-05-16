import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from '../actions/index';
import Routes from './routes';
import '../config/styles/global-styles.less';

class App extends React.Component {
  render() {
    return (
      <div id="inner">
        <header>
          <nav>
            <a href="/">Home</a>
            <a href="/exemplo">Exemplo</a>
          </nav>
        </header>
        <Routes />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    Content: state.Content
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
