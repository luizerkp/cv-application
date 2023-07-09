import { Component } from "react";
import styles from "../../styles/Template3.module.css";
import ResumeHeader from "../resumeComponents/ResumeHeader";
import Contact from "../resumeComponents/Contact";
import Skills from "../resumeComponents/Skills";
import Education from "../resumeComponents/Education";
import Credentials from "../resumeComponents/Credentials";
import Experience from "../resumeComponents/Experience";

class Template3 extends Component {
  
  render() {
    const { resumeObject, optionalComponents } = this.props;
    
    return(
      <div className= {styles['resume-wrapper']}> 
        <div className= {styles['template-main']} data-resume>
          <ResumeHeader
            fullName={resumeObject.header.fullName}
            title={resumeObject.header.title}
            styles={styles}
          />
          <div className= {styles['resume-body']}>
            <div className={styles['resume-left']}>
              <Contact
                contact={resumeObject.contact}
                styles={styles}
              />
              {optionalComponents.showSkills && <Skills
                skills={resumeObject.skills}
                styles = {styles}
              />}
             {optionalComponents.showCredentials && <Credentials
                credentials={resumeObject.credentials}
                styles = {styles}
              />}
            </div>
            <div className={styles['resume-right']}>
              <p className={styles['about-me']}>{ resumeObject.header.aboutMe }</p>
              <Experience
                experience={resumeObject.experience}
                styles={styles}
              />
              <Education
                education={resumeObject.education}
                styles={styles}
              />               
            </div>
          </div>
        </div> 
      </div>     
    );
  }
}

export default Template3;
