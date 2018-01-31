import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { prop, ifProp, switchProp } from 'styled-tools'

import * as m from '../../styles/mixins'

export const Tab = css`
    width: 100%;
    height: 40px;
    border-radius: 2px;
    padding: 13px 10px;
    margin: 5px auto;
    outline: none;
    transition: all 0.2s ease-in-out;
    font-family: ${ifProp('inputFont.family', prop('inputFont.family'))};
    font-weight: ${props => props.inputFont.weight && `${m.fontWeight(props.inputFont.weight)}`};
    font-size: ${props => props.inputFont.size &&`${ m.calcSize(props.inputFont.size)}`};
    border: 1px solid ${props => props.theme && `${props.theme.colors.link}`};
`
