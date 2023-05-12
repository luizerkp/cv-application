import { Component } from 'react';
import styles from '../styles/EducationForm.module.css';

const emptyEducation = {
  school: '',
  degree: '',
  startDate: '',
  endDate: '',
  graduated: false,
};

class EducationForm extends Component {
  constructor(props) {
    super(props);
    // console.log(props.skills);
    this.state = {
      education: props.education || [ emptyEducation ],
    };
  };

  handleInputChange = (event, idx) => {
    const { name } = event.target;
    const { education } = this.state;
    const updatedEducation = [...education];

    if (event.target.type === 'checkbox') {
      updatedEducation[idx][name] = event.target.checked;
    } else {
      updatedEducation[idx][name] = event.target.value;
    }

    this.setState({
      education: updatedEducation,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { education } = this.state;
    const formData = education.filter((education) => JSON.stringify(education) !== JSON.stringify(emptyEducation));

    formData.length > 0 ? this.props.onSubmit(formData) : this.props.onSubmit([ emptyEducation ]);
  };

  addEducation = () => {
    this.setState((prevState) => ({
      education: [...prevState.education, emptyEducation], // Add an empty education object
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
      <form onSubmit={this.handleSubmit}>
        <div className={styles['education-div']}>
          {education.map((school, idx) => (
            <div key={idx}>
              <label htmlFor="education">School:</label>
              <input
                type="text"
                id={`education${idx}`}
                name= 'school'
                value={school.name}
                placeholder="School"
                onChange={(event) => this.handleInputChange(event, idx)}
              />
              <label htmlFor="degree">Degree or Diploma:</label>
              <input
                type="text"
                id={`degree${idx}`}
                name= 'degree'
                value={school.degree}
                placeholder="Degree"
                onChange={(event) => this.handleInputChange(event, idx)}
              />
              <label htmlFor="startDate">Start Date:</label>
              <input
                type="text"
                id={`startDate${idx}`}
                name= 'startDate'
                value={school.startDate}
                placeholder="Start Date"
                onChange={(event) => this.handleInputChange(event, idx)}
              />
              <label htmlFor="endDate">End Date:</label>
              <input
                type="text"
                id={`endDate${idx}`}
                name= 'endDate'
                value={school.endDate}
                placeholder="End Date"
                onChange={(event) => this.handleInputChange(event, idx)}
              />
              <label htmlFor="graduated">Graduated?</label>
              <input
                type="checkbox"
                id={`graduated${idx}`}
                name= 'graduated'
                checked={school.graduated}
                onChange={(event) => this.handleInputChange(event, idx)}
              />
            </div>
          ))}
        </div>
        <div>
          <div datatype="addEducation" onClick={this.addEducation}>
            Add Education
          </div>
          {education.length > 0 && ( // Only show remove button if there is at least one skill input
            <div datatype="removeEducation" onClick={this.removeEducation}>
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