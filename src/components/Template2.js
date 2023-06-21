import { Component } from "react";
import styles from "../styles/Template2.module.css";
import ResumeHeader from "./ResumeHeader";
import Contact from "./Contact";
import Skills from "./Skills";
import Education from "./Education";
import Credentials from "./Credentials";
import Experience from "./Experience";

class Template2 extends Component {
  render() {
    const { masterObj } = this.props;
    return(
      <div className= {styles['resume-wrapper']}> 
        <div className= {styles['template2-main']} data-resume>
            <div className={styles['resume-left']}>          
              <ResumeHeader
                fullName={masterObj.header.fullName}
                title={masterObj.header.title}
                styles = {styles}
              />
              <Contact
                contact={masterObj.contact}
                styles = {styles}
              />
              <Skills
                skills={masterObj.skills}
                styles = {styles}
              />
              <Credentials
                credentials={masterObj.credentials}
                styles = {styles}
              />
            </div>
            <div className={styles['resume-right']}>
              <p className={styles['about-me']}>{ masterObj.header.aboutMe }</p>
              <Experience
                experience={masterObj.experience}
                styles = {styles}
              />
              <Education
                education={masterObj.education}
                styles = {styles}
              />               
            </div>
        </div> 
      </div>     
    );
  }
}

export default Template2;