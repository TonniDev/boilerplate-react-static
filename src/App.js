import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ThemeProvider} from 'styled-components';
import * as Actions from './actions';
import {Default} from './containers/themes';
import Routes from './routes';

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={Default}>
        <Routes />
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
