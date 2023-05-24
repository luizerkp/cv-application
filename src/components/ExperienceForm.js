import { Component } from 'react';
import styles from '../styles/ExperienceForm.module.css';

const emptyExperience = {
  company: "",
  title: "",
  startDate: "",
  endDate: "",
  description: "",
};

class ExperienceForm extends Component {
  constructor(props) {
    super(props);
    // console.log(props.skills);
    this.state = {
      experience: props.experience || [ emptyExperience ] ,
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
    const formData = experience.filter((experience) => JSON.stringify(experience) !== JSON.stringify(emptyExperience));

    formData.length > 0 ? this.props.onSubmit(formData) : this.props.onSubmit([ emptyExperience ]);
  };

  addExperience = () => {
    this.setState((prevState) => ({
      experience: [...prevState.experience, emptyExperience], // Add an empty experience object
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
          {experience.map((company, idx) => (
            <div key={idx}>
              <label htmlFor="experience">Company</label>
              <input
                type="text"
                id={`experience${idx}`}
                name= 'company'
                value={company.name}
                placeholder="company name"
                onChange={(event) => this.handleInputChange(event, idx)}
              />
              <label htmlFor="degree">Job Tittle:</label>
              <input
                type="text"
                id={`degree${idx}`}
                name= 'title'
                value={company.degree}
                placeholder="Job Tittle"
                onChange={(event) => this.handleInputChange(event, idx)}
              />
              <label htmlFor="startDate">Start Date:</label>
              <input
                type="text"
                id={`startDate${idx}`}
                name= 'startDate'
                value={company.startDate}
                placeholder="Start Date"
                onChange={(event) => this.handleInputChange(event, idx)}
              />
              <label htmlFor="endDate">End Date:</label>
              <input
                type="text"
                id={`endDate${idx}`}
                name= 'endDate'
                value={company.endDate}
                placeholder="End Date"
                onChange={(event) => this.handleInputChange(event, idx)}
              />
              <label htmlFor="graduated">Job Description</label>
              <textarea
                type="text"
                id={`description${idx}`}
                name="description"
                value={company.description}
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