import { useState, useEffect } from 'react';
import './styles/App.css';
import Header from './components/Header';
import MainContainer from './components/MainContainer';
import FooterStyled from './components/FooterStyled';
import generatePDFDocument from './utils/GeneratePDFDocument';


const App = () => {
  const [currentTemplate, setCurrentTemplate] = useState('template1');
  const [resumeDocument, setResumeDocument] = useState(null)
  const [resumeElement, setResumeElement] = useState(null);
  const [resumeObjectUpdated, setResumeObjectUpdated] = useState(false);

  useEffect(() => {
    setResumeElement(document.querySelector('[data-resume]'));
  }, []);

  const updateCurrentTemplate = (templateName) => {
    setCurrentTemplate(templateName)
  };
  
useEffect(() => {
  const updateResumeDocument = () => {
    generatePDFDocument({ element: resumeElement }).then((updatedResumeDocument) => {
      setResumeDocument(updatedResumeDocument);
    });
  };
  
  resumeElement && updateResumeDocument();
}, [resumeElement]);

  return (
    <div className="App">
      <Header
        updateCurrentTemplate={updateCurrentTemplate}
        currentTemplate={currentTemplate}
        resumeDocument={resumeDocument} 
      />
      <MainContainer
        currentTemplate={currentTemplate}
        setResumeObjectUpdated={setResumeObjectUpdated}
      />
      <FooterStyled />
    </div>
  );
  
}

export default App;