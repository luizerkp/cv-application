import { Component } from 'react';
import styles from '../styles/Header.module.css';
import logo from '../imgs/cv-logo.png';
import { mdiFileDownload, mdiFormatListBulleted } from '@mdi/js';
import Icon from '@mdi/react';
import TemplateSelectModal from './TemplateSelectModal';
import { Page, Document, PDFDownloadLink, Text, View} from '@react-pdf/renderer';
// import GeneratePDFDocument from '../utils/GeneratePDFDocument';


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      resumeFile: null,
    };
  }
  handleModalOpen = () => {
    this.setState({ modalOpen: true });
  };
  handleModalClose = () => {
    this.setState({ modalOpen: false });
  };
  handleGeneratePDF = (resumeElement) => {
    console.log(resumeElement);
    const resumePDF = (
      <Document>
        <Page size="A4">
          <View>
            <Text>Hello World!</Text>
          </View>
        </Page>
      </Document>
    )

    console.log(resumePDF);
  
    return (
      <PDFDownloadLink className={styles['header-button-download-link']} document={resumePDF} fileName="resume.pdf">
        {({ blob, url, loading, error }) => (
          loading ? 'Generating PDF...' : 'Download PDF'
        )}
      </PDFDownloadLink>
    );
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
            <button className={styles['header-button']} onClick={() => {
              const resumeElement = document.querySelector('[data-resume]');
              this.handleGeneratePDF(resumeElement);
              }}>
              <Icon path={mdiFileDownload} size={1} />
              {this.handleGeneratePDF()}
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