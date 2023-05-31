import { Component } from "react";
import styles from "../styles/Template1.module.css";
import ResumeHeaderInfo from "./ResumeHeaderInfo";
import ResumeContactInfo from "./ResumeContactInfo";
import Skills from "./Skills";
import Education from "./Education";
import Credentials from "./Credentials";
import Experience from "./Experience";

class Template1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      masterObj: props.masterObj,
    };
  }
  componentDidUpdate(prevProps) {
    if (prevProps.masterObj !== this.props.masterObj) {
      // console.log('Template1 componentDidUpdate');
      // console.log(this.props.masterObj);
      this.setState({
        masterObj: this.props.masterObj,
      });
    }
  }
  render() {
    // console.log('Template1 render');
    const { masterObj } = this.state;
    // console.log(masterObj);
    return(
      <div className= {styles['template1-main']}>
        <ResumeHeaderInfo
          fullName={masterObj.header.fullName}
          title={masterObj.header.title}
        />
        <div className= {styles['resume-body']}>
          <div className={styles['resume-left']}>
            <ResumeContactInfo
              contact={masterObj.contact}
            />
            <Skills
              skills={masterObj.skills}
            />
            <Credentials
              credentials={masterObj.credentials}
            />
          </div>
          <div className={styles['resume-right']}>
            <p className={styles['about-me']}>{ masterObj.header.aboutMe }</p>
            <Experience
              experience={masterObj.experience}
            />
            <Education
              education={masterObj.education}
            />               
          </div>
        </div>
      </div>      
    );
  }
}

export default Template1;
