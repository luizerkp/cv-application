import { Component } from "react";

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: props.skills,
    };
  }
  componentDidUpdate(prevProps) {
    if (prevProps.skills !== this.props.skills) {
      // console.log('Skills componentDidUpdate');
      // console.log(this.props.skills);
      this.setState({
        skills: this.props.skills,
      });
    }
  }
  render() {
    const { skills } = this.state;
    if (skills.length === 0) return null;
    return (
      <div>
        <h2>Skills</h2>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Skills;