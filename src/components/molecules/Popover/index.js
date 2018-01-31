import React, { Component, ClientRect } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { prop, ifProp, switchProp } from 'styled-tools'

import * as m from '../../styles/mixins'
import * as a from './popover.styles'


const StyledPopover = styled.div`
	position: relative;
	overflow: visible;
	cursor: pointer;
	.spanElem {
		position: relative;
	}
`

const PopContainer = styled.div`
	position: absolute;
	display: ${ifProp('inactive', 'none', 'flex')};
	align-items: center;
	z-index: 9999;
	width: 288px;
	min-height: 86px;
	padding: 20px;
	box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.1);
  	border: solid 1px #f5f5f5;
	background: #FFFFFF;
	color: #222;
	
	.inactive {
		display: none;
	}

	${switchProp('placement', {
		bottom: css`top: calc(100% + 10px);left: 0; 
			margin-left: calc(-1 * ${prop('position.xPos')});
			${a.arrowBottom}`,
		top: css`bottom: calc(100% + 10px);left: 0; 
			margin-left: calc(-1 * ${prop('position.xPos')});
			${a.arrowTop}`,
		left: css``
	})}

`

const PopContent = props => (
	<div>{props.children}</div>
)

class Popover extends Component {
	constructor(props) {
		super(props)
		this.handleOutsideClick = this.handleOutsideClick.bind(this);
		this.state = {
			inactive: true,
			xPos: 0,
			yPos: 0,
			pWidth: 0,
			pHeight: 0,
			cWidth: 0,
			cHeight: 0
		}
	}

	toggle() {
		if (this.state.inactive) {
			document.addEventListener('click', this.handleOutsideClick, false);
		}
		else {
		document.removeEventListener('click', this.handleOutsideClick, false);
		}
	
		
		this.setState({
			inactive: !this.state.inactive
		});
	}

	handleOutsideClick(e) {
		if (this.node.contains(e.target)) {
		  return;
		}
		this.toggle();
	  }
	componentDidMount(){
		var divParent = ReactDOM
		.findDOMNode(this.refs['popover'])
		.getBoundingClientRect()
		var divChild = ReactDOM
		.findDOMNode(this.refs['pop'])
		.getBoundingClientRect()

		let xp, yp = 0
		//console.log(divParent, divChild)
		
		if(divParent.x < divParent.width && divParent.width < divParent.width)
			xp = 0
		else 
			xp = (divChild.width / 2)

		if(divParent.y < divParent.height && divParent.height < divParent.height)
			yp = 0
		else yp = (divParent.height / 2) - (divChild.height / 2)
		//console.log(childSz)
		this.setState({
			xPos: xp+'px',
			yPos: yp+'px'})

			
	}

    render() {
		let p = this.props
		
      	return (
			<StyledPopover  overlay={PopContent} >
				<span ref="popover" className="spanElem" onClick={this.toggle.bind(this)}>
				{p.children[0]}
				<PopContainer ref='pop'
					inactive={this.state.inactive}
					placement={p.placement}
					position={{
						xPos: this.state.xPos,
						yPos: this.state.yPos,
						pWidth: this.state.pWidth,
						pHeight: this.state.pHeight,
						cWidth: this.state.cWidth,
						cHeight: this.state.cHeight
				}}>{p.children[1]}</PopContainer>
				</span>

				
			</StyledPopover>
      	);
    }
  }

Popover.propTypes = {
	placement: PropTypes.oneOf(['bottom', 'top', 'left', 'right']).isRequired,
	inactive: PropTypes.bool
}

Popover.defaultProps = {
	placement: 'bottom',
	inactive: true
}

export { Popover, PopContent }
export default Popover
