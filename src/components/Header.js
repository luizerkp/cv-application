import { Component } from 'react';
import styles from '../styles/Header.module.css';
import logo from '../imgs/cv-logo.png';
import { mdiFileDownload, mdiFormatListBulleted } from '@mdi/js';
import Icon from '@mdi/react';
import TemplateSelectModal from './TemplateSelectModal';
import { Document, Page, pdf } from '@react-pdf/renderer';
import { saveAs } from 'file-saver';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
    };
  }
  handleModalOpen = () => {
    this.setState({ modalOpen: true });
  };
  handleModalClose = () => {
    this.setState({ modalOpen: false });
  };
  handleGeneratePDF = () => {
    const resumeElement = document.querySelector('[data-resume]');
    // console.log(resumeElement);
    if (resumeElement) {
      const pdf = (
        <Document>
          <Page>
            {resumeElement}
          </Page>
        </Document>
      );

      const asBlob = pdf(pdf);
      console.log(asBlob);
      // saveAs(asBlob, 'resume.pdf');
    }
  };
  
  render() {
    const { currentTemplate, updateCurrentTemplate } = this.props;
    // console.log(currentTemplate);
      return (
          <header className= {styles.header}>
            <div className={styles ['header-left']}>
              <img className= {styles.logo} src={logo} alt="Logo that reads CV" />
              <h1 className={styles['gradient-text']}>CV Creator</h1>
            </div>
            <div className={styles['header-middle']}>
              <button className={styles['header-button']} id='templates' onClick={this.handleModalOpen}
              >
                <Icon path={mdiFormatListBulleted} size={1} />
                Templates
              </button>
            </div>
            <div className={styles['header-right']} id='downloadPDF'>
              <button className={styles['header-button']} onClick={this.handleGeneratePDF}>
                <Icon path={mdiFileDownload} size={1} />
                Generate PDF
              </button>               
            </div>
            <TemplateSelectModal
              isOpen={this.state.modalOpen}
              onClose={this.handleModalClose}
              currentTemplate={currentTemplate}
              updateCurrentTemplate={updateCurrentTemplate}
            />
          </header>
      );
  }
}

export default Header;