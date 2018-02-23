/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';
import {prop, ifProp, switchProp} from 'styled-tools';
import * as mixins from '../../../config';

// Component Styles
const TextType = (props) => {
  switch (props.type) {
    case 'span':
      return <span>{props.children}</span>;
    case 'strong':
      return <strong {...props}>{props.children}</strong>;
    case 'abbr':
      return <abbr {...props}>{props.children}</abbr>;
    case 'legend':
      return <legend {...props}>{props.children}</legend>;
    case 'small':
      return <small {...props}>{props.children}</small>;
    case 'sub':
      return <sub {...props}>{props.children}</sub>;
    case 'sup':
      return <sup {...props}>{props.children}</sup>;
    case 'label':
      return <label {...props}>{props.children}</label>;
    default:
    case 'p':
      return <p>{props.children}</p>;
  }
};

const StyledText = styled(TextType)`
  font-family: ${prop('fontFamily')};
  font-weight: ${props => props.fontWeight && `${mixins.fontWeight(props.fontWeight)}`};
  font-size: ${props => props.fontSize && `${mixins.calcSize(props.fontSize)}`};
  color: ${ifProp('fontColor', prop('fontColor'))};
  text-align:${ifProp('align', prop('align'))};
  line-height: ${ifProp('lineHeight', prop('lineHeight'))};
  ${ifProp('uppercase', 'text-transform: uppercase;')};
  ${ifProp('lowercase', 'text-transform: lowercase;')};
  margin: ${props => props.margin && `${mixins.setSizes(props.margin)}`};
  padding: ${props => props.padding && `${mixins.setSizes(props.padding)}`};
  ${props => props.gradient && `
    font-family: ${ifProp('font.family', prop('font.family'))};
    font-weight: ${props.font.weight && `${mixins.fontWeight(props.font.weight)}`};
    font-size: ${props.font.size && `${mixins.calcSize(props.font.size)}`};
    background: -webkit-linear-gradient(${mixins.gradient(props.gradient.direction, props.gradient.colors)});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background: -moz-linear-gradient(${mixins.gradient(props.gradient.direction, props.gradient.colors)});
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;`};
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
  })};
  ${switchProp('type', {
    span: css`display: inline-block;`,
    strong: css`font-weight: 600;`,
    abbr: css`cursor: help;`,
    legend: css`display: inline-block;margin: 0; padding: 0;`,
    small: css`font-size: ${mixins.calcSize(-1)};text-transform: uppercase;`,
    sub: css`font-size: ${mixins.calcSize(-2)};`,
    sup: css`font-size: ${mixins.calcSize(-2)};`,
    p: css`width: 100%;`,
    label: css`cursor: pointer;`
  })}`;

// Component Core
const Text = (props) => {
  return <StyledText {...props}>{props.children}</StyledText>;
};
// Component Props
Text.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
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
  fontColor: PropTypes.string
};

Text.defaultProps = {
  type: 'p',
  align: 'left',
  fontFamily: 'Simplon',
  fontWeight: 'Regular',
  fontSize: 1,
  fontColor: '#222222',
  themeColor: 'primary',
  margin: 0,
  padding: 0,
  lineHeight: 0
};

export default Text;
export {Text};
