import { Component } from "react";
import styles from "../styles/Experience.module.css";

class Experience extends Component {
  render() {
    const { experience } = this.props;
    if (experience.length === 0) return null;
    return (
      <div className={styles['experience-div']}>
        <h2>Experience</h2>
        {experience.map((experienceItem, index) => (
          <div key={index}>
            <p>{experienceItem.title}</p>
            <p>{experienceItem.company}</p>
            <div className={styles['dates-location-div']}>
              <p>{experienceItem.startDate} - {experienceItem.endDate}</p>
              <p>{experienceItem.companyLocation}</p>
            </div>
            <ul>
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