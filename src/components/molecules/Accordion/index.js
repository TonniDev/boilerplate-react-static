import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { prop, ifProp, switchProp } from 'styled-tools'

import Title from './../../atoms/Title'
import Icon from './../../atoms/Icon'
import AccorItem from './accorItem'
import * as m from '../../styles/mixins'

//Component Styles
const mapItems = (props) => {
    let items = props.children
    let container = ''

    if(items.length > 1)
        container = <div {...props}>{
            items.map((item, index) => 
            <AccorItem 
                themeColor={props.themeColor}
                themeHeader={props.themeHeader}
                id={`${props.name}_${index}`}
                title={item.props.title}
                toggle={props.toggle}
                name={props.name}>{item}</AccorItem>)
        }</div>
        else
        container = <div {...props}>
            <AccorItem 
                themeColor={props.themeColor}
                themeHeader={props.themeHeader}
                id={`_${props.name}_`}
                title={items.props.title}
                toggle={props.toggle}
                name={props.name}>{items.props.children}</AccorItem>
        </div>
    return container
}

const StyledAccordion = styled.div`
margin: 0 -1px;
    ${props => props.theme && `
        border-left: 1px solid ${props.theme.colors.link};
        border-right: 1px solid ${props.theme.colors.link};
    `}
`

//Component Props
const Accordion = props => (
    <StyledAccordion {...props}>
        {mapItems(props)}
    </StyledAccordion>
)

Accordion.propTypes = {
    themeColor: PropTypes.oneOf(['primary', 'secondary', 'success', 'error', 'warning', 'info', 'light', 'dark', 'link', 'white', 'black']),
    themeHeader: PropTypes.bool,
    toggle: PropTypes.bool
}

Accordion.defaultProps = {
    themeColor: 'primary',
    themeHeader: false,
    toggle: false
}
export {Accordion}
export default Accordion
