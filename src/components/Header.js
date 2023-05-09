import { Component } from 'react';
import styles from '../styles/Header.module.css';
import logo from '../imgs/cv-logo.png';
import { mdiFileDownload, mdiFormatListBulleted } from '@mdi/js';
import Icon from '@mdi/react';

class Header extends Component {
    render() {
        return (
            <header className= {styles.header}>
              <div className={styles ['header-left']}>
                <img className= {styles.logo} src={logo} alt="Logo that reads CV" />
                <h1 className={styles['gradient-text']}>CV Creator</h1>
              </div>
              <div className={styles['header-middle']}>
                <button className={styles['header-button']} id='templates'>
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
            </header>
        );
    }
}

export default Header;