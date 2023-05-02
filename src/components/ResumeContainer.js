import styles from '../styles/ResumeContainer.module.css';
import { Component } from 'react';

class ResumeContainer extends Component {
    render() {
        return (
            <div className={styles['resume-container']}>
                <div className={styles['resume-header']}>
                    <h1 className={styles['resume-name']}>Name</h1>
                    <h2 className={styles['resume-job-title']}>Job Title</h2>
                </div>
                <div className={styles['resume-intro']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                <div className={styles['resume-body']}>
                    <div className={styles['resume-left']}>
                        <div className={styles['resume-contact-info']}>
                          <h1 className={styles['resume-section-title']}>Contact Info</h1>
                        </div>
                        <div className={styles['resume-skills']}>
                          <h1 className={styles['resume-section-title']}>Skills</h1>
                        </div>
                        <div className={styles['resume-interests']}>
                          <h1 className={styles['resume-section-title']}>Interests(optional)</h1>
                        </div>
                    </div>
                    <div className={styles['resume-right']}>
                        <div className={styles['resume-experience']}>
                          <h1 className={styles['resume-section-title']}>Experience</h1>
                        </div>
                        <div className={styles['resume-education']}>
                          <h1 className={styles['resume-section-title']}>Education</h1>
                        </div>
                    </div>
                </div>
            </div>
            );
    }
}

export default ResumeContainer;