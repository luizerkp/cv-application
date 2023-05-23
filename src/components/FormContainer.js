import React, { Component } from 'react';
import styles from '../styles/FormContainer.module.css';
import ContactForm from './ContactForm';
import ResumeHeaderForm from './ResumeHeaderForm';
import SkillsForm from './SkillsForm';
import CredentialsForm from './CredentialsForm';
import EducationForm from './EducationForm';
import ExperienceForm from './ExperienceForm';

// renders the form that is currently active
class FormContainer extends Component {
  render() {
    // default activeForm is header, masterObject is empty, and handleFormSubmit handles the form submit on the parent component
    const { activeForm, handleFormSubmit, masterObject } = this.props;

    // error message to display if the form is not in the forms object
    const erroMessage = 'Something went wrong. Please try again later. If the problem persists, please contact us.';

    // forms is an object that contains all the forms that can be rendered
    const forms = {      
      header: () => <ResumeHeaderForm
        header={masterObject.header}
        onSubmit={(formData) => handleFormSubmit(formData, 'header')} />,
      contact: () => <ContactForm
        contact ={masterObject.contact} 
        onSubmit={(formData) => handleFormSubmit(formData, 'contact')} 
      />,
      education: () => <EducationForm
        education={masterObject.education}
        onSubmit={(formData) => handleFormSubmit(formData, 'education')} />,
      experience: () => <ExperienceForm
        experience={masterObject.experience}
        onSubmit={(formData) => handleFormSubmit(formData, 'experience')} />,
      skills: () =>  <SkillsForm
        skills={masterObject.skills} 
        onSubmit={(formData) => handleFormSubmit(formData, 'skills')} />,      
      credentials:  () => <CredentialsForm
        credentials={masterObject.credentials}
        onSubmit={(formData) => handleFormSubmit(formData, 'credentials')} />, 
    };

    return (
      // if the activeForm is in the forms object, render the form, otherwise render nothing
      <div className={styles['form-container-div']}>
        {forms[activeForm] ? forms[activeForm]() : <h1 className= {styles['error-msg']}>{erroMessage}</h1>}
      </div>
    );
  }
}

export default FormContainer;
