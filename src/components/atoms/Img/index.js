import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { prop, ifProp, switchProp } from 'styled-tools'

import * as m from '../../styles/mixins'

//Component Styles
const styles = css`
    margin: 0 20px;
`

const StyledImg = styled.img`
    ${styles}
    ${ifProp('thumb', css`width: 120px; height: 120px;`)}
    ${ifProp('icon', css`width: 22px; height: 22px;`)}
    margin: ${props => props.margin &&`${m.setSizes(props.margin)}`};
`

//Component Core
const Img = (props) => (
    <StyledImg {...props} />
);


   
//Component Props
Img.propTypes = {
    thumb: PropTypes.bool,
    icon: PropTypes.bool,
    margin: PropTypes.oneOfType([PropTypes.number, PropTypes.array])
}


export { Img }
export default Img;