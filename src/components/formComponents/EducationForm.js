import { useState, useEffect } from 'react';
import styles from '../../styles/ResumeForms.module.css';
import Icon from '@mdi/react';
import { mdiTrashCanOutline, mdiPlus } from '@mdi/js';

const EducationForm = ({ education, onSubmit }) => {
  const generateEmptyEducation = () => {
    return {
      schoolName: '',
      degree: '',
      startDate: '',
      endDate: '',
      schoolLocation: '',
    };
  };

  const [newEducation, setNewEducation] = useState(education || [generateEmptyEducation()]);

  // update state if props change, i.e. if use clicks to load sample resume
  useEffect(() => {
    setNewEducation(newEducation);
  }, [newEducation]);

  const handleInputChange = (event, idx) => {
    const { name, value} = event.target;
    const updatedEducation = [...newEducation];
    updatedEducation[idx][name] = value;

    setNewEducation({
      newEducation: updatedEducation,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // filter out any empty education objects
    const formData = newEducation.filter((newEducationItem) =>
      Object.values(newEducationItem).every((value) => value !== "")
    );
    onSubmit(formData);
  };

  const addEducation = () => {
    setNewEducation((prevState) => ({
      // Add an empty education object
      newEducation: [...prevState.newEducation, generateEmptyEducation()], 
    }));
  };

  const removeEducation = () => {
    setNewEducation((prevState) => {
      const updatedEducation = [...prevState.newEducation];
      updatedEducation.pop();

      return {
        newEducation: updatedEducation,
      };
    });
  };

  return (
    <form className={styles['form-container']}  onSubmit={handleSubmit} autoComplete='on'>
      <div>
        {newEducation.map((school, idx) => (
          <div className={styles['input-field-group']} key={idx}>
            <div>
              <label htmlFor={`newEducation${idx}`}>School:</label>
              <input
                type="text"
                id={`newEducation${idx}`}
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
        {newEducation.length > 1 && (
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