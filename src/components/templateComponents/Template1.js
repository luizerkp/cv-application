import styles from "../../styles/Template1.module.css";
import ResumeHeader from "../resumeComponents/ResumeHeader";
import Contact from "../resumeComponents/Contact";
import Skills from "../resumeComponents/Skills";
import Education from "../resumeComponents/Education";
import Credentials from "../resumeComponents/Credentials";
import Experience from "../resumeComponents/Experience";
import getFirstAndNameInitials from "../../utils/firstAndLastNameInitials";
import { memo } from 'react';

const Template1 = (props) => {  
  const { resumeObject, optionalComponents } = props;
  const inititials = resumeObject.header.fullName ? 
  getFirstAndNameInitials(resumeObject.header.fullName).toUpperCase() : 
  'FL';

  return(
    <div className= {styles['resume-wrapper']}> 
      <div className= {styles['template-main']} data-resume>
          <div className={styles['resume-left']}>          
            <Contact
              contact={resumeObject.contact}
              styles = {styles}
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

export default memo(Template1);