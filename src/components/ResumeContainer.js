import styles from '../styles/ResumeContainer.module.css';
import { Component } from 'react';

class ResumeContainer extends Component {
    render() {
        return (
            <div className={styles['resume-container']}>
                <div className={styles['resume-body']}>
                    <div className={styles['resume-left']}>
                      <div className={styles['resume-header']}>
                        <h1 className={styles['resume-name']}>John Smith</h1>
                        <h2 className={styles['resume-job-title']}>Account Manager</h2>
                      </div>
                        <div className={styles['resume-contact-info']}>
                          <h1 className={styles['resume-section-title-left']}>Contact Info</h1>
                        </div>
                        <div className={styles['resume-skills']}>
                          <div className= {styles.pointer}>
                            <h1 className={styles['resume-section-title-left']}>Skills</h1>
                          </div>

                        </div>
                        <div className={styles['resume-interests']}>
                          <h1 className={styles['resume-section-title-left']}>Interests(optional)</h1>
                        </div>
                    </div>
                    <div className={styles['resume-right']}>
                        <div className={styles['resume-intro']}>
                        Experienced Product Manager with a proven track record of successfully delivering products from conception to launch. Skilled in market research, product strategy, user experience design, project management, and team leadership. Strong ability to identify customer needs and translate them into product features that drive business growth and customer satisfaction. Proactive problem-solver with excellent communication and collaboration skills.
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