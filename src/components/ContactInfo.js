import { Component } from 'react';
import styles from '../styles/ContactInfo.module.css';

class ContactInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      adress: "California, WA 98052",
      phone: "888-888-8888",
      email: "youremail@hotmail.com",
      linkedin: "linkedin.com/in/yourname",
      github: "github.com/yourname",
      website: "www.yourwebsite.com",
    };
  }

  
  render() {
    return (
      <div className = {styles['contact-info-div']}>
        <p>
          <span className={`material-icons-outlined ${styles['contact-icon']}`}>
            location_on
          </span>
          {this.state.adress}
        </p>
        <p>
          <span className={`material-icons-outlined ${styles['contact-icon']}`}>
            phone
          </span>
          {this.state.phone}
        </p>
        <p>
          <span className={`material-icons-outlined ${styles['contact-icon']}`}>
            email
          </span>
          {this.state.email}
        </p>
        <p>
          <span className={`material-icons-outlined ${styles['contact-icon']}`}>
            language
          </span>
          {this.state.linkedin}
        </p>
        <p>
          <span className={`material-icons-outlined ${styles['contact-icon']}`}>
            language
          </span>
          {this.state.github}
        </p>
        <p>
          <span className={`material-icons-outlined ${styles['contact-icon']}`}>
            language
          </span>
          {this.state.website}
        </p>
      </div>
    );
  }
}

export default ContactInfo;