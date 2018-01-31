import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { prop, ifProp, switchProp } from 'styled-tools'
import * as m from '../../styles/mixins'

import Text from '../Text'

//Component Styles
const styles = css`
    border-radius: 18px;
    border: 2px solid #ffffff;
    display: inline-flex;
    position: relative;
    align-items: center;
    justify-content: center;
    background: ${prop('bg')};
`

const StyledBadge = styled.div`
    ${styles}
    width: ${ props => props.width && `${m.rem(props.width)}`};
    height: ${ props => props.height && `${m.rem(props.height)}`};
    span {
        text-align: center;
        position: absolute;
        top: 1px;
        margin-left: -0.25px;
    }
    ${switchProp('themeColor', {
        primary: css`background: ${prop('theme.colors.primary')};`,
        secondary: css`background: ${prop('theme.colors.secondary')};`,
        success: css`background: ${prop('theme.colors.success')};`,
        error: css`background: ${prop('theme.colors.error')};`,
        warning: css`background: ${prop('theme.colors.warning')};`,
        info: css`background: ${prop('theme.colors.info')};`,
        light: css`background: ${prop('theme.colors.light')};`,
        dark: css`background: ${prop('theme.colors.dark')};`,
        link: css`background: ${prop('theme.colors.link')};`
    })}

`

//Component core
const Badge = props => (
    <StyledBadge { ...props }>
        <Text type='span'
            fontFamily={props.fontFamily}
            fontSize={props.fontSize}
            fontWeight={props.fontWeight}
            fontColor={props.fontColor}
        >{props.children || props.counter}</Text>
    </StyledBadge>
)

//Component Props
Badge.propTypes = {
    themeColor: PropTypes.oneOf(['primary', 'secondary', 'success', 'error', 'warning', 'info', 'light', 'dark', 'link']),
    width: PropTypes.number,
    height: PropTypes.number,
    bg: PropTypes.string,
    fontFamily: PropTypes.string,
    fontWeight: PropTypes.oneOf(['Light', 'Regular', 'Medium', 'Bold']),
    fontSize: PropTypes.oneOf([-2, -1, 1, 2, 3, 4, 5, 6]),
    fontColor: PropTypes.string,
    counter: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

Badge.defaultProps = {
    fontFamily: 'Simplon',
    fontWeight: 'Bold',
    fontSize: -2,
    fontColor: '#FFFFFF',
    bg: '#900AE9',
    counter: 0,
    width: 18,
    height: 18
    
    
}

export { Badge }
export default Badge
