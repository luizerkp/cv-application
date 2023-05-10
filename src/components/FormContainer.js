import React, { Component } from 'react';
import styles from '../styles/FormContainer.module.css';
import ContactForm from './ContactForm';
import ResumeHeaderForm from './ResumeHeaderForm';

class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeForm: null,
      masterObject: {
        header: {},
        contact: {},
        experience: {},
        education: {},
        skills: {},
        credentials: {},
      },
    };
  }

  handleFormClick = (formName) => {
    this.setState({ activeForm: formName });
  };

  handleFormSubmit = (formData, formName) => {
    this.setState((prevState) => ({
      masterObject: {
        ...prevState.masterObject,
        [formName]: formData,
      },
    }));
  };

  render() {
    const { activeForm } = this.props;
    const forms = {
      contact: () => <ContactForm onSubmit={(formData) => this.handleFormSubmit(formData, 'contact')} />,
      header: () => <ResumeHeaderForm onSubmit={(formData) => this.handleFormSubmit(formData, 'header')} />,
    };
    return (
      <div>
        {forms[activeForm] && forms[activeForm]()}
      </div>
    );
  }
}

export default FormContainer;
