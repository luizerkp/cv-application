import { Component } from 'react';
import styles from '../styles/CredentialsForm.module.css';


class CredentialsForm extends Component {
  constructor(props) {
    super(props);
    // console.log(props.Credentials);
    this.state = {
      credentials: props.credentials || [''],
    };
  };

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
    const formData = credentials.filter((credential) => credential !== '');

    formData.length > 0 && this.props.onSubmit(formData);
  };

  addCredential = () => {
    this.setState((prevState) => ({
      credentials: [...prevState.credentials, ''], // Add an empty credential
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

  render() {
    const { credentials } = this.state;
    // console.log(Array.isArray(Credentials));
    return (
      <form onSubmit={this.handleSubmit}>
        <div className={styles['Credentials-div']}>
          {credentials.map((credential, idx) => (
            <input
              type="text"
              key={idx}
              id={`credential#${idx}`}
              name={`credential#${idx}`}
              value={credential}
              placeholder={`credential#${idx + 1}`}
              onChange={(e) => {
                this.handleInputChange(e, idx)
              }}
            />
          ))}
        </div>
        <div>
          <div datatype="addCredential" onClick={this.addCredential}>
            Add Credential
          </div>
          {credentials.length > 0 && ( // Only show remove button if there is at least one credential input
            <div datatype="removeCredential" onClick={this.removeCredential}>
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