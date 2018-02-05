import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from '../../../actions';

import {Button, Title, Text} from 'ComponentsOi';

class Home extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.selectCity("Rio de Janeiro");
  }

  render(){

    const {Content} = this.props;

    return <div>
      <Title>{Content.get("selectedCity")}</Title>
      <p>
        <Button className="botao01" onClick={this.props.selectCity.bind(this, "Recife PE")}>Trocar para Recife</Button>
        <Button onClick={this.props.selectCity.bind(this, "São Paulo")}>Trocar para São Paulo</Button>
        <Button onClick={this.props.selectCity.bind(this, "Rio de Janeiro")}>Trocar para Rio de Janeiro</Button>
        <Button onClick={this.props.selectCity.bind(this, "Palmas")}>Trocar para Palmas</Button>
      </p>

      <Title>Cidades: </Title>
      <ul>
        {
          this.props.Content.get("cities").map((city, i) => {
            return <li key={i}><Text>{city.name}</Text></li>
          })
        }
      </ul>

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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
