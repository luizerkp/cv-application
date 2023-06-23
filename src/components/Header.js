import { Component } from 'react';
import styles from '../styles/Header.module.css';
import logo from '../imgs/cv-logo.png';
import { mdiFileDownload, mdiFormatListBulleted } from '@mdi/js';
import Icon from '@mdi/react';
import TemplateSelectModal from './TemplateSelectModal';
import { PDFDownloadLink } from '@react-pdf/renderer';

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

  render() {
    const { currentTemplate, updateCurrentTemplate, resumeDocument } = this.props;
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
        <div className={styles['header-right']}>
        {resumeDocument && (
          <PDFDownloadLink document={resumeDocument} fileName="resume.pdf">
            <button className={styles['header-button']}>
              <Icon path={mdiFileDownload} size={1} />
              Download PDF
            </button>
          </PDFDownloadLink>
        )}
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