import { Component } from 'react';
import styles from '../styles/MainContainer.module.css';
import FormContainer from './mainComponents/FormContainer';
import ResumeContainer from './mainComponents/ResumeContainer';
import SideBar from './mainComponents/SideBar';
import sampleResume from '../utils/sampleResume';
import emptyResumeOject from '../utils/resumeObject';

class MainContainer extends Component {
  constructor(props) {
      super(props);
      this.state = {
          activeForm: 'header',
          resumeObject: emptyResumeOject,
        };
  }

  handleFormClick = (formName) => {
    this.setState({ activeForm: formName });
  };
  
  handleNextFormClick = (formName) => {
    const formOrder = ['header', 'contact', 'experience', 'education', 'skills', 'credentials'];
    const formLength = formOrder.length;
    const currentIndex = formOrder.indexOf(formName);
    const nextForm = (currentIndex + 1) < formLength ? formOrder[currentIndex + 1] : formOrder[0];
    nextForm && this.setState({ activeForm: nextForm });
    nextForm && this.handleActiveForm(nextForm);
  };

  handleActiveForm = (formName) => {
    const activeElement = document.querySelector('[data-active="true"]');
    if (activeElement) {
      activeElement.removeAttribute('data-active');
    }

    const selectedElement = document.querySelector(`[datatype="${formName}"]`);
    if (selectedElement) {
      selectedElement.setAttribute('data-active', true);
    }
  }
  checkEmptyForm = (formData) => {
    if (!formData) return true;

    const emptyForm = Array.isArray(formData) ? 
    formData.every((value) => value === '') : 
    Object.values(formData).every((value) => value === '');

    return emptyForm;
  };
  
  checkNewData= (formData, formName) => {
    return JSON.stringify(formData) !== JSON.stringify(this.state.resumeObject[formName]);
  };

  checkData = (formData, formName) => {
    return this.checkEmptyForm(formData) ? false : this.checkNewData(formData, formName);
  };
  
  // when the component mounts on ResumeContainer or when form data is submitted, 
  // we want to update the resume document on App.js state
  handleUpdadteResumeDocument = () => {
    const { updateResumeDocument } = this.props;
    updateResumeDocument();
  };

  handleFormSubmit = (formData, formName) => {
    this.checkData(formData, formName) && this.setState((prevState) => ({
      resumeObject: {
        ...prevState.resumeObject,
        [formName]: formData,
      },
    }),
      () => {
        this.handleUpdadteResumeDocument();
        console.log(this.state.resumeObject);
      } 
    );

    this.handleNextFormClick(formName);
  };

  loadSampleResume = () => {
    this.setState({ resumeObject: sampleResume });
  };

  unloadSampleResume = () => {
    this.setState({ resumeObject: emptyResumeOject });
  };

  render() {
    const { currentTemplate } = this.props;
    
    return (
      <div className={styles['main-container']}>
        <SideBar 
          activeForm = {this.state.activeForm} 
          handleFormClick = {this.handleFormClick}
          handleActiveForm = {this.handleActiveForm}          
          loadSampleResume={this.loadSampleResume}
          unloadSampleResume={this.unloadSampleResume}
        />
        <FormContainer 
          handleFormSubmit={this.handleFormSubmit}
          activeForm={this.state.activeForm}
          resumeObject={this.state.resumeObject}
        />
        <ResumeContainer
          resumeObject={this.state.resumeObject}
          currentTemplate={currentTemplate}
          handleUpdateResumeDocument={ this.handleUpdadteResumeDocument }
        /> 
      </div>
    );
  }
}

export default MainContainer;