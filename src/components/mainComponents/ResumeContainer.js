import Template1 from '../templateComponents/Template1';
import Template2 from '../templateComponents/Template2';
import Template3 from '../templateComponents/Template3';

const ResumeContainer = (props) =>{
  const { 
    currentTemplate, 
    resumeObject, 
    optionalComponents
    } = props;

  const templates = {
    template1: () => <Template1
      resumeObject={resumeObject}
      optionalComponents={optionalComponents}
    />,
    template2: () => <Template2
      resumeObject={resumeObject}
      optionalComponents={optionalComponents}
    />,
    template3: () => <Template3
      resumeObject={resumeObject}
      optionalComponents={optionalComponents}
    />,
  };
  return (
    templates[currentTemplate] ? templates[currentTemplate]() : templates.template1()
  );
}

export default ResumeContainer;