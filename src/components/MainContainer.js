import { Component } from 'react';
import styles from '../styles/MainContainer.module.css';
import FormContainer from './FormContainer';
// import ResumeContainer from './ResumeContainer';
import SideBar from './SideBar';

class MainContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeForm: 'header',
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
    render() {
        return (
          <div className={styles['main-container']}>
            <SideBar 
              activeForm = {this.state.activeForm} 
              handleFormClick = {this.handleFormClick}
              handleActiveForm = {this.handleActiveForm}
            />
            <FormContainer 
              handleNextFormClick={this.handleNextFormClick}
              activeForm={this.state.activeForm} 
            />
            {/* <ResumeContainer></ResumeContainer> */}
          </div>
        );
    }
}

export default MainContainer;