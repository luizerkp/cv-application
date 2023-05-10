import { Component } from 'react';
// import styled from 'styled-components';

class SkillsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skillCount: 1,
      skills: [],
    };
  }
  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const { skills } = this.state;
    const formData = { skills };
    this.props.onSubmit(formData);
    this.setState({ skills: '' });
  };
  render() {
    const { skills } = this.state;
    return (
      <form>
        <div>
          <input
            type="text"
            key={this.state.skillCount}
            id={`Skill#${this.state.skillCount}`}
            name={`Skill#${this.state.skillCount}`}
            value={skills}
            placeholder= {`Skill#${this.state.skillCount}`}
            onChange={this.handleInputChange}
          />
        </div>
        <div datatype='addSkill' onClick={
          () => {
            this.setState({ skillCount: this.state.skillCount + 1 });

          }
        }>Add Skill</div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default SkillsForm;