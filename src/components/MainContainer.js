import { Component } from 'react';
import styles from '../styles/MainContainer.module.css';
import FormContainer from './FormContainer';
import ResumeContainer from './ResumeContainer';
import SideBar from './SideBar';
import sampleResume from '../sampleResume';

class MainContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeForm: 'header',
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
                  companyLocation: "",
                  startDate: "",
                  endDate: "",
                  responsabilities: "",
                },
              ],
              education: [
                {
                  schoolName: "",
                  degree: "",
                  startDate: "",
                  endDate: "",
                  schoolLocation: "",
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
    
    handleNextFormClick = (formName) => {
      const formOrder = ['header', 'contact', 'experience', 'education', 'skills', 'credentials'];
      const formLength = formOrder.length;
      const currentIndex = formOrder.indexOf(formName);
      const nextForm = (currentIndex + 1) < formLength ? formOrder[currentIndex + 1] : formOrder[0];
      // for now do nothing after last form "credentials", in the future, this will open the resume modal
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
      return JSON.stringify(formData) !== JSON.stringify(this.state.masterObject[formName]);
    };

    checkData = (formData, formName) => {
      return this.checkEmptyForm(formData) ? false : this.checkNewData(formData, formName);
    };
  
    handleFormSubmit = (formData, formName) => {
      this.checkData(formData, formName) && this.setState((prevState) => ({
        masterObject: {
          ...prevState.masterObject,
          [formName]: formData,
        },
      }),
        () => {
          console.log(this.state.masterObject);
        } 
      );
  
      this.handleNextFormClick(formName);
    };

    render() {
      const { currentTemplate } = this.props;
      // console.log(currentTemplate);
      // console.log(sampleResume)
        return (
          <div className={styles['main-container']}>
            <SideBar 
              activeForm = {this.state.activeForm} 
              handleFormClick = {this.handleFormClick}
              handleActiveForm = {this.handleActiveForm}
            />
            <FormContainer 
              handleFormSubmit={this.handleFormSubmit}
              activeForm={this.state.activeForm}
              masterObject={this.state.masterObject}
            />
            <ResumeContainer
              // masterObject={this.state.masterObject}
              masterObject={sampleResume}
              currentTemplate={currentTemplate}
            /> 
          </div>
        );
    }
}

export default MainContainer;