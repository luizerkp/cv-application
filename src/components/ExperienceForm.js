import { Component } from 'react';
import styles from '../styles/ExperienceForm.module.css';


class ExperienceForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      experience: props.experience || [this.generateEmptyExperience()],
    };
  };

  generateEmptyExperience() {
    return {
      company: "",
      title: "",
      companyLocation: "",
      startDate: "",
      endDate: "",
      responsabilities: "",
    };
  };

  handleInputChange = (event, idx) => {
    const { name, value } = event.target;
    const { experience } = this.state;
    const updatedExperience = [...experience];
    updatedExperience[idx][name] = value;

    this.setState({
      experience: updatedExperience,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { experience } = this.state;
    const formData = experience.filter((experienceItem) =>
      Object.values(experienceItem).some((value) => value !== "")
    );
    formData.length > 0 && this.props.onSubmit(formData);
  };

  addExperience = () => {
    this.setState((prevState) => ({
      experience: [...prevState.experience, this.generateEmptyExperience()], // Add an empty experience object
    }));
  };

  removeExperience = () => {
    this.setState((prevState) => {
      const updatedExperience = [...prevState.experience];
      updatedExperience.pop();

      return {
        experience: updatedExperience,
      };
    });
  };

  render() {
    const { experience } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className={styles['experience-div']}>
          {experience.map((experienceItem, idx) => (
            <div key={idx}>
              <label htmlFor={`experience${idx}`}>Company</label>
              <input
                type="text"
                id={`experience${idx}`}
                name= 'company'
                value={experienceItem.company}
                placeholder="Company Name"
                onChange={(event) => this.handleInputChange(event, idx)}
              />
              <label htmlFor={`title${idx}`}>Job Tittle:</label>
              <input
                type="text"
                id={`title${idx}`}
                name= 'title'
                value={experienceItem.title}
                placeholder="Job Tittle"
                onChange={(event) => this.handleInputChange(event, idx)}
              />
              <label htmlFor={`companyLocation${idx}`}>Company Location:</label>
              <input
                type="text"
                id={`companyLocation${idx}`}
                name= 'companyLocation'
                value={experienceItem.companyLocation}
                placeholder="Company Location"
                onChange={(event) => this.handleInputChange(event, idx)}
              />
              <label htmlFor={`startDate${idx}`}>Start Date:</label>
              <input
                type="text"
                id={`startDate${idx}`}
                name= 'startDate'
                value={experienceItem.startDate}
                placeholder="Start Date"
                onChange={(event) => this.handleInputChange(event, idx)}
              />
              <label htmlFor={`endDate${idx}`}>End Date:</label>
              <input
                type="text"
                id={`endDate${idx}`}
                name= 'endDate'
                value={experienceItem.endDate}
                placeholder="End Date (or Current)"
                onChange={(event) => this.handleInputChange(event, idx)}
              />
              <label htmlFor={`responsabilities${idx}`}>Job Description</label>
              <textarea
                type="text"
                id={`responsabilities${idx}`}
                name="responsabilities"
                value={experienceItem.responsabilities}
                placeholder= "Job Description"
                onChange={(event) => this.handleInputChange(event, idx)}
              />
            </div>
          ))}
        </div>
        <div>
          <div datatype="addExperience" onClick={this.addExperience}>
            Add Experience
          </div>
          {experience.length > 0 && ( // Only show remove button if there is at least one skill input
            <div datatype="removeExperience" onClick={this.removeExperience}>
              Remove Experience
            </div>
          )}
        </div>
        <button type="submit">Continue</button>
      </form>
    );
  }
}

export default ExperienceForm;