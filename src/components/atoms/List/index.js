import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { prop, ifProp, switchProp } from 'styled-tools'

import * as m from '../../styles/mixins'

//Component Styles
const typeList = props => {
    switch(props.type) {
        case 'ol':
        return <ol {...props}>{
            props.children.map((item, index) => <li key={index} onClick={props.onClick}>{item}</li>)
        }</ol>
        break

        default:
        case 'ul':
            return <ul {...props}>{
                props.children.map((item, index) => <li key={index} onClick={props.onClick}>{item}</li>)
            }</ul>
        break
    }
}

const styles = css`
   margin: 0;
   padding: 0;
`

const StyledList = styled(typeList)`
    ${styles}
    ${switchProp('type', {
        ul: css`
            list-style-type: none;
           `,
        ol:  css`
            list-style-type:decimal;
        `
    })}
    & li {
        ${switchProp('direction', {
            vertical: css`
                margin: ${props => props.margin ? `${m.setSizes(props.margin)}` : '12px 5px'};
                display:block;`,
            horizontal:  css`
            margin: ${props => props.margin ? `${m.setSizes(props.margin)}` : '5px 12px'};
            display: inline-block;`
        })}
    }
`

//Component Core
const List = (props) => (
    <StyledList  {...props} />
);



//Component Props
List.propTypes = {
    type: PropTypes.oneOf(['ul', 'ol']),
    direction: PropTypes.oneOf(['vertical', 'horizontal']),
    margin: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
    padding: PropTypes.oneOfType([PropTypes.number, PropTypes.array])
}


export { List }
export default List;
