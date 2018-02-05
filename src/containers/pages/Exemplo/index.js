import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from '../../../actions';

class Exemplo extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.selectCity("Rio de Janeiro");
  }

  render(){
    return <div>
      <h1>Rota de exemplo.</h1>
    </div>;
  }
};

function mapStateToProps(state){
  return {
    Content: state.Content
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Exemplo);
