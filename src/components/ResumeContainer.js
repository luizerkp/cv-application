import styles from '../styles/ResumeContainer.module.css';
import { Component } from 'react';
import Name from './Name';
import JobTitle from './JobTitle';
import ResumeSummary from './ResumeSummary';
import ContactInfo from './ContactInfo';
import Skills from './Skills';
import Interests from './Interests';


// to do Refactor so that it imports templates that will consume the data from the different resume components
class ResumeContainer extends Component {
    constructor(props) {
        super(props);
        // will use thsi to keep track of which template is being used
        this.state = {};
    }
    render() {
        return (
            <div className={styles['resume-container']}>
                <div className={styles['resume-body']}>
                    <div className={styles['resume-left']}>
                      <div className={styles['resume-header']}>
                        <div className={styles['resume-name']}>
                          <Name />
                        </div>
                        <div className={styles['resume-job-title']}>
                          <JobTitle />
                        </div>
                      </div>
                        <div className={styles['resume-contact-info']}>
                          <h1 className={styles['resume-section-title-left']}>Contact</h1>
                          <ContactInfo />
                        </div>
                        <div className={styles['resume-skills']}>
                          <h1 className={styles['resume-section-title-left']}>Skills</h1>
                          <Skills />
                        </div>
                        <div className={styles['resume-interests']}>
                          <h1 className={styles['resume-section-title-left']}>Interests</h1>
                          <Interests />
                        </div>
                    </div>
                    <div className={styles['resume-right']}>
                        <div className={styles['resume-intro']}>
                          <ResumeSummary />
                        </div>
                        <div className={styles['resume-experience']}>
                          <h1 className={styles['resume-section-title-right']}>Experience</h1>
                        </div>
                        <div className={styles['resume-education']}>
                          <h1 className={styles['resume-section-title-right']}>Education</h1>
                        </div>
                    </div>
                </div>
            </div>
            );
    }
}

export default ResumeContainer;