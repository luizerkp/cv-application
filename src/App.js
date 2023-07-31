import { useState, useEffect} from 'react';
import './styles/App.css';
import Header from './components/Header';
import MainContainer from './components/MainContainer';
import FooterStyled from './components/FooterStyled';
import generatePDFDocument from './utils/GeneratePDFDocument';


const App = () => {
  const [currentTemplate, setCurrentTemplate] = useState('template1');
  const [resumeDocument, setResumeDocument] = useState(null)
  const [resumeObject, setResumeObject] = useState(null);

  const updateCurrentTemplate = (templateName) => {
    setCurrentTemplate(templateName)
  };

  const getResumeObject = (resumeObject) => {
    setResumeObject(resumeObject);
  };

  useEffect(() => {
    const resumeElement = document.querySelector('[data-resume]');
    if (!resumeElement) return;
    const updateResumeDocument = async () => {
      await generatePDFDocument({ element: resumeElement }).then((updatedResumeDocument) => {
        setResumeDocument(updatedResumeDocument);
    });
  };
  
    resumeElement && updateResumeDocument();
  }, [currentTemplate, resumeObject]);

  return (
    <div className="App">
      <Header
        updateCurrentTemplate={updateCurrentTemplate}
        currentTemplate={currentTemplate}
        resumeDocument={resumeDocument} 
      />
      <MainContainer
        currentTemplate={currentTemplate}
        getResumeObject={getResumeObject}
      />
      <FooterStyled />
    </div>
  );
}

export default App;