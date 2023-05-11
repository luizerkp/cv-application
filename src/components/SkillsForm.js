import { Component } from 'react';
import styles from '../styles/SkillsForm.module.css';
// import styled from 'styled-components';

class SkillsForm extends Component {
  constructor(props) {
    super(props);
    // console.log(props.skills);
    this.state = {
      skills: props.skills || [''],
    };
  };

  handleInputChange = (event, idx) => {
    const { value } = event.target;
    this.setState((prevState) => {
      const updatedSkills = [...prevState.skills];
      updatedSkills[idx] = value;
      return {
        skills: updatedSkills,
      };
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { skills } = this.state;
    const formData = skills.filter((skill) => skill !== '');
    const newSkills = JSON.stringify(formData) !== JSON.stringify(this.props.skills);
    formData.length > 0 && newSkills && this.props.onSubmit(formData);
  };

  addSkill = () => {
    this.setState((prevState) => ({
      skills: [...prevState.skills, ''], // Add an empty skill
    }));
  };

  removeSkill = () => {
    this.setState((prevState) => {
      const updatedSkills = [...prevState.skills];
      updatedSkills.pop();

      return {
        skills: updatedSkills,
      };
    });
  };

  render() {
    const { skills } = this.state;
    // console.log(Array.isArray(skills));
    return (
      <form onSubmit={this.handleSubmit}>
        <div className={styles['skills-div']}>
          {skills.map((skill, idx) => (
            <input
              type="text"
              key={idx}
              id={`Skill#${idx}`}
              name={`Skill#${idx}`}
              value={skill}
              placeholder={`Skill#${idx + 1}`}
              onChange={(e) => {
                this.handleInputChange(e, idx)
              }}
            />
          ))}
        </div>
        <div>
          <div datatype="addSkill" onClick={this.addSkill}>
            Add Skill
          </div>
          {skills.length > 0 && ( // Only show remove button if there is at least one skill input
            <div datatype="removeSkill" onClick={this.removeSkill}>
              Remove Skill
            </div>
          )}
        </div>
        <button type="submit">Continue</button>
      </form>
    );
  }
}

export default SkillsForm;