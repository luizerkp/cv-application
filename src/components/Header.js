import { Component } from 'react';
import styles from '../styles/Header.module.css';
import logo from '../imgs/cv-logo.png';
import { mdiFileDownload, mdiFormatListBulleted } from '@mdi/js';
import Icon from '@mdi/react';
import TemplateSelectModal from './TemplateSelectModal';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
    };
  }
  handleModalOpen = () => {
    this.setState({ modalOpen: true });
    // document.body.classList.add('modal-open');
  };
  handleModalClose = () => {
    this.setState({ modalOpen: false });
    // document.body.classList.remove('modal-open');
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
                <button className={styles['header-button']}>
                  <Icon path={mdiFileDownload} size={1} />
                  Export PDF
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