import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { prop, ifProp, switchProp } from 'styled-tools'

import * as m from '../../styles/mixins'

//Component fixed styles
const StyledGrid = styled.div`
    border-radius: ${props => props.corners ? `${m.setSizes(props.corners)}` : '1px'};
    margin: ${props => props.margin ? `${m.setSizes(props.margin)}` : ''};
    padding: ${props => props.padding ? `${m.setSizes(props.padding)}` : ''};
    box-shadow: ${props => props.shadow ? `${m.setSizes(props.shadow)} rgba(204, 204, 204, 0.3)` : '0'};
    height: ${ifProp('height', prop('height'))};
    opacity: ${ifProp('opacity', prop('opacity'))};
    background: ${ifProp('bg', prop('bg'))};
    align-items: ${ifProp('align', prop('align'))};
    ${ifProp('centerItems', css`display: flex; align-items: center;`)}
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
`;

//Component core
const Grid = props => (
    <StyledGrid {...props}>{props.children}</StyledGrid>
)

//Component Props
Grid.propTypes = {
    themeColor: PropTypes.oneOf(['primary', 'secondary', 'success', 'error', 'warning', 'info', 'light', 'dark', 'link']),
    align: PropTypes.oneOf(['stretch', 'flex-start', 'flex-end', 'center', 'baseline']),
    corners: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.number), PropTypes.number]),
    margin: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.number), PropTypes.number]),
    padding: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.number), PropTypes.number]),
    shadow: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.number), PropTypes.number]),
    centerItems: PropTypes.bool,
    reverse: PropTypes.bool,
    full: PropTypes.bool,
    height: PropTypes.number,
    opacity: PropTypes.number,
    bg: PropTypes.string
}

Grid.defaultProps = {
    align: 'flex-start'
}
export default Grid
export {Grid}