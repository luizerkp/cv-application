import { Component } from 'react';
import styles from '../../styles/ResumeForms.module.css';
import Icon from '@mdi/react';
import { mdiTrashCanOutline, mdiPlus } from '@mdi/js';

const jobResponsabilitiesPlaceholderText = "Job Description: start line with a dash ( - ) if you want to add bullet points; see below:\n-First bullet point\n-Second bullet point\n-Third bullet point";

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

  // update state if props change, i.e. if use clicks to load sample resume
  componentDidUpdate(prevProps) {
    if (prevProps.experience !== this.props.experience) {
      this.setState({
        experience: this.props.experience,
      });
    }
  }

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
    
    // filter out any empty experience objects
    const formData = experience.filter((experienceItem) =>
      Object.values(experienceItem).every((value) => value !== "")
    );
    
    this.props.onSubmit(formData)
  };

  addExperience = () => {
    this.setState((prevState) => ({
      // Add an empty experience object
      experience: [...prevState.experience, this.generateEmptyExperience()], 
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
      <form className={styles['form-container']} onSubmit={this.handleSubmit}>
        <div>
          {experience.map((experienceItem, idx) => (
            <div className={styles['input-field-group']} key={idx}>
              <div>
                <label htmlFor={`experience${idx}`}>Company</label>
                <input
                  type="text"
                  id={`experience${idx}`}
                  name= 'company'
                  value={experienceItem.company ?? ''}
                  placeholder="Company Name"
                  onChange={(event) => this.handleInputChange(event, idx)}
                />                
              </div>
              <div>
                <label htmlFor={`title${idx}`}>Job Tittle:</label>
                <input
                  type="text"
                  id={`title${idx}`}
                  name= 'title'
                  value={experienceItem.title ?? ''}
                  placeholder="Job Tittle"
                  onChange={(event) => this.handleInputChange(event, idx)}
                />                
              </div>
              <div>
                <label htmlFor={`startDate${idx}`}>Start Date:</label>
                <input
                  type="text"
                  id={`startDate${idx}`}
                  name= 'startDate'
                  value={experienceItem.startDate ?? ''}
                  placeholder="Start Date"
                  onChange={(event) => this.handleInputChange(event, idx)}
                />                
              </div>
              <div>
                <label htmlFor={`endDate${idx}`}>End Date:</label>
                <input
                  type="text"
                  id={`endDate${idx}`}
                  name= 'endDate'
                  value={experienceItem.endDate ?? ''}
                  placeholder="End Date (or Current)"
                  onChange={(event) => this.handleInputChange(event, idx)}
                />                
              </div>
              <div>
                <label htmlFor={`companyLocation${idx}`}>Company Location:</label>
                <input
                  type="text"
                  id={`companyLocation${idx}`}
                  name= 'companyLocation'
                  value={experienceItem.companyLocation ?? ''}
                  placeholder="Company Location"
                  onChange={(event) => this.handleInputChange(event, idx)}
                />                
              </div>              
              <div className={styles['text-box']}>
                <label htmlFor={`responsabilities${idx}`}>Job Description:</label>
                <textarea
                  type="text"
                  id={`responsabilities${idx}`}
                  name="responsabilities"
                  value={experienceItem.responsabilities ?? ''}
                  placeholder= {jobResponsabilitiesPlaceholderText}
                  onChange={(event) => this.handleInputChange(event, idx)}
                />                
              </div>
            </div>
          ))}
        </div>
        <div className= {styles['add-remove-div']}>
          <div className= {styles['add-div']} datatype="addExperience" onClick={this.addExperience}>
            <Icon path={mdiPlus} size={1} />
            Add Experience
          </div>
          {experience.length > 1 && (
            // Only show remove button if there is at least one skill input
            <div className= {styles['remove-div']} datatype="removeExperience" onClick={this.removeExperience}>
              <Icon path={mdiTrashCanOutline} size={1} />
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