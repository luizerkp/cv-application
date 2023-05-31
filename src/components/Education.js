import { Component } from "react";
import styles from "../styles/Education.module.css";

class Education extends Component {
    constructor(props) {
        super(props);
        this.state = {
            education: props.education,
        };
    }
    componentDidUpdate(prevProps) {
      if (prevProps.education !== this.props.education) {
        this.setState({
          education: this.props.education,
        });
      }
    }
    render() {
        const { education } = this.state;
        if (education.length === 0) return null;
        return (
            <div className={styles['education-div']}>
                <h2>Education</h2>
                {education.map((educationItem, index) => (
                    <div key={index} className={styles['education-item']}>
                        <h3>{educationItem.degree}</h3>
                        <p>{educationItem.school}</p>
                        <p>{educationItem.schoolLocation}</p>
                        <p>{educationItem.startDate} - {educationItem.endDate}</p>
                    </div>
                ))}
            </div>
        );
    }
}

export default Education;