import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ThemeProvider} from 'styled-components';
import {Link, withRouter} from 'react-router-dom';
import * as Actions from '../actions/index';
import {Default} from '../containers/themes/index';
import Routes from './routes';
import '../config/styles/global-styles';

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={Default}>
        <div id="inner">

          <header>
            <nav>
              <Link to="/">Home</Link>
              <Link to="/exemplo">Exemplo</Link>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
