import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { prop, ifProp, switchProp } from 'styled-tools'

import * as m from '../../styles/mixins'

//Component Styles
const typeText = props => {
    switch(props.type) {
        case 'span':
        return <span {...props}>{props.children}</span>
        break
        case 'strong':
        return <strong {...props}>{props.children}</strong>
        break
        case 'abbr':
        return <abbr {...props}>{props.children}</abbr>
        break
        case 'legend':
        return <legend {...props}>{props.children}</legend>
        break
        case 'small':
        return <small {...props}>{props.children}</small>
        break
        case 'sub':
        return <sub {...props}>{props.children}</sub>
        break
        case 'sup':
        return <sup {...props}>{props.children}</sup>
        break
        case 'label':
        return <label {...props}>{props.children}</label>
        break
        default:
        case 'p':
            return <p {...props}>{props.children}</p>
        break
    }
}



const StyledText = styled(typeText)`
    font-family: ${prop('fontFamily')};
    font-weight: ${props => props.fontWeight && `${m.fontWeight(props.fontWeight)}`};
    font-size: ${props => props.fontSize && `${m.calcSize(props.fontSize)}`};
    color: ${ifProp('fontColor', prop('fontColor'))};
    margin: ${props => props.margin &&`${m.setSizes(props.margin)}`};
    padding: ${props => props.padding &&`${m.setSizes(props.padding)}`};
    text-align:${ifProp('align', prop('align'))};
    line-height: ${ifProp('lineHeight', prop('lineHeight'))};
    ${ifProp('uppercase', `text-transform: uppercase;`)}
    ${ifProp('lowercase', `text-transform: lowercase;`)}
    ${props => props.gradient && `
        font-family: ${ifProp('font.family', prop('font.family'))};
        font-weight: ${props => props.font.weight &&`${m.fontWeight(props.font.weight)}`};
        font-size: ${props => props.font.size &&`${m.calcSize(props.font.size)}`};
        background: -webkit-linear-gradient(${m.gradient(props.gradient.direction, props.gradient.colors)});
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background: -moz-linear-gradient(${m.gradient(props.gradient.direction, props.gradient.colors)});
        -moz-background-clip: text;
        -moz-text-fill-color: transparent;
        `}
    ${switchProp('themeColor', {
        primary: css`color: ${prop('theme.colors.primary')};`,
        secondary: css`color: ${prop('theme.colors.secondary')};`,
        success: css`color: ${prop('theme.colors.success')};`,
        error: css`color: ${prop('theme.colors.error')};`,
        warning: css`color: ${prop('theme.colors.warning')};`,
        info: css`color: ${prop('theme.colors.info')};`,
        light: css`color: ${prop('theme.colors.light')};`,
        dark: css`color: ${prop('theme.colors.dark')};`,
        link: css`color: ${prop('theme.colors.link')};`,
        white: css`color: ${prop('theme.colors.white')};`,
        black: css`color: ${prop('theme.colors.black')};`
    })}
    ${switchProp('type', {
        span: css`display: inline-block;`,
        strong: css`font-weight: 600;`,
        abbr: css`cursor: help;`,
        legend: css`display: inline-block;margin: 0; padding: 0;`,
        small: css`font-size: ${m.calcSize(-1)};text-transform: uppercase;`,
        sub: css`font-size: ${m.calcSize(-2)};`,
        sup: css`font-size: ${m.calcSize(-2)};`,
        p: css`width: 100%;`,
        label: css`cursor: pointer;`
    })}
`

//Component Core
const Text = (props) => (
    <StyledText {...props}>{props.children}</StyledText>
);


   
//Component Props
Text.propTypes = {
    themeColor: PropTypes.oneOf(['primary', 'secondary', 'success', 'error', 'warning', 'info', 'light', 'dark', 'link', 'white', 'black']),
    type: PropTypes.oneOf(['label', 'span', 'strong', 'abbr', 'legend', 'small', 'sub', 'sup', 'p']),
    align: PropTypes.oneOf(['left', 'center', 'right', 'justify']),
    margin: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
    padding: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
    lineHeight: PropTypes.number,
    gradient: PropTypes.shape({
        direction: PropTypes.string,
        colors: PropTypes.array
    }),
    fontFamily: PropTypes.string,
    fontWeight: PropTypes.oneOf(['Light', 'Regular', 'Medium', 'Bold']),
    fontSize: PropTypes.oneOf([-2, -1, 1, 2, 3, 4, 5, 6]),
    fontColor: PropTypes.string,
    
}

Text.defaultProps ={
    type: 'p',
    align: 'left',
    fontFamily: 'Simplon',
    fontWeight: 'Regular',
    fontSize: 1,
    fontColor: '#222222'
}

export { Text }
export default Text