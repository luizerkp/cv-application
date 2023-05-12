import React, { Component } from 'react';
import styles from '../styles/FormContainer.module.css';
import ContactForm from './ContactForm';
import ResumeHeaderForm from './ResumeHeaderForm';
import SkillsForm from './SkillsForm';
import CredentialsForm from './CredentialsForm';
import EducationForm from './EducationForm';
import ExperienceForm from './ExperienceForm';

class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeForm: null,
      masterObject: {
        header: {
          fullName: '',
          title: '',
          aboutMe: '',
        },
        contact: {
          address: "",
          phone: "",
          email: "",
          linkedin: "",
          github: "",
          website: "",
        },
        experience: [
          {
            company: "",
            title: "",
            startDate: "",
            endDate: "",
            description: "",
          },
        ],
        education: [
          {
            school: "",
            degree: "",
            startDate: "",
            endDate: "",
            graduated: false,
          },
        ],
        skills: [''],
        credentials: [''],
      },
    };
  }

  handleFormClick = (formName) => {
    this.setState({ activeForm: formName });
  };

  checkNewData= (formData, formName) => {
    return JSON.stringify(formData) !== JSON.stringify(this.state.masterObject[formName]);
  };

  handleFormSubmit = (formData, formName) => {
    this.checkNewData(formData, formName) && this.setState((prevState) => ({
      masterObject: {
        ...prevState.masterObject,
        [formName]: formData,
      },
    }),
      () => {
        console.log(this.state.masterObject);
      } 
    );

    this.props.handleNextFormClick(formName);
  };

  render() {
    const { activeForm } = this.props;
    const forms = {      
      header: () => <ResumeHeaderForm
        header={this.state.masterObject.header}
        onSubmit={(formData) => this.handleFormSubmit(formData, 'header')} />,
      contact: () => <ContactForm
        contact ={this.state.masterObject.contact} 
        onSubmit={(formData) => this.handleFormSubmit(formData, 'contact')} 
      />,
      education: () => <EducationForm
        education={this.state.masterObject.education}
        onSubmit={(formData) => this.handleFormSubmit(formData, 'education')} />,
      experience: () => <ExperienceForm
        experience={this.state.masterObject.experience}
        onSubmit={(formData) => this.handleFormSubmit(formData, 'experience')} />,
      skills: () =>  <SkillsForm
        skills={this.state.masterObject.skills} 
        onSubmit={(formData) => this.handleFormSubmit(formData, 'skills')} />,      
      credentials:  () => <CredentialsForm
        credentials={this.state.masterObject.credentials}
        onSubmit={(formData) => this.handleFormSubmit(formData, 'credentials')} />, 
    };
    return (
      <div className={styles['form-container-div']}>
        {forms[activeForm] && forms[activeForm]()}
      </div>
    );
  }
}

export default FormContainer;
