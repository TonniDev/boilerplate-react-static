import React, { Component, ClientRect } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { prop, ifProp, switchProp } from 'styled-tools'

import * as m from '../../styles/mixins'

export const arrowBottom = css`
    &:before, &:after {
        bottom: 100%;
        left: 0;
        border: solid transparent;
        content: " ";
        height: 0;
        width: 0;
        position: absolute;
        pointer-events: none;
    }

    &:after {
        border-color: rgba(0, 0, 0, 0);
        border-bottom-color: #FFF;
        border-width: 8px;
        margin-left: ${props => m.positionArrow(props.position.pWidth, props.position.cWidth) ? 
            `calc(${props.position.pWidth} / 2 - 8px)` :   `calc(50% - 8px)`
        } ;
    }

    &:before {
        border-color: rgba(194, 225, 245, 0);
    border-bottom-color: #FFF;
    border-width: 8px;
    margin-left: ${props => m.positionArrow(props.position.pWidth, props.position.cWidth) ? 
        `calc(${props.position.pWidth} / 2 - 8px)` :   `calc(50% - 8px)`
        } ;
    }
`

export const arrowTop = css`
    &:before, &:after {
        top: 100%;
        left: 0;
        border: solid transparent;
        content: " ";
        height: 0;
        width: 0;
        position: absolute;
        pointer-events: none;
    }

    &:after {
        border-color: rgba(0, 0, 0, 0);
        border-top-color: #FFF;
        border-width: 8px;
        margin-left: ${prop('position.popSize')};
    }

    &:before {
        border-color: rgba(194, 225, 245, 0);
    border-top-color: #FFF;
    border-width: 9px;
    margin-left: ${prop('position.popSize')};
    }
`