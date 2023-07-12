import { useState, useEffect } from 'react';
import styles from '../../styles/ResumeForms.module.css';

const placeholderResumeHeaderInfo = {
  fullName: "Your Name",
  title: "Your Title",
  aboutMe: "About yourself and your professional Achievements",
};

const ResumeHeaderForm = ({header, onSubmit}) =>{
  const [fullName, setFullName] = useState(header.fullName ?? '');
  const [title, setTitle] = useState(header.title ?? '');
  const [aboutMe, setAboutMe] = useState(header.aboutMe ?? '');

  // update state if props change, i.e. if use clicks to load sample resume
  useEffect(() => {
    setFullName(header.fullName ?? '');
    setTitle(header.title ?? '');
    setAboutMe(header.aboutMe ?? '');
  }, [header]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'fullName':
        setFullName(value);
        break;
      case 'title':
        setTitle(value);
        break;
      case 'aboutMe':
        setAboutMe(value);
        break;
      default:
        break;
    }
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = { fullName, title, aboutMe };
    onSubmit(formData);
  };
  return (
    <form className={styles['form-container']} onSubmit={handleSubmit} autoComplete='on'>
      <div className={styles['input-field-group']}>
        <div>
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={fullName ?? ''}
            placeholder= {placeholderResumeHeaderInfo.fullName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title ?? ''}
            placeholder= {placeholderResumeHeaderInfo.title}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles['text-box']}>
          <label htmlFor="aboutMe">About Me:</label>
          <textarea
            type="text"
            id="aboutMe"
            name="aboutMe"
            value={aboutMe ?? ''}
            placeholder= {placeholderResumeHeaderInfo.aboutMe}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <button type="submit">Continue</button>
    </form>
  );
}

export default ResumeHeaderForm;