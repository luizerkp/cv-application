import { Component } from 'react';
import styles from '../styles/ResumeForms.module.css';

const placeholderContactInfo = {
  address: "City, State Zip",
  phone: "###-###-####",
  email: "youremail@hotmail.com",
  linkedin: "linkedin.com/in/yourname",
  github: "github.com/yourname",
  website: "www.yourwebsite.com",
};

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: props.contact.address,
      phone: props.contact.phone,
      email: props.contact.email,
      linkedin: props.contact.linkedin,
      github: props.contact.github,
      website: props.contact.website,
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { address, phone, email, linkedin, github, website } = this.state;
    const formData = { address, phone, email, linkedin, github, website };
    this.props.onSubmit(formData);
  };

  render() {
    const { address, phone, email, linkedin, github, website } = this.state;

    return (
      <form className={styles['form-container']} onSubmit={this.handleSubmit}>
        <div className={styles['input-field-group']}>
          <div>
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              name="address"
              value={address}
              placeholder= {placeholderContactInfo.address}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={phone}
              placeholder= {placeholderContactInfo.phone}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              placeholder= {placeholderContactInfo.email}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="linkedin">LinkedIn <span>(optional)</span>:</label>
            <input
              type="text"
              id="linkedin"
              name="linkedin"
              value={linkedin}
              placeholder= {placeholderContactInfo.linkedin}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="github">GitHub <span>(optional)</span>:</label>
            <input
              type="text"
              id="github"
              name="github"
              value={github}
              placeholder= {placeholderContactInfo.github}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="website">Website <span>(optional)</span>:</label>
            <input
              type="text"
              id="website"
              name="website"
              value={website}
              placeholder= {placeholderContactInfo.website}
              onChange={this.handleInputChange}
            />
          </div>     
        </div>
        <button type="submit">Continue</button>
      </form>
    );
  }
}

export default ContactForm;
