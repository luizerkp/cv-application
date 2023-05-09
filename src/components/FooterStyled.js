import React, { Component } from "react";
import styled from "styled-components";
import githubLogo from "../imgs/GitHubMarkSmallLight.png";

// TODO Ads media queries for mobile and tablet
const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  height: 2.5rem;
  gap: 8px;
  font-weight: bold;
  color: white;
  background-color: rgb(5, 6, 45);
  padding-top: 0.2rem;
  width: 100%;
`;

const GradientText = styled.p`
  background-image: linear-gradient(144deg, #af40ff, #5b42f3 50%, #00ddeb);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

const GitHubLogo = styled.img`
  padding-left: 8px;
  padding-right: 8px;
`;

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date().getFullYear()
    };
  }

  render() {
    return (
      <FooterContainer>
        <GradientText>
          Copyright © {this.state.date}
          Luis Tamarez
        </GradientText>
        <a href="https://github.com/luizerkp" target="_blank" rel="noopener noreferrer">
          <GitHubLogo src={githubLogo} alt="GitHub logo" />
        </a>
        <GradientText>All Rights Reserved</GradientText>
      </FooterContainer>
    );
  }
}

export default Footer;
