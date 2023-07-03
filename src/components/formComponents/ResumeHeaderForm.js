import { Component } from 'react';
import styles from '../../styles/ResumeForms.module.css';

const placeholderResumeHeaderInfo = {
  fullName: "Your Name",
  title: "Your Title",
  aboutMe: "About yourself and your professional Achievements",
};

class ResumeHeaderForm extends Component {
  constructor(props) {
      super(props);
      this.state = {
        fullName: props.header.fullName,
        title: props.header.title,
        aboutMe: props.header.aboutMe,
      };
  }

  // update state if props change, i.e. if use clicks to load sample resume
  componentDidUpdate(prevProps) {
    if (prevProps.header !== this.props.header) {
      this.setState({
        fullName: this.props.header.fullName,
        title: this.props.header.title,
        aboutMe: this.props.header.aboutMe,
      });
    }
  }
  
  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  
  handleSubmit = (event) => {
    event.preventDefault();
    const { fullName, title, aboutMe } = this.state;
    const formData = { fullName, title, aboutMe };
    this.props.onSubmit(formData);
  };

  render() {
    const { fullName, title, aboutMe } = this.state;
    return (
      <form className={styles['form-container']} onSubmit={this.handleSubmit}>
        <div className={styles['input-field-group']}>
          <div>
            <label htmlFor="fullName">Full Name:</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={fullName ?? ''}
              placeholder= {placeholderResumeHeaderInfo.fullName}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={title ?? ''}
              placeholder= {placeholderResumeHeaderInfo.title}
              onChange={this.handleInputChange}
            />
          </div>
          <div className={styles['text-box']}>
            <label htmlFor="aboutMe">About Me:</label>
            <textarea
              type="text"
              id="aboutMe"
              name="aboutMe"
              value={aboutMe ?? ''}
              placeholder= {placeholderResumeHeaderInfo.aboutMe}
              onChange={this.handleInputChange}
            />
          </div>
        </div>
        <button type="submit">Continue</button>
      </form>
    );
  }
}

export default ResumeHeaderForm;