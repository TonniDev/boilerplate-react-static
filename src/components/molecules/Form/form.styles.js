import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { prop, ifProp, switchProp } from 'styled-tools'

import * as m from '../../styles/mixins'

export const InputDefault = css`
    width: 100%;
    height: 40px;
    border-radius: 2px;
    padding: 13px 10px;
    margin: 5px auto;
    outline: none;
    transition: all 0.2s ease-in-out;
    font-family: ${ifProp('inputFont.fontFamily', prop('inputFont.fontFamily'))};
    font-weight: ${props => props.inputFont.fontWeight && `${m.fontWeight(props.inputFont.fontWeight)}`};
    font-size: ${props => props.inputFont.fontSize &&`${ m.calcSize(props.inputFont.fontSize)}`};
    border: 1px solid ${props => props.theme && `${props.theme.colors.link}`};
    ${switchProp('status', {
        primary: css`border-color: ${prop('theme.colors.primary')};`,
        secondary: css`border-color: ${prop('theme.colors.secondary')};`,
        success: css`border-color: ${prop('theme.colors.success')};color: ${prop('theme.colors.success')};`,
        error: css`border-color: ${prop('theme.colors.error')};color: ${prop('theme.colors.error')};`,
        warning: css`border-color: ${prop('theme.colors.warning')};color: ${prop('theme.colors.warning')};`,
        info: css`border-color: ${prop('theme.colors.info')};color: ${prop('theme.colors.info')};`,
        light: css`border-color: ${prop('theme.colors.light')};`,
        dark: css`border-color: ${prop('theme.colors.dark')};`,
        link: css`border-color: ${prop('theme.colors.link')};`,
        white: css`border-color: ${prop('theme.colors.white')};`,
        black: css`border-color: ${prop('theme.colors.black')};`
    })}
`

export const InputHover = css`
    &:hover {
        border-color: ${props => props.theme && `${props.theme.colors.dark}`};
    }
`

export const InputFocus = css`
    &:focus {
        border-color: ${props => props.theme && `${props.theme.colors.primary}`};
    }
`

export const InputDisabled = css`
    &:disabled {
        border-color: transparent;
        background: ${props => props.theme && `${props.theme.colors.light}`};
        ::placeholder {
            color: ${props => props.theme && `${props.theme.colors.link}`};
        }
        }
    }
`

export const FrontSelect = css`
    ${InputDefault}
`