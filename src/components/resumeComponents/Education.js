import { Component } from "react";

class Education extends Component {
  render() {
    const { education, styles } = this.props;
    if (education.length === 0) return null;
    
    return (
      <div className={styles['education-div']}>
          <h2>Education</h2>
          {education.map((educationItem, index) => (
              <div key={index} className={styles['education-item']}>
                  <h3>{educationItem.degree}</h3>
                  <p>{educationItem.schoolName}</p>
                  <p>{educationItem.schoolLocation}</p>
                  <p>{educationItem.startDate} - {educationItem.endDate}</p>
              </div>
          ))}
      </div>
    );
  }
}

export default Education;