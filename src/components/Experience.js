import { Component } from "react";
import styles from "../styles/Template1.module.css";

class Experience extends Component {
  render() {
    const { experience } = this.props;
    if (experience.length === 0) return null;
    return (
      <div className={styles['experience-div']}>
        <h2>Experience</h2>
        {experience.map((experienceItem, index) => (
          <div className={styles['experience-item']} key={index}>
            <p className={styles['job-title']}>{experienceItem.title}</p>
            <p className={styles['company-name']}>{experienceItem.company}</p>
            <div className={styles['dates-location-div']}>
              <p>{experienceItem.companyLocation}</p>
              <p>{experienceItem.startDate} - {experienceItem.endDate}</p>
            </div>
            <ul className= {styles['responsabilities']}>
              {(experienceItem.responsabilities && 
              experienceItem.responsabilities.split('\n').map((responsability, index) => (
                responsability && <li key={index}>{responsability}</li>
              )))}
            </ul>
          </div>
        ))}
      </div>
    );
  }
}

export default Experience;