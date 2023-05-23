import { Component } from 'react';
import styles from '../styles/MainContainer.module.css';
import FormContainer from './FormContainer';
import ResumeContainer from './ResumeContainer';
import SideBar from './SideBar';

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
    
    handleNextFormClick = (formName) => {
      const formOrder = ['header', 'contact', 'experience', 'education', 'skills', 'credentials'];
      const currentIndex = formOrder.indexOf(formName);
      const nextForm = formOrder[currentIndex + 1];
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
  
      this.handleNextFormClick(formName);
    };

    render() {
      const { currentTemplate } = this.props;
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
              masterObject={this.state.masterObject}
              currentTemplate={currentTemplate}
            /> 
          </div>
        );
    }
}

export default MainContainer;