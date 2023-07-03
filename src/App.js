import { Component } from 'react';
import './styles/App.css';
import Header from './components/Header';
import MainContainer from './components/MainContainer';
import FooterStyled from './components/FooterStyled';
import generatePDFDocument from './utils/GeneratePDFDocument';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTemplate: 'template1',
      resumeDocument: null,
    };
  }

  updateCurrentTemplate = (templateName) => {
    this.setState({ currentTemplate: templateName });
  };
  
  updateResumeDocument = () => {
    const resumeElement = document.querySelector('[data-resume]');
    generatePDFDocument({ element: resumeElement }).then((resumeDocument) => {
      this.setState({ resumeDocument });
    });
  };
  
  render() {
    const { currentTemplate, resumeDocument } = this.state;
    return (
      <div className="App">
        <Header
          updateCurrentTemplate={this.updateCurrentTemplate}
          currentTemplate={currentTemplate}
          resumeDocument={resumeDocument} 
        />
        <MainContainer
          currentTemplate={currentTemplate} 
          updateResumeDocument={this.updateResumeDocument}
        />
        <FooterStyled />
      </div>
    );
  }
}

export default App;
