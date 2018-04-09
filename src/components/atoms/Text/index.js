/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import PropTypes from 'prop-types';
import './index.less';

// Component Styles
const TextType = (props) => {
  switch (props.type) {
    case 'span':
      return <span {...props}>{props.children}</span>;
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
      return <p {...props}>{props.children}</p>;
  }
};

// Component Core
const Text = (props) => {
  return <TextType className="atom__text" {...props}>{props.children}</TextType>;
};
// Component Props
Text.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  type: PropTypes.oneOf(['label', 'span', 'strong', 'abbr', 'legend', 'small', 'sub', 'sup', 'p'])
};

Text.defaultProps = {
  type: 'p'
};

export default Text;
export {Text};
