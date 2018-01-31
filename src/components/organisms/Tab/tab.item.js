import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { prop, ifProp, switchProp } from 'styled-tools'

import Grid from './../../atoms/Grid'
import Title from './../../atoms/Title'
import Icon from './../../atoms/Icon'
import * as m from '../../styles/mixins'

//Component styles
const styleHeader = css`
    height: 60px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-top: 2.5px;
`
const StyledItem = styled.div`
    > input {
        position: absolute;
        opacity: 0;
        z-index: -1;
        &:checked {
            ~ .collapse-header {
                i{
                    transform: scale(-1, -1);
                }
            }
            ~ .collapse-content {
                max-height: 10em;
            }
        } 
    }
    ${switchProp('themeColor', {
        primary: css`background-color: ${prop('theme.colors.primary')};`,
        secondary: css`background-color: ${prop('theme.colors.secondary')};`,
        success: css`background-color: ${prop('theme.colors.success')};`,
        error: css`background-color: ${prop('theme.colors.error')};`,
        warning: css`background-color: ${prop('theme.colors.warning')};`,
        info: css`background-color: ${prop('theme.colors.info')};`,
        light: css`background-color: ${prop('theme.colors.light')};`,
        dark: css`background-color: ${prop('theme.colors.dark')};`,
        link: css`background-color: ${prop('theme.colors.link')};`
    })}

    & > .collapse-header {
        ${styleHeader}
        
    }

    & > .collapse-content {
        transition: all 0.4s ease-in-out;
        max-height: 0;
        overflow: hidden;
        
    }
`
//Component Core
class TabItem extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

//Component Props
TabItem.PropTypes = {
    themeColor: PropTypes.oneOf(['primary', 'secondary', 'success', 'error', 'warning', 'info', 'light', 'dark', 'link']),
    name: PropTypes.string,
    themeHeader: PropTypes.bool
}

TabItem.defaultProps = {
    themeHeader: false
}

export {TabItem}
export default TabItem