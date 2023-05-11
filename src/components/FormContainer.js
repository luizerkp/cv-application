import React, { Component } from 'react';
// import styles from '../styles/FormContainer.module.css';
import ContactForm from './ContactForm';
import ResumeHeaderForm from './ResumeHeaderForm';
import SkillsForm from './SkillsForm';
import CredentialsForm from './CredentialsForm';

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
        experience: {},
        education: {},
        skills: [''],
        credentials: [''],
      },
    };
  }

  handleFormClick = (formName) => {
    this.setState({ activeForm: formName });
  };

  handleFormSubmit = (formData, formName) => {
    console.log(formData);
    console.log(formName);
    this.setState((prevState) => ({
      masterObject: {
        ...prevState.masterObject,
        [formName]: formData,
      },
    }),
    () => {
      console.log(this.state.masterObject);
      this.props.handleNextFormClick(formName);
    } 
    
    );
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
      credentials:  () => <CredentialsForm
        credentials={this.state.masterObject.credentials}
        onSubmit={(formData) => this.handleFormSubmit(formData, 'credentials')} />, 
      skills: () =>  <SkillsForm
        skills={this.state.masterObject.skills} 
        onSubmit={(formData) => this.handleFormSubmit(formData, 'skills')} />,
    };
    return (
      <div>
        {forms[activeForm] && forms[activeForm]()}
      </div>
    );
  }
}

export default FormContainer;
