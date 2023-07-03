import { Component } from 'react';
import styles from '../../styles/ResumeForms.module.css';
import Icon from '@mdi/react';
import { mdiTrashCanOutline, mdiPlus, mdiEye, mdiEyeOff } from '@mdi/js';

const skillsPlaceholder = [
  "Leadership",
  "Communication",
  "Problem-solving",
  "Teamwork",
  "Adaptability",
  "Time management",
  "Critical thinking",
  "Creativity",
  "Collaboration",
  "Decision-making",
  "Analytical skills",
  "Project management",
  "Technical skills",
  "Customer service",
  "Sales and negotiation",
  "Data analysis",
  "Research skills",
  "Presentation skills",
  "Attention to detail",
  "Multilingualism"
];

class SkillsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: props.skills || [''],
    };
  };

  // update state if props change, i.e. if use clicks to load sample resume
  componentDidUpdate(prevProps) {
    if (prevProps.skills !== this.props.skills) {
      this.setState({
        skills: this.props.skills,
      });
    }
  }

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

    // filter out any empty skills
    const formData = skills.filter((skill) => skill !== '');
    this.props.onSubmit(formData);
  };

  addSkill = () => {
    this.setState((prevState) => ({
      // Add an empty skill
      skills: [...prevState.skills, ''], 
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

  getRandomPlaceholder() {
    return skillsPlaceholder[Math.floor(Math.random() * skillsPlaceholder.length)];
  }

  setShowSkills = () => {
    this.props.updateOptionalComponents('showSkills');
  }

  render() {
    const { skills } = this.state;
    const { showSkills } = this.props;
    return (
      <form className={styles['form-container']} onSubmit={this.handleSubmit}>
        <p className={styles['show-component']} onClick={this.setShowSkills}>
          <Icon path={showSkills ? mdiEyeOff : mdiEye} size={1} /> 
          { showSkills ? "Hide" : "Show" } Skills         
        </p>        
        <div  className={styles['input-field-group']}>
          {skills.map((skill, idx) => (
            <div key={idx}> 
              <label htmlFor={`Skill#${idx}`}>Skill {idx + 1}</label>            
              <input
                type="text"
                id={`Skill#${idx}`}
                name={`Skill#${idx}`}
                value={skill ?? ''}
                placeholder={`e.g. ${this.getRandomPlaceholder()}`}
                onChange={(e) => { this.handleInputChange(e, idx) }}
              />
            </div>
          ))}
        </div>
        <div className= {styles['add-remove-div']}>
          <div className= {styles['add-div']} datatype="addSkill" onClick={this.addSkill}>
            <Icon path={mdiPlus} size={1} />
            Add Skill
          </div>
          {skills.length > 1 && ( 
            // Only show remove button if there is at least one skill input
            <div className= {styles['remove-div']} 
            datatype="removeSkill" onClick={this.removeSkill}>
              <Icon path={mdiTrashCanOutline} size={1} />
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