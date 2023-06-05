import { Component } from 'react';
import Icon from '@mdi/react';
import { mdiMapMarkerOutline, mdiCellphone, mdiEmailOutline, mdiLinkedin, mdiGithub, mdiWeb} from '@mdi/js';
import styles from '../styles/ResumeContactInfo.module.css';

class Contact extends Component {
  render() {
    const { address, phone, email, linkedin, gitHub, website } = this.props.contact;
    // console.log(this.props.contact);
    return (
      <div className= "contact">
        <h2>Contact</h2>
        <div className= {styles['resume-contact-item']}>
          <Icon path={mdiMapMarkerOutline} size={1} />
          {address}
        </div>
        <div className= {styles['resume-contact-item']}>
          <Icon path={mdiCellphone} size={1} />
          {phone}
        </div>
        <div className= {styles['resume-contact-item']}>
          <Icon path={mdiEmailOutline} size={1} />
          {email}
        </div>
        {linkedin && (
        <div className= {styles['resume-contact-item']}>
          <Icon path={mdiLinkedin} size={1} />
          {linkedin}
        </div>)}
        {gitHub && (
        <div className= {styles['resume-contact-item']}>
          <Icon path={mdiGithub} size={1} />
          {gitHub}
        </div>)}
        {website && (
        <div className= {styles['resume-contact-item']}>
          <Icon path={mdiWeb} size={1} />
          {website}
        </div>)}
    </div>  
    );
  }
}

export default Contact;
