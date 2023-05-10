import { Component } from 'react';
import styles from '../styles/MainContainer.module.css';
import FormContainer from './FormContainer';
// import ResumeContainer from './ResumeContainer';
import SideBar from './SideBar';

class MainContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeForm: 'contact',
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
    render() {
        return (
          <div className={styles['main-container']}>
            <SideBar 
              activeForm = {this.state.activeForm} 
              handleFormClick = {this.handleFormClick} 
            />
            <FormContainer activeForm={this.state.activeForm}></FormContainer>
            {/* <ResumeContainer></ResumeContainer> */}
          </div>
        );
    }
}

export default MainContainer;