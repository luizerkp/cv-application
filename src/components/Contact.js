import { Component } from 'react';
import Icon from '@mdi/react';
import { mdiMapMarkerOutline, mdiCellphone, mdiEmailOutline, mdiLinkedin, mdiGithub, mdiWeb} from '@mdi/js';
import styles from '../styles/ResumeContactInfo.module.css';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: props.contact.address,
      phone: props.contact.phone,
      email: props.contact.email,
      linkedin: props.linkedin,
      gitHub: props.contact.gitHub,
      website: props.contact.website ,
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.contact !== this.props.contact) {
      // console.log('ResumeContactInfo componentDidUpdate');
      this.setState({
        address: this.props.contact.address,
        phone: this.props.contact.phone,
        email: this.props.contact.email,
        linkedin: this.props.contact.linkedin,
        gitHub: this.props.contact.gitHub,
        website: this.props.contact.website,
      });
    }
  }

  render() {
    const { address, phone, email, linkedin, gitHub, website } = this.state;
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
