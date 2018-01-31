import React, { Component, ClientRect } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { prop, ifProp, switchProp } from 'styled-tools'
import Button from './../../atoms/Button'
import Icon from './../../atoms/Icon'

const StyledButton = styled(Button)`
    &:disabled{
      background-color:#d82482;
      opacity:1;
      cursor:default;
    }
`
const LoadingIcon = styled(Icon)`
  -webkit-animation-name: spin;
  -webkit-animation-duration: 1000ms;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-timing-function: linear;
  -moz-animation-name: spin;
  -moz-animation-duration: 1000ms;
  -moz-animation-iteration-count: infinite;
  -moz-animation-timing-function: linear;
  -ms-animation-name: spin;
  -ms-animation-duration: 1000ms;
  -ms-animation-iteration-count: infinite;
  -ms-animation-timing-function: linear;
  
  animation-name: spin;
  animation-duration: 1000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  margin-top: -7px;

@-ms-keyframes spin {
  from { -ms-transform: rotate(0deg); }
  to { -ms-transform: rotate(360deg); }
}
@-moz-keyframes spin {
  from { -moz-transform: rotate(0deg); }
  to { -moz-transform: rotate(360deg); }
}
@-webkit-keyframes spin {
  from { -webkit-transform: rotate(0deg); }
  to { -webkit-transform: rotate(360deg); }
}
@keyframes spin {
  from {
      transform:rotate(0deg);
  }
  to {
      transform:rotate(360deg);
  }
}

`

class ButtonLoader extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isLoading: false
      };
    }
  
    loading() {
      this.setState({
        isLoading: !this.state.isLoading
      });
    }
  
    render() {
      return (
        <StyledButton onClick={this.loading.bind(this)} buttonStyle={this.props.tipoBotao} disabled={this.state.isLoading ? true : false}>       
           {this.state.isLoading ? 
            <LoadingIcon 
              type="loading" 
              size={3} strokeColor={this.props.tipoBotao=="button" ? "#FFFFFF" : "#d82482"}/>:
              this.props.children || this.props.label}
        </StyledButton>
      );
    }
  }
  ButtonLoader.PropTypes={tipoBotao:PropTypes.string}
export { ButtonLoader }
export default ButtonLoader
