import { useState } from 'react';
import styles from '../styles/Header.module.css';
import logo from '../imgs/cv-logo.png';
import { mdiFileDownload, mdiFormatListBulleted } from '@mdi/js';
import Icon from '@mdi/react';
import TemplateSelectModal from './TemplateSelectModal';
import { PDFDownloadLink } from '@react-pdf/renderer';

const Header = (props) => {
  const { updateCurrentTemplate, currentTemplate, resumeDocument } = props;
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <header className= {styles.header}>
      <div className={styles ['header-left']}>
        <img className= {styles.logo} src={logo} alt="Logo that reads CV" />
        <h1 className={styles['gradient-text']}>CV Creator</h1>
      </div>
      <div className={styles['header-middle']}>
        <button className={styles['header-button']} id='templates' 
        onClick={handleModalOpen}>
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
        isOpen={modalOpen}
        onClose={handleModalClose}
        currentTemplate={currentTemplate}
        updateCurrentTemplate={updateCurrentTemplate}
      />
    </header>
  );
}

export default Header;