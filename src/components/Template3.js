import { Component } from "react";
import styles from "../styles/Template3.module.css";
import ResumeHeader from "./ResumeHeader";
import Contact from "./Contact";
import Skills from "./Skills";
import Education from "./Education";
import Credentials from "./Credentials";
import Experience from "./Experience";
import getFirstAndNameInitials from "../utils/firstAndLastNameInitials";

class Template3 extends Component {
  // when the component mounts, we want to update the resume document on App.js state
  componentDidMount() {
    this.props.handleUpdateResumeDocument ();
  }

  render() {
    const { resumeObject } = this.props;
    const inititials = resumeObject.header.fullName ? 
    getFirstAndNameInitials(resumeObject.header.fullName).toUpperCase() : 
    'FL';
    
    return(
      <div className= {styles['resume-wrapper']}> 
        <div className= {styles['template3-main']} data-resume>
            <div className={styles['resume-left']}>          

              <Contact
                contact={resumeObject.contact}
                styles = {styles}
              />
              <Skills
                skills={resumeObject.skills}
                styles = {styles}
              />
              <Credentials
                credentials={resumeObject.credentials}
                styles = {styles}
              />
            </div>
            <div className={styles['resume-right']}>
              <div className={styles['resume-header-wrapper']}>
                <div className={styles['initials']}>{inititials ? inititials : "FL"}</div>
                <ResumeHeader
                  fullName={resumeObject.header.fullName}
                  title={resumeObject.header.title}
                  styles = {styles}
                />                
              </div>
              <p className={styles['about-me']}>{ resumeObject.header.aboutMe }</p>
              <Experience
                experience={resumeObject.experience}
                styles = {styles}
              />
              <Education
                education={resumeObject.education}
                styles = {styles}
              />               
            </div>
        </div> 
      </div>     
    );
  }
}

export default Template3;