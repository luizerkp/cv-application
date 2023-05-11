import { Component } from 'react';
// import styles from '../styles/ContactInfo.module.css';

const sampleContactInfo = {
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
      address: props.contact.address || "",
      phone: props.contact.phone || "",
      email: props.contact.email || "",
      linkedin: props.contact.linkedin || "",
      github: props.contact.github || "",
      website: props.contact.website || "",
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
    const newContactInfo = JSON.stringify(formData) !== JSON.stringify(this.props.contact);
    newContactInfo && this.props.onSubmit(formData);
  };

  render() {
    const { address, phone, email, linkedin, github, website } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={address}
            placeholder= {sampleContactInfo.address}
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input
            type="pnone"
            id="phone"
            name="phone"
            value={phone}
            placeholder= {sampleContactInfo.phone}
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
            placeholder= {sampleContactInfo.email}
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
            placeholder= {sampleContactInfo.linkedin}
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
            placeholder= {sampleContactInfo.github}
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
            placeholder= {sampleContactInfo.website}
            onChange={this.handleInputChange}
          />
        </div>
        <button type="submit">Continue</button>
      </form>
    );
  }
}

export default ContactForm;
