import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {Text} from '../../../components';
import * as Actions from '../../../actions';

import '../../../config/styles/global-styles';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.selectCity = this.selectCity.bind(this);
  }
  componentWillMount() {
    this.props.selectCity('Rio de Janeiro');
  }
  selectCity(e) {
    this.props.selectCity(e.target.getAttribute('data-city'));
  }

  render() {
    const {Content} = this.props;

    return (
      <div>
        <h1>{Content.get('selectedCity')}</h1>
        <p data-foo="42">
          <button className="botao01" data-city="Recife PE" onClick={this.selectCity}>Trocar para Recife</button>
          <button data-city="São Paulo" onClick={this.selectCity}>Trocar para São Paulo</button>
          <button data-city="Rio de Janeiro" onClick={this.selectCity}>Trocar para Rio de Janeiro</button>
          <button data-city="Palmas" onClick={this.selectCity}>Trocar para Palmas</button>
        </p>

        <h2>Cidades: </h2>
        <ul>
          {
            this.props.Content.get('cities')
              .map((city, i) => {
                const key = i * (i + 3);
                return <li key={key}><Text>{city.name}</Text></li>;
              })
          }
        </ul>
        <hr />
        <hr />
        <Text type="p">Some random text here.</Text>
        <Text type="span">Some random text here.</Text>
        <Text type="strong">Some random text here.</Text>
      </div>);
  }
}

Home.propTypes = {
  Content: PropTypes.object,
  selectCity: PropTypes.func
};

function mapStateToProps(state) {
  return {
    Content: state.Content
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
