import { useState, useEffect } from 'react';
import styles from '../../styles/ResumeForms.module.css';
import Icon from '@mdi/react';
import { mdiTrashCanOutline, mdiPlus } from '@mdi/js';

const EducationForm = (props) => {
  const generateEmptyEducation = () => {
    return {
      schoolName: '',
      degree: '',
      startDate: '',
      endDate: '',
      schoolLocation: '',
    };
  };

  const [education, setEducation] = useState(props.education || [generateEmptyEducation()]);

  // update state if props change, i.e. if use clicks to load sample resume
  useEffect(() => {
    setEducation(props.education);
  }, [props.education]);

  const handleInputChange = (event, idx) => {
    const { name, value} = event.target;
    const updatedEducation = [...education];
    updatedEducation[idx][name] = value;
    setEducation(updatedEducation);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // filter out any empty education objects
    const formData = education.filter((educationItem) =>
      Object.values(educationItem).every((value) => value !== "")
    );

    props.onSubmit(formData);
  };

  const addEducation = () => {
    setEducation((prevState) => {
      // Add an empty education object
      return [...prevState, generateEmptyEducation()]; 
    });
  };

  const removeEducation = () => {
    setEducation((prevState) => {
      const updatedEducation = [...prevState.education];
      updatedEducation.pop();
      return updatedEducation;
    });
  };

  return (
    <form className={styles['form-container']}  onSubmit={handleSubmit} autoComplete='on'>
      <div>
        {education.map((school, idx) => (
          <div className={styles['input-field-group']} key={idx}>
            <div>
              <label htmlFor={`education${idx}`}>School:</label>
              <input
                type="text"
                id={`education${idx}`}
                name= 'schoolName'
                value={school.schoolName ?? ''}
                placeholder="School Name"
                onChange={(event) => handleInputChange(event, idx)}
              />                
            </div>
            <div>
              <label htmlFor={`degree${idx}`}>Degree or Diploma:</label>
              <input
                type="text"
                id={`degree${idx}`}
                name= 'degree'
                value={school.degree ?? ''}
                placeholder="Degree"
                onChange={(event) => handleInputChange(event, idx)}
              />                
            </div>
            <div>
              <label htmlFor={`startDate${idx}`}>Start Date:</label>
              <input
                type="text"
                id={`startDate${idx}`}
                name= 'startDate'
                value={school.startDate ?? ''}
                placeholder="Start Date"
                onChange={(event) => handleInputChange(event, idx)}
              />                
            </div>
            <div>
              <label htmlFor={`endDate${idx}`}>End Date:</label>
              <input
                type="text"
                id={`endDate${idx}`}
                name= 'endDate'
                value={school.endDate ?? ''}
                placeholder="End Date"
                onChange={(event) => handleInputChange(event, idx)}
              />                
            </div>
            <div>
              <label htmlFor={`endDate${idx}`}>School Location</label>
              <input
                type="text"
                id={`schoolLocation${idx}`}
                name= 'schoolLocation'
                value={school.schoolLocation ?? ''}
                placeholder="School Location"
                onChange={(event) => handleInputChange(event, idx)}
              />                
            </div>
          </div>
        ))}
      </div>
      <div className= {styles['add-remove-div']}>
        <div className= {styles['add-div']} datatype="addEducation" onClick={addEducation}>
        <Icon path={mdiPlus} size={1} />
          Add Education
        </div>
        {education.length > 1 && (
          // Only show remove button if there is at least one skill input
          <div className= {styles['remove-div']} 
          datatype="removeEducation" onClick={removeEducation}>
            <Icon path={mdiTrashCanOutline} size={1} />
            Remove Education
          </div>
        )}
      </div>
      <button type="submit">Continue</button>
    </form>
  );
}

export default EducationForm;