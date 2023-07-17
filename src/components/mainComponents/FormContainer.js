import styles from '../../styles/ResumeForms.module.css';
import ContactForm from '../formComponents/ContactForm';
import ResumeHeaderForm from '../formComponents/ResumeHeaderForm';
import SkillsForm from '../formComponents/SkillsForm';
import CredentialsForm from '../formComponents/CredentialsForm';
import EducationForm from '../formComponents/EducationForm';
import ExperienceForm from '../formComponents/ExperienceForm';

// renders the form that is currently active
const FormContainer = (props) => {
  // default activeForm is header, resumeObject is empty, and handleFormSubmit handles the form submit on the parent componentactiveForm
  const { 
    activeForm, 
    handleFormSubmit,
    updateOptionalComponents, 
    resumeObject,
    optionalComponents,
    } = props;

  // error message to display if the form is not in the forms object
  const erroMessage = 'Something went wrong. Please try again later. If the problem persists, please contact us.';

  // forms is an object that contains all the forms that can be rendered
  const forms = {      
    header: () => <ResumeHeaderForm
      header={resumeObject.header}
      onSubmit={(formData) => handleFormSubmit(formData, 'header')} />,
    contact: () => <ContactForm
      contact ={resumeObject.contact} 
      onSubmit={(formData) => handleFormSubmit(formData, 'contact')} 
    />,
    education: () => <EducationForm
      education={resumeObject.education}
      onSubmit={(formData) => handleFormSubmit(formData, 'education')} />,
    experience: () => <ExperienceForm
      experience={resumeObject.experience}
      onSubmit={(formData) => handleFormSubmit(formData, 'experience')} />,
    skills: () =>  <SkillsForm
      skills={resumeObject.skills}
      showSkills={optionalComponents.showSkills}
      updateOptionalComponents={updateOptionalComponents}
      onSubmit={(formData) => handleFormSubmit(formData, 'skills')} />,      
    credentials:  () => <CredentialsForm
      credentials={resumeObject.credentials}
      showCredentials={optionalComponents.showCredentials}
      updateOptionalComponents={updateOptionalComponents}
      onSubmit={(formData) => handleFormSubmit(formData, 'credentials')} />, 
  };

  return (
    // if the activeForm is in the forms object, render the form, otherwise render nothing
    <div className={styles['form-container-div']}>
      {forms[activeForm] ? forms[activeForm]() : <h1 className= {styles['error-msg']}>{erroMessage}</h1>}
    </div>
  );
}

export default FormContainer;
