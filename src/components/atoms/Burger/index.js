import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { css, extend } from 'styled-components'
import { prop, ifProp, switchProp } from 'styled-tools'

import * as m from '../../styles/mixins'
import Button from '../Button'
import styles from './burger.styles'

//Component Styles
const StyledBurger = styled.div`
    ${styles.BurgerStyles}
    margin: ${props => props.margin &&`${m.setSizes(props.margin)}`};
    padding: ${props => props.padding &&`${m.setSizes(props.padding)}`};
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    & .hamburger-inner {
        margin-right: 13px;
        &,  &:after, &:before {
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
        }
    } 
`

const BurgerButton = styled.div`
    display: inline-flex;
    cursor: pointer;
    position: relative;
    min-width: 24px;
    min-height: 24px;
`

class Burger extends Component {
    constructor(props) {
        super(props)
        this.state = {
            active: false
        }
    }

    handleClick() {
        let currentState = this.state.active;
        this.setState({ active: !currentState });
    }

    render() {
        return(
            <BurgerButton onClick={this.handleClick.bind(this)}>
                <StyledBurger 
                    {...this.props}
                    className={`${this.state.active && 'is-active'} hamburger hamburger--${this.props.type}`}
                    >
                    <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                    </span>
                    {this.props.children}
                </StyledBurger> 
            </BurgerButton>
               
            
            
        )
    }
}

Burger.PropTypes = {
    themeColor: PropTypes.oneOf(['primary', 'secondary', 'success', 'error', 'warning', 'info', 'light', 'dark', 'link', 'white', 'black']),
    type: PropTypes.string,
    margin: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
    padding: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
    width: PropTypes.number,
    weight: PropTypes.number,
    space: PropTypes.number,
    burgerSize: PropTypes.number
    
}

Burger.defaultProps = {
    themeColor: 'primary',
    type: 'spin',
    margin: 3,
    padding: 0,
    width: 18,
    weight: 2,
    space: -3,
    burgerSize: 24
}

export {Burger}
export default Burger