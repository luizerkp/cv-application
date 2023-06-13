import { Component } from "react";
import styles from "../styles/Template1.module.css";

class Experience extends Component {
  generateResponsabilitiesUl = (responsabilities) => {
    const responsabilitiesList = responsabilities.split('\n-');
    const notBulleted = responsabilitiesList.length <= 1 &&
    !responsabilitiesList[0].startsWith("-");
    const responsabilitiesUlClassName = notBulleted ? styles['responsabilities-not-bulleted'] : styles['responsabilities-bulleted'];
    return (
      <ul className= {responsabilitiesUlClassName}>
        {responsabilitiesList.map((responsability, index) => (
          <li key={index}>{responsability.startsWith("-") ?
          responsability.substring(1) : responsability}</li>
        ))}
      </ul>
    );
  }

  render() {
    const { experience } = this.props;
    if (experience.length === 0) return null;
    return (
      <div className={styles['experience-div']}>
        <h2>Experience</h2>
        {experience.map((experienceItem, index) => (
          <div className={styles['experience-item']} key={index}>
            <div className={styles['title-dates-div']}>            
              <p className={styles['job-title']}>{experienceItem.title}</p>
              <p>{experienceItem.startDate} - {experienceItem.endDate}</p>
            </div>
            <div className={styles['companyName-location-div']}>
              <p className={styles['company-name']}>{experienceItem.company}</p>
              <p>{experienceItem.companyLocation}</p>
            </div>

            {this.generateResponsabilitiesUl(experienceItem.responsabilities)}
          </div>
        ))}
      </div>
    );
  }
}

export default Experience;