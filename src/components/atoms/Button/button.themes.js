import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import { prop, ifProp, switchProp } from 'styled-tools'

import * as m from '../../styles/mixins'

const useColor = props => m.checkTheme(props)

const buttonThemes = css`
    ${switchProp('type', {
        button: css`
            background: ${useColor};
            &:hover {
                background:#eb1e87;
                transition: all 0.2s ease-out;
            }
            &:active{
                background: #c32075;
            }
            &:disabled{
                background: rgba(216, 36, 130, 0.5);
            }
        `,
        outline: css`
            border-color: ${props => m.checkTheme(props)};
            color: ${props => m.checkTheme(props)};
            padding: 16px;
            border: solid 2px;

            &:hover {
                border-color: #eb1e87;
                padding: 14px;
                border: solid 4px;
                color: #eb1e87;
            }

            &:active{
                border-color: #c32075;
                color: #c32075;  
                padding: 16px;
                border: solid 2px;           
            }

            &:disabled{
                border-color: rgba(216, 36, 130, 0.5);
                border: solid 2px;
                
            }
        `,
        linkface: css`
            color: ${props => m.checkTheme(props)};
            padding: 0;
            width: auto;
            &:hover {
                color: #eb1e87;
            }

            &:active{
                color: #c32075;         
            }

            &:disabled{
                color: rgba(216, 36, 130, 0.5);
            }
        `
    })}
`

export default buttonThemes
