import { Component } from 'react';
const sampleResumeHeader = {
  fullName: "Your Name",
  title: "Your Title",
  aboutMe: "About your professional Achievements",
};
class ResumeHeaderForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          fullName: "",
          title: "",
          aboutMe: "",
        };
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
      this.setState({
        fullName: "",
        title: "",
        aboutMe: "",
      });
    };
    render() {
      const { fullName, title, aboutMe } = this.state;
        return (
          <form>
            <div>
              <label htmlFor="fullName">Full Name:</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={fullName}
                placeholder= {sampleResumeHeader.fullName}
                onChange={this.handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                id="title"
                name="title"
                value={title}
                placeholder= {sampleResumeHeader.title}
                onChange={this.handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="aboutMe">About Me:</label>
              <input
                type="text"
                id="aboutMe"
                name="aboutMe"
                value={aboutMe}
                placeholder= {sampleResumeHeader.aboutMe}
                onChange={this.handleInputChange}
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        );
    }
}

export default ResumeHeaderForm;