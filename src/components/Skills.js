import { Component } from 'react';
import styled from 'styled-components';

const StyledSkillsDiv = styled.div` {
display: flex;
flex-direction: column;
align-items: baseline;
margin: 0 .5rem;
padding: 1rem;
gap: .5rem;
}`;

const SyledSkillPara = styled.p` {
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
}`;


const defaultSkills = [
  "Product Management",
  "Product Strategy",
  "User Experience Design",
  "Project Management",
  "Team Leadership",
  "Market Research",
  "Customer Development",
  "Agile Methodologies",
  "Scrum",
  "Kanban",
  "Jira",
  "Confluence",
  "Figma",
];

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: [...defaultSkills],
    };
  }
  render() {
    return (
      <StyledSkillsDiv>
        {this.state.skills.map((skill, idx) => (
          <SyledSkillPara key={idx}>{skill}</SyledSkillPara>
        ))}
      </StyledSkillsDiv>
    );
  }
}

export default Skills;