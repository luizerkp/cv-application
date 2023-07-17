import { useState, useEffect } from 'react';
import styles from '../../styles/ResumeForms.module.css';
import Icon from '@mdi/react';
import { mdiTrashCanOutline, mdiPlus, mdiEye, mdiEyeOff } from '@mdi/js';

const placeholderCredentials = [
  "Certification",
  "Professional License",
  "Industry-specific Training",
  "Specialized Coursework",
  "Online Learning",
  "Internship Experience",
  "Apprenticeship",
  "Volunteer Work",
  "Publications",
  "Conference Presentations",
  "Leadership Roles",
  "Awards and Honors",
  "Language Proficiency",
  "Software Proficiency",
  "Project Portfolio",
  "Patents",
  "Memberships in Professional Organizations"
];

const CredentialsForm = (props) => {
  const { credentials, onSubmit, updateOptionalComponents, showCredentials } = props;
  const [newCredentials, setNewCredentials] = useState(credentials || ['']);

  // update state if props change, i.e. if use clicks to load sample resume 
  useEffect(() => {
    setNewCredentials(credentials);
  }, [credentials]);

  const handleInputChange = (event, idx) => {
    const { value } = event.target;
    const updatedCredentials = [...newCredentials];
    updatedCredentials[idx] = value;
    setNewCredentials(updatedCredentials);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // filter out any empty credentials
    const formData = newCredentials.filter((newCredential) => newCredential !== '');
    onSubmit(formData);
  };

  const addCredential = () => {
    setNewCredentials((prevState) => {
      // Add an empty credential
      return [...prevState, '']; 
    });
  };

  const removeCredential = () => {
    setNewCredentials((prevState) => {
      const updatedCredentials = [...prevState];
      updatedCredentials.pop();
      return updatedCredentials;
    });
  };

  const getRandomPlaceholder = () => {
    return placeholderCredentials[Math.floor(Math.random() * placeholderCredentials.length)];
  }

  const setShowCredentials = () => {
    updateOptionalComponents('showCredentials');
  }

  return (
    <form className={styles['form-container']}  onSubmit={handleSubmit} autoComplete='on'>
      <p className={styles['show-component']} onClick={setShowCredentials}>
        <Icon path={showCredentials ? mdiEyeOff : mdiEye} size={1} /> 
        { showCredentials ? "Hide" : "Show" } Credentials         
      </p>
      <div className={styles['input-field-group']}>
        {newCredentials.map((credential, idx) => (
          <div key={idx}>
            <label htmlFor={`credential#${idx}`}>Credential {idx + 1}</label> 
            <input
              type="text"
              id={`credential#${idx}`}
              name={`credential#${idx}`}
              value={credential ?? ''}
              placeholder={`e.g. ${getRandomPlaceholder()}`}
              onChange={(e) => {
                handleInputChange(e, idx);
              }}
            />            
          </div>
        ))}
      </div>
      <div className= {styles['add-remove-div']}>
        <div className= {styles['add-div']} datatype="addCredential" onClick={addCredential}>
          <Icon path={mdiPlus} size={1} />  
          Add Credential
        </div>
        {newCredentials.length > 1 && (
          // Only show remove button if there is at least one credential input
          <div className= {styles['remove-div']} datatype="removeCredential" onClick={removeCredential}>
            <Icon path={mdiTrashCanOutline} size={1} />
            Remove Credential
          </div>
        )}
      </div>
      <button type="submit">Continue</button>
    </form>
  );
}

export default CredentialsForm;