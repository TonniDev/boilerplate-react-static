import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ThemeProvider} from 'styled-components';
import * as Actions from './actions';
import {Default} from './containers/themes';
import Routes from './routes';
import './config/styles/global-styles';

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={Default}>
        <div id="inner">

          <header>
            <nav>
              <a href="/">Home</a>
              <a href="/exemplo">Exemplo</a>
            </nav>
          </header>

          <Routes />



        </div>
      </ThemeProvider>
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
