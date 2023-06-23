import { Component } from 'react';
import Icon from '@mdi/react';
import { 
  mdiMapMarkerOutline, 
  mdiCellphone, 
  mdiEmailOutline, 
  mdiLinkedin, 
  mdiGithub, 
  mdiWeb
} from '@mdi/js';

class Contact extends Component {
  render() {
    const { address, phone, email, linkedin, gitHub, website } = this.props.contact;
    const { styles } = this.props;
    
    return (
      <div className= {styles['contact']}>
        <h2>Contact</h2>
        <div className= {styles['resume-contact-item']}>         
          {address}
          <Icon path={mdiMapMarkerOutline} size={1} />
        </div>
        <div className= {styles['resume-contact-item']}>  
          {phone}
          <Icon path={mdiCellphone} size={1} />
        </div>
        <div className= {styles['resume-contact-item']}>
          {email}
          <Icon path={mdiEmailOutline} size={1} />
        </div>
        {linkedin && (
        <div className= {styles['resume-contact-item']}>         
          {linkedin}
          <Icon path={mdiLinkedin} size={1} />
        </div>)}
        {gitHub && (
        <div className= {styles['resume-contact-item']}>         
          {gitHub}
          <Icon path={mdiGithub} size={1} />
        </div>)}
        {website && (
        <div className= {styles['resume-contact-item']}>          
          {website}
          <Icon path={mdiWeb} size={1} />
        </div>)}
    </div>  
    );
  }
}

export default Contact;