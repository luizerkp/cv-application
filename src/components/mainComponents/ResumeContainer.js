import { Component } from 'react';
import Template1 from '../templateComponents/Template1';
import Template2 from '../templateComponents/Template2';
import Template3 from '../templateComponents/Template3';

class ResumeContainer extends Component {
  render() {
    const { currentTemplate, 
      resumeObject, 
      handleUpdateResumeDocument,
      optionalComponents
     } = this.props;
    const templates = {
      template1: () => <Template1
        handleUpdateResumeDocument  = {handleUpdateResumeDocument} 
        resumeObject={resumeObject}
        optionalComponents={optionalComponents}
      />,
      template2: () => <Template2
        handleUpdateResumeDocument  = {handleUpdateResumeDocument} 
        resumeObject={resumeObject}
        optionalComponents={optionalComponents}
      />,
      template3: () => <Template3
        handleUpdateResumeDocument  = {handleUpdateResumeDocument}
        resumeObject={resumeObject}
        optionalComponents={optionalComponents}
      />,
    };
    return (
      templates[currentTemplate] ? templates[currentTemplate]() : templates.template1()
    );
  }
}

export default ResumeContainer;
