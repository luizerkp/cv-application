import { useState, useEffect } from 'react';
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

const SkillsForm = ({ skills, onSubmit, updateOptionalComponents, showSkills }) => {
  const [newSkills, setNewSkills] = useState(skills || ['']);

  // update state if props change, i.e. if use clicks to load sample resume
  useEffect(() => {
    setNewSkills(newSkills);
  }, [newSkills]);

  const handleInputChange = (event, idx) => {
    const { value } = event.target;
    setNewSkills((prevState) => {
      const updatedSkills = [...prevState.newSkills];
      updatedSkills[idx] = value;
      return {
        newSkills: updatedSkills,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // filter out any empty skills
    const formData = newSkills.filter((newSkill) => newSkill !== '');
    onSubmit(formData);
  };

  const addSkill = () => {
    setNewSkills((prevState) => ({
      // Add an empty skill
      newSkills: [...prevState.newSkills, ''], 
    }));
  };

  const removeSkill = () => {
    setNewSkills((prevState) => {
      const updatedSkills = [...prevState.newSkills];
      updatedSkills.pop();

      return {
        newSkills: updatedSkills,
      };
    });
  };

  const getRandomPlaceholder = () => {
    return skillsPlaceholder[Math.floor(Math.random() * skillsPlaceholder.length)];
  }

  const setShowSkills = () => {
    updateOptionalComponents('showSkills');
  }

  return (
    <form className={styles['form-container']} onSubmit={handleSubmit} autoComplete='on'>
      <p className={styles['show-component']} onClick={setShowSkills}>
        <Icon path={showSkills ? mdiEyeOff : mdiEye} size={1} /> 
        { showSkills ? "Hide" : "Show" } Skills         
      </p>        
      <div className={styles['input-field-group']}>
        {newSkills.map((newSkill, idx) => (
          <div key={idx}> 
            <label htmlFor={`Skill#${idx}`}>Skill {idx + 1}</label>            
            <input
              type="text"
              id={`Skill#${idx}`}
              name={`Skill#${idx}`}
              value={newSkill ?? ''}
              placeholder={`e.g. ${getRandomPlaceholder()}`}
              onChange={(e) => { handleInputChange(e, idx) }}
            />
          </div>
        ))}
      </div>
      <div className= {styles['add-remove-div']}>
        <div className= {styles['add-div']} datatype="addSkill" onClick={addSkill}>
          <Icon path={mdiPlus} size={1} />
          Add Skill
        </div>
        {newSkills.length > 1 && ( 
          // Only show remove button if there is at least one skill input
          <div className= {styles['remove-div']} 
          datatype="removeSkill" onClick={removeSkill}>
            <Icon path={mdiTrashCanOutline} size={1} />
            Remove Skill
          </div>
        )}
      </div>
      <button type="submit">Continue</button>
    </form>
  );
}

export default SkillsForm;