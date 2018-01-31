import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';
import {prop, ifProp, switchProp} from 'styled-tools';
import Link from './../../atoms/Link';
import Button from './../../atoms/Button';
import List from './../../atoms/List';
import Text from './../../atoms/Text';
import Title from './../../atoms/Title';
import Icon from './../../atoms/Icon';
import TabItem from './tab.item';
import * as m from '../../styles/mixins';
import * as styles from './tab.styles';

//Component Styles


const StyledTab = styled.div`
padding: 0;
    .tabs-labels {
        box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1);
        height: 60px;
        li {
            margin: 0;
            padding-top: 22px;
            cursor:pointer;
            .active {
              border-bottom: 2px solid #d82482;
                * {
                    font-weight: 600;

                }
            }
            a {
              padding: 0 24px 16px 24px;
              line-height: 1.4;
            }
        }
    }
`;

const TabContent = styled.div`
padding: 15px;
`;

//Component Props
class Tab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0
    };
  }

  getDefaultProps() {
    return {selected: 0};
  }

  getInitialState() {
    return {selected: this.props.selected};
  }

  renderTitles() {
    function labels(child, index) {
      let activeClass = (this.state.selected === index ? 'active' : '');
      return (
        <Link onClick={this.handleClick.bind(this, index)} buttonStyle='link' className={activeClass}>
          <Text type='span'
                themeColor={activeClass ? 'primary' : null}
                uppercase>{child.props.label}</Text>
        </Link>
      );
    }

    return (
      <List direction='horizontal' className="tabs-labels">
        {this.props.children.map(labels.bind(this))}
      </List>
    );
  }

  renderContent() {
    return (
      <TabContent>
        {this.props.children[this.state.selected]}
      </TabContent>
    );
  }

  handleClick(index, event) {
    event.preventDefault();
    this.setState({
      selected: index
    });
  }

  render() {
    return (
      <StyledTab>
        {this.renderTitles()}
        {this.renderContent()}
      </StyledTab>
    );
  }
}

Tab.PropTypes = {
  selected: React.PropTypes.number,
  children: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.element
  ]).isRequired
};

Tab.defaultProps = {
  selected: 0
};

export {Tab, TabItem};
export default Tab;
