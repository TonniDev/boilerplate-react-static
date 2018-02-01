import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { prop, ifProp, switchProp } from 'styled-tools'

import Text from './../../atoms/Text'

const StyledCheck = styled.input.attrs({
    type: 'checkbox'
})`
    position: absolute;
    visibility: hidden;
    &:checked ~ .checkmark {
        border-color: #d82482;
        background: #d82482;
        &::before{
            content: '';
            display: block;
            height: 15px;
            width: 7px;
            border: solid #FFF;
            border-width: 0 2px 2px 0;
            transform: rotate(45deg);
          }
    }
`

const CheckWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    margin: 20px 15px;
    label{
        display: inline-block;
        position: relative;
        float: left;
        left: 32px;
        z-index: 9;
        cursor: pointer;
        -webkit-transition: all 0.25s linear;
    }

    .checkmark{
        display: inline-block;
        position: absolute;
        float: left;
        border: 3px solid #d82482;
        border-radius: 2px;
        height: 20px;
        width: 20px;
        left: 0;
        top: -2px;
        z-index: 5;
        transition: background .25s linear;
        -webkit-transition: background .25s linear;
          &::before {
            display: block;
            position: absolute;
            content: '';
            top: -3px;
            left: 3px;
            transform: rotate(45deg);
          }
      }

    &:hover {
        label{
            color: #d82482;
        }
        .checkmark {
            border: 3px solid #d82482;
          }
    }
`

class FormCheck extends Component {
  constructor(props) {
    super(props)
    this.state = {
      checked:false
    }
  }

  handleClick() {
    let currentState = this.state.checked
    this.setState({ checked: !currentState })
  }

  render() {
    let p = this.props
    return (
      <CheckWrapper>
          <StyledCheck id={p.id} name={p.name} value={p.value} checked={this.state.checked ? true : false} />
          <Text type='label' font={{size: -1}} htmlFor={p.id}>{p.label}</Text>
          <div className="checkmark" onClick={this.handleClick.bind(this)}></div>
      </CheckWrapper>
    )
  }
}

FormCheck.PropTypes = {
    status: PropTypes.oneOf(['primary', 'secondary', 'success', 'error', 'warning', 'info', 'light', 'dark', 'link', 'white', 'black']),
    label: PropTypes.string
}

export {FormCheck}
export default FormCheck
