import { Component } from 'react';
import Template1 from './Template1';

class ResumeContainer extends Component {
  // when the component mounts, we want to update the resume document on App.js state
  componentDidMount() {
    this.props.handleUpdateResumeDocument();
  }
  render() {
    const { currentTemplate, masterObject } = this.props;

    const templates = {
      template1: () => <Template1 masterObj={masterObject} />,
    };

    return (
      templates[currentTemplate] ? templates[currentTemplate]() : templates.template1()
    );
  }
}

export default ResumeContainer;
