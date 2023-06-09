import { Component } from 'react';
import styles from '../../styles/ResumeForms.module.css';
import Icon from '@mdi/react';
import { mdiTrashCanOutline, mdiPlus, mdiEye, mdiEyeOff } from '@mdi/js';

const placeholderCredentials = [
  "Certification",
  "Professional License",
  "Industry-specific Training",
  "Specialized Coursework",
  "Online Learning",
  "Internship Experience",
  "Apprenticeship",
  "Volunteer Work",
  "Publications",
  "Conference Presentations",
  "Leadership Roles",
  "Awards and Honors",
  "Language Proficiency",
  "Software Proficiency",
  "Project Portfolio",
  "Patents",
  "Memberships in Professional Organizations"
];

class CredentialsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      credentials: props.credentials || [''],
    };
  };

  // update state if props change, i.e. if use clicks to load sample resume 
  componentDidUpdate(prevProps) {
    if (prevProps.credentials !== this.props.credentials) {
      this.setState({
        credentials: this.props.credentials,
      });
    }
  }

  handleInputChange = (event, idx) => {
    const { value } = event.target;
    this.setState((prevState) => {
      const updatedCredentials = [...prevState.credentials];
      updatedCredentials[idx] = value;
      return {
        credentials: updatedCredentials,
      };
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { credentials } = this.state;

    // filter out any empty credentials
    const formData = credentials.filter((credential) => credential !== '');
    this.props.onSubmit(formData);
  };

  addCredential = () => {
    this.setState((prevState) => ({
      // Add an empty credential
      credentials: [...prevState.credentials, ''], 
    }));
  };

  removeCredential = () => {
    this.setState((prevState) => {
      const updatedCredentials = [...prevState.credentials];
      updatedCredentials.pop();

      return {
        credentials: updatedCredentials,
      };
    });
  };

  getRandomPlaceholder() {
    return placeholderCredentials[Math.floor(Math.random() * placeholderCredentials.length)];
  }

  setShowCredentials = () => {
    this.props.updateOptionalComponents('showCredentials');
  }

  render() {
    const { credentials} = this.state;
    const { showCredentials } = this.props;

    return (
      <form className={styles['form-container']}  onSubmit={this.handleSubmit}>
        <p className={styles['show-component']} onClick={this.setShowCredentials}>
          <Icon path={showCredentials ? mdiEyeOff : mdiEye} size={1} /> 
          { showCredentials ? "Hide" : "Show" } Credentials         
        </p>
        <div className={styles['input-field-group']}>
          {credentials.map((credential, idx) => (
            <div key={idx}>
              <label htmlFor={`credential#${idx}`}>Credential {idx + 1}</label> 
              <input
                type="text"
                id={`credential#${idx}`}
                name={`credential#${idx}`}
                value={credential ?? ''}
                placeholder={`e.g. ${this.getRandomPlaceholder()}`}
                onChange={(e) => {
                  this.handleInputChange(e, idx)
                }}
              />            
            </div>
          ))}
        </div>
        <div className= {styles['add-remove-div']}>
          <div className= {styles['add-div']} datatype="addCredential" onClick={this.addCredential}>
            <Icon path={mdiPlus} size={1} />  
            Add Credential
          </div>
          {credentials.length > 1 && (
            // Only show remove button if there is at least one credential input
            <div className= {styles['remove-div']} datatype="removeCredential" onClick={this.removeCredential}>
              <Icon path={mdiTrashCanOutline} size={1} />
              Remove Credential
            </div>
          )}
        </div>
        <button type="submit">Continue</button>
      </form>
    );
  }
}

export default CredentialsForm;