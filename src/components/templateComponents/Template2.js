import styles from "../../styles/Template2.module.css";
import ResumeHeader from "../resumeComponents/ResumeHeader";
import Contact from "../resumeComponents/Contact";
import Skills from "../resumeComponents/Skills";
import Education from "../resumeComponents/Education";
import Credentials from "../resumeComponents/Credentials";
import Experience from "../resumeComponents/Experience";

const Template2 = (props) => {
  const { resumeObject, optionalComponents } = props;

  return(
    <div className= {styles['resume-wrapper']}> 
      <div className= {styles['template-main']} data-resume>
          <div className={styles['resume-left']}>          
            <ResumeHeader
              fullName={resumeObject.header.fullName}
              title={resumeObject.header.title}
              styles = {styles}
            />
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

export default Template2;