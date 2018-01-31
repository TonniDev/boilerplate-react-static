import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { prop, ifProp, switchProp } from 'styled-tools'

import * as m from '../../styles/mixins'

//Component Styles
const typeTitle = props => {
    switch(props.type) {
        
        case 2:
        return <h2 {...props}>{props.children}</h2>
        break
        case 3:
        return <h3 {...props}>{props.children}</h3>
        break
        case 4:
        return <h4 {...props}>{props.children}</h4>
        break
        case 5:
        return <h5 {...props}>{props.children}</h5>
        break
        case 6:
        return <h6 {...props}>{props.children}</h6>
        break
        default:
        case 1:
        return <h1 {...props}>{props.children}</h1>
        break
    }
}



const StyledTitle = styled(typeTitle)`
    font-family: ${prop('fontFamily')};
    font-weight: ${props => props.fontWeight && `${m.fontWeight(props.fontWeight)}`};
    font-size: ${props => props.fontSize && `${m.calcSize(props.fontSize)}`};
    color: ${ifProp('fontColor', prop('fontColor'))};
    text-align: ${prop('align')};
    margin: ${props => props.margin &&`${m.setSizes(props.margin)}`};
    padding: ${props => props.padding &&`${m.setSizes(props.padding)}`};
    line-height: ${ifProp('lineHeight', prop('lineHeight'))};
    ${ifProp('uppercase', `text-transform: uppercase;`)}
    ${ifProp('lowercase', `text-transform: lowercase;`)}
    ${ifProp('inline', `display: inline-flex;`)}
    ${props => props.gradient && `
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
`

//Component Core
const Title = (props) => (
    <StyledTitle {...props}>{props.children}</StyledTitle>
);


   
//Component Props
Title.propTypes = {
    themeColor: PropTypes.oneOf(['primary', 'secondary', 'success', 'error', 'warning', 'info', 'light', 'dark', 'link', 'white', 'black']),
    type: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
    align: PropTypes.oneOf(['left', 'center', 'right', 'justify']),
    margin: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
    padding: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
    lineHeight: PropTypes.number,
    inline: PropTypes.bool,
    gradient: PropTypes.shape({
        direction: PropTypes.string,
        colors: PropTypes.array
    }),
    fontFamily: PropTypes.string,
    fontWeight: PropTypes.oneOf(['Light', 'Regular', 'Medium', 'Bold']),
    fontSize: PropTypes.oneOf([-2, -1, 1, 2, 3, 4, 5, 6]),
    fontColor: PropTypes.string
}

Title.defaultProps ={
    fontFamily: 'SimplonHeadline',
    fontWeight: 'Regular',
    fontSize: 2,
    fontColor: '#222222',
    align: 'left',
    type: 1
}

export { Title }
export default Title;