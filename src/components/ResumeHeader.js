import { Component } from "react";
import styles from "../styles/Template1.module.css";

class ResumeHeader extends Component {
  render() {
    const { fullName, title } = this.props;
    return (
    <div className= {styles['resume-header']}>      
      <div className= {styles['name']}>
        {fullName}
      </div>
      <div className= {styles['title']}>
        {title}
      </div>
    </div>
    );
  }
}

export default ResumeHeader;