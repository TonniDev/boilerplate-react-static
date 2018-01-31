import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { prop, ifProp, switchProp } from 'styled-tools'

import * as m from '../../styles/mixins'
import List from './../../atoms/List'
import Text from './../../atoms/Text'
import * as styles from './form.styles'


const StyledRadio = styled.input.attrs({
    type: 'radio'
})`
    position: absolute;
    visibility: hidden;
    &:checked ~ .check {
        border-color: #d82482;
        &::before{
            background: #d82482;
          }
    }
`

const RadioWrapper = styled.div`
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

    .check{
        display: inline-block;
        position: absolute;
        float: left;
        border: 3px solid #d82482;
        border-radius: 100%;
        height: 20px;
        width: 20px;
        left: 0;
        top: -2px;
          z-index: 5;
          transition: border .25s linear;
          -webkit-transition: border .25s linear;
          &::before {
            display: block;
            position: absolute;
              content: '';
            border-radius: 100%;
            height: 8px;
            width: 8px;
            top: 3px;
            left: 3px;
            margin: auto;
              transition: background 0.25s linear;
              -webkit-transition: background 0.25s linear;
          }
      }

    &:hover {
        label{
            color: #d82482;
        }
        .check {
            border: 3px solid #d82482;
          }
    }
`

class FormRadio extends Component {
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
        <RadioWrapper>
            <StyledRadio id={p.id} name={p.name} value={p.value} checked={this.state.checked ? true : false}/>
            <Text type='label' font={{size: -1}} htmlFor={p.id}>{p.label}</Text>
            <div className="check" onClick={this.handleClick.bind(this)}></div>
        </RadioWrapper>
      )
    }
}

FormRadio.PropTypes = {
    status: PropTypes.oneOf(['primary', 'secondary', 'success', 'error', 'warning', 'info', 'light', 'dark', 'link', 'white', 'black']),
    label: PropTypes.string
}

export {FormRadio}
export default FormRadio
