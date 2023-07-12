import { useState, useEffect } from 'react';
import styles from '../../styles/ResumeForms.module.css';
import Icon from '@mdi/react';
import { mdiTrashCanOutline, mdiPlus } from '@mdi/js';

const jobResponsabilitiesPlaceholderText = "Job Description: start line with a dash ( - ) if you want to add bullet points; see below:\n-First bullet point\n-Second bullet point\n-Third bullet point";

const ExperienceForm = (props) => {  
  const generateEmptyExperience = () => {
    return {
      company: "",
      title: "",
      companyLocation: "",
      startDate: "",
      endDate: "",
      responsabilities: "",
    };
  };

  const [experience, setExperience] = useState(props.experience || [generateEmptyExperience()]);

  // update state if props change, i.e. if use clicks to load sample resume
  useEffect(() => {
    setExperience(props.experience);
  }, [props.experience]);

  const handleInputChange = (event, idx) => {
    const { name, value } = event.target;
    const updatedExperience = [...experience];
    updatedExperience[idx][name] = value;
    setExperience(updatedExperience);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    // filter out any empty experience objects
    const formData = experience.filter((experienceItem) =>
      Object.values(experienceItem).every((value) => value !== "")
    );
    
    props.onSubmit(formData)
  };

  const addExperience = () => {
    setExperience((prevState) => {
      console.log(prevState);
      // Add an empty experience object
      return [...prevState, generateEmptyExperience()];
    });
  };

  const removeExperience = () => {
    setExperience((prevState) => {
      const updatedExperience = [...prevState];
      updatedExperience.pop();
      return updatedExperience;
    });
  };

  return (
    console.log(experience),
    <form className={styles['form-container']} onSubmit={handleSubmit} autoComplete='on'>
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
                onChange={(event) => handleInputChange(event, idx)}
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
                onChange={(event) => handleInputChange(event, idx)}
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
                onChange={(event) => handleInputChange(event, idx)}
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
                onChange={(event) => handleInputChange(event, idx)}
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
                onChange={(event) => handleInputChange(event, idx)}
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
                onChange={(event) => handleInputChange(event, idx)}
              />                
            </div>
          </div>
        ))}
      </div>
      <div className= {styles['add-remove-div']}>
        <div className= {styles['add-div']} datatype="addExperience" onClick={addExperience}>
          <Icon path={mdiPlus} size={1} />
          Add Experience
        </div>
        {experience.length > 1 && (
          // Only show remove button if there is at least one skill input
          <div className= {styles['remove-div']} datatype="removeExperience" onClick={removeExperience}>
            <Icon path={mdiTrashCanOutline} size={1} />
            Remove Experience
          </div>
        )}
      </div>
      <button type="submit">Continue</button>
    </form>
  );
}

export default ExperienceForm;