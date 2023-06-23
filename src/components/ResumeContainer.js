import { Component } from 'react';
import Template1 from './Template1';
import Template2 from './Template2';
import Template3 from './Template3';

class ResumeContainer extends Component {
  render() {
    const { currentTemplate, resumeObject, handleUpdateResumeDocument } = this.props;
    const templates = {
      template1: () => <Template1
        handleUpdateResumeDocument  = {handleUpdateResumeDocument} 
        resumeObject={resumeObject}
      />,
      template2: () => <Template2
        handleUpdateResumeDocument  = {handleUpdateResumeDocument} 
        resumeObject={resumeObject}
      />,
      template3: () => <Template3
        handleUpdateResumeDocument  = {handleUpdateResumeDocument}
        resumeObject={resumeObject}
      />,
    };
    return (
      templates[currentTemplate] ? templates[currentTemplate]() : templates.template1()
    );
  }
}

export default ResumeContainer;
