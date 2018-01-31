import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { prop, ifProp, switchProp } from 'styled-tools'

import * as m from '../../styles/mixins'

//Component Styles
const StyledLink = styled.a`
    font-family: ${ifProp('fontFamily', prop('fontFamily'))};
    font-weight: ${props => props.fontWeight && `${m.fontWeight(props.fontWeight)}`};
    font-size: ${props => props.fontSize && `${m.calcSize(props.fontSize)}`};
    color: ${ifProp('fontColor', prop('fontColor'))};
    border-radius: ${props => props.corners && `${m.setSizes(props.corners)}`};
    margin: ${props => props.margin && `${m.setSizes(props.margin)}`};
    padding: ${props => props.padding && `${m.setSizes(props.padding)}`};
    line-height: ${ifProp('lineHeight', prop('lineHeight'))};
    opacity: ${ifProp('opacity', prop('opacity'))};
    position:relative;
    cursor: pointer;
    
    &:hover {
        color:#eb1e87;
        text-decoration: underline;
    }
    &:active {
        color: #c32075;  
    }
    &:visited {
        color: rgba(216, 36, 130, 0.5);
    }
    ${ifProp('centerItems', css`display: inline-flex; align-items: center;`)}
`

//Component Core
const Link = (props) => (
    <StyledLink {...props}>{props.children}</StyledLink>
);



//Component Props
Link.propTypes = {
    themeColor: PropTypes.oneOf(['primary', 'ativo', 'selecionado', 'desabilitado']),
    typeButton: PropTypes.oneOf(['link', 'button']),
    buttonStyle: PropTypes.oneOf(['button', 'link', 'linelink', 'outline']),
    margin: PropTypes.oneOfType([PropTypes.array, PropTypes.number]),
    padding: PropTypes.oneOfType([PropTypes.array, PropTypes.number]),
    centerItems: PropTypes.bool,
    lineHeight: PropTypes.number,
    opacity: PropTypes.number,
    gradient: PropTypes.shape({
        direction: PropTypes.string,
        colors: PropTypes.array
    }),
    fontFamily: PropTypes.string,
    fontWeight: PropTypes.oneOf(['Light', 'Regular', 'Medium', 'Bold']),
    fontSize: PropTypes.oneOf([-2, -1, 1, 2, 3, 4, 5, 6]),
    fontColor: PropTypes.string

}

Link.defaultProps = {
    lineHeight: 1.5,
    fontFamily: 'Simplon',
    fontWeight: 'Regular',
    fontSize: 1,
    fontColor: '#D82482'
};

export { Link }
export default Link;
