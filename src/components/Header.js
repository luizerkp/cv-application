import { Component } from 'react';
import styles from '../styles/Header.module.css';
import logo from '../imgs/cv-logo.png';

class Header extends Component {
    render() {
        return (
            <header className= {styles.header}>
              <img className= {styles.logo} src={logo} alt="Logo that reads CV" />
              <h1>CV Creator</h1>        
            </header>
        );
    }
}

export default Header;