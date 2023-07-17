import { useState, useEffect } from 'react';
import styles from '../../styles/ResumeForms.module.css';

const ContactForm = ({ contact, onSubmit }) => {
  const [address, setAddress] = useState(contact.address ?? '');
  const [phone, setPhone] = useState(contact.phone ?? '');
  const [email, setEmail] = useState(contact.email ?? '');
  const [linkedin, setLinkedin] = useState(contact.linkedin ?? '');
  const [github, setGithub] = useState(contact.github ?? '');
  const [website, setWebsite] = useState(contact.website ?? '');

  useEffect(() => {
    setAddress(contact.address ?? '');
    setPhone(contact.phone ?? '');
    setEmail(contact.email ?? '');
    setLinkedin(contact.linkedin ?? '');
    setGithub(contact.github ?? '');
    setWebsite(contact.website ?? '');
  }, [contact]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'address':
        setAddress(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'linkedin':
        setLinkedin(value);
        break;
      case 'github':
        setGithub(value);
        break;
      case 'website':
        setWebsite(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = { address, phone, email, linkedin, github, website };
    onSubmit(formData);
  };

  return (
    <form className={styles['form-container']} onSubmit={handleSubmit} autoComplete='on'>
      <div className={styles['input-field-group']}>
        <div>
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={address}
            placeholder="Enter your address"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={phone}
            placeholder="Enter your phone number"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            placeholder="Enter your email address"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="linkedin">LinkedIn:</label>
          <input
            type="text"
            id="linkedin"
            name="linkedin"
            value={linkedin}
            placeholder="Enter your LinkedIn profile URL"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="github">GitHub:</label>
          <input
            type="text"
            id="github"
            name="github"
            value={github}
            placeholder="Enter your GitHub profile URL"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="website">Website:</label>
          <input
            type="text"
            id="website"
            name="website"
            value={website}
            placeholder="Enter your personal website URL"
            onChange={handleInputChange}
          />
        </div>
      </div>
      <button type="submit">Continue</button>
    </form>
  );
};

export default ContactForm;
