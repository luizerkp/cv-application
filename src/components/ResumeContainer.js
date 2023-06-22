import { Component } from 'react';
import Template1 from './Template1';
import Template2 from './Template2';

class ResumeContainer extends Component {
  // when the component mounts, we want to update the resume document on App.js state
  componentDidMount() {
    this.props.handleUpdateResumeDocument();
  }
  // when the component updates, we want to update the resume document on App.js state
  componentDidUpdate() {
    this.props.handleUpdateResumeDocument();
  }

  render() {
    const { currentTemplate, masterObject } = this.props;

    const selectedTemplateImport = () => {
      switch (currentTemplate) {
        case 'template1':
          return import('./Template1');
        case 'template2':
          return import('./Template2');
        default:
          return import('./Template1');
      }
    };

    selectedTemplateImport();

    const templates = {
      template1: () => <Template1 
        masterObj={masterObject}
      />,
      template2: () => <Template2 
        masterObj={masterObject}
      />
    };

    return (
      templates[currentTemplate] ? templates[currentTemplate]() : templates.template1()
    );
  }
}

export default ResumeContainer;
