import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';
import AccordionDomestosSection from "./AccordionDomestosSection";
import { auto } from "@popperjs/core";

const AccordionDomestosTab = styled.div`
    margin: 0 auto;
    margin-bottom:40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;  
    text-align: center;

    a {
        color:#06154b;
        text-decoration: underline;
    }
    a:hover {
        color: #06154b;
        -webkit-text-stroke: 1px #06154b;
        transition: 0.5s;
    }

    @media (max-width: 992px){
      text-align: left;
    }
`;

class AccordionDomestos extends Component {
  static propTypes = {
    allowMultipleOpen: PropTypes.bool,
    children: PropTypes.instanceOf(Object).isRequired,
  };

  static defaultProps = {
    allowMultipleOpen: false,
  };

  constructor(props) {
    super(props);

    const openSections = {};
    
    this.props.children.forEach(child => {
      if (child.props.isOpen) {
        openSections[child.props.label] = true;
      }
    });

    this.state = { openSections };
  }

  onClick = label => {
    const { props: { allowMultipleOpen }, state: { openSections } } = this;

    const isOpen = !!openSections[label];

    if (allowMultipleOpen) {
      this.setState({
        openSections: {
          ...openSections,
          [label]: !isOpen
        }
      });
    } else {
      this.setState({
        openSections: {
          [label]: !isOpen
        }
      });
    }
  };

  render() {
    const { 
      onClick,
      props: { children },
      state: { openSections },
    } = this;

    return (
      <AccordionDomestosTab>
        {children.map(child => (
          <AccordionDomestosSection
            isOpen={!!openSections[child.props.label]}
            label={child.props.label}
            onClick={onClick}
          >
            {child.props.children}
          </AccordionDomestosSection>
        ))}
      </AccordionDomestosTab>
    );
  }
}

export default AccordionDomestos;