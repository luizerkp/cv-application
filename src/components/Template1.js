import { Component } from "react";
import styles from "../styles/Template1.module.css";
import ResumeHeader from "./ResumeHeader";
import Contact from "./Contact";
import Skills from "./Skills";
import Education from "./Education";
import Credentials from "./Credentials";
import Experience from "./Experience";

class Template1 extends Component {
  render() {
    // console.log('Template1 render');
    const { masterObj } = this.props;
    // console.log(masterObj.contact);
    return(
      <div className= {styles['resume-wrapper']}> 
        <div className= {styles['template1-main']} data-resume>
          <ResumeHeader
            fullName={masterObj.header.fullName}
            title={masterObj.header.title}
            styles={styles}
          />
          <div className= {styles['resume-body']}>
            <div className={styles['resume-left']}>
              <Contact
                contact={masterObj.contact}
                styles={styles}
              />
              <Skills
                skills={masterObj.skills}
                styles={styles}
              />
              <Credentials
                credentials={masterObj.credentials}
                styles={styles}
              />
            </div>
            <div className={styles['resume-right']}>
              <p className={styles['about-me']}>{ masterObj.header.aboutMe }</p>
              <Experience
                experience={masterObj.experience}
                styles={styles}
              />
              <Education
                education={masterObj.education}
                styles={styles}
              />               
            </div>
          </div>
        </div> 
      </div>     
    );
  }
}

export default Template1;
