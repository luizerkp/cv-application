import { Component } from 'react';
import styles from '../styles/ResumeForms.module.css';
import Icon from '@mdi/react';
import { mdiTrashCanOutline, mdiPlus } from '@mdi/js';


class EducationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      education: props.education || [ this.generateEmptyEducation() ],
    };
  };

  generateEmptyEducation() {
    return {
      school: '',
      degree: '',
      startDate: '',
      endDate: '',
      schoolLocation: '',
    };
  };

  handleInputChange = (event, idx) => {
    const { name } = event.target;
    const { education } = this.state;
    const updatedEducation = [...education];
    updatedEducation[idx][name] = event.target.value;

    this.setState({
      education: updatedEducation,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { education } = this.state;
    const formData = education.filter((educationItem) =>
      Object.values(educationItem).some((value) => value !== "")
    );
    formData.length > 0 && this.props.onSubmit(formData);
  };

  addEducation = () => {
    this.setState((prevState) => ({
      education: [...prevState.education, this.generateEmptyEducation()], // Add an empty education object
    }));
  };

  removeEducation = () => {
    this.setState((prevState) => {
      const updatedEducation = [...prevState.education];
      updatedEducation.pop();

      return {
        education: updatedEducation,
      };
    });
  };

  render() {
    const { education } = this.state;
    return (
      <form className={styles['form-container']}  onSubmit={this.handleSubmit}>
        <div>
          {education.map((school, idx) => (
            <div className={styles['input-field-group']} key={idx}>
              <div>
                <label htmlFor={`education${idx}`}>School:</label>
                <input
                  type="text"
                  id={`education${idx}`}
                  name= 'school'
                  value={school.name}
                  placeholder="School"
                  onChange={(event) => this.handleInputChange(event, idx)}
                />                
              </div>
              <div>
                <label htmlFor={`degree${idx}`}>Degree or Diploma:</label>
                <input
                  type="text"
                  id={`degree${idx}`}
                  name= 'degree'
                  value={school.degree}
                  placeholder="Degree"
                  onChange={(event) => this.handleInputChange(event, idx)}
                />                
              </div>
              <div>
                <label htmlFor={`startDate${idx}`}>Start Date:</label>
                <input
                  type="text"
                  id={`startDate${idx}`}
                  name= 'startDate'
                  value={school.startDate}
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
                  value={school.endDate}
                  placeholder="End Date"
                  onChange={(event) => this.handleInputChange(event, idx)}
                />                
              </div>
              <div>
                <label htmlFor={`endDate${idx}`}>School Location</label>
                <input
                  type="text"
                  id={`schoolLocation${idx}`}
                  name= 'schoolLocation'
                  value={school.schoolLocation}
                  placeholder="School Location"
                  onChange={(event) => this.handleInputChange(event, idx)}
                />                
              </div>
            </div>
          ))}
        </div>
        <div className= {styles['add-remove-div']}>
          <div className= {styles['add-div']} datatype="addEducation" onClick={this.addEducation}>
          <Icon path={mdiPlus} size={1} />
            Add Education
          </div>
          {education.length > 0 && ( // Only show remove button if there is at least one skill input
            <div className= {styles['remove-div']} 
            datatype="removeEducation" onClick={this.removeEducation}>
              <Icon path={mdiTrashCanOutline} size={1} />
              Remove Education
            </div>
          )}
        </div>
        <button type="submit">Continue</button>
      </form>
    );
  }
}

export default EducationForm;