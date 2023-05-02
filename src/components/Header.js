import { Component } from 'react';
import styles from '../styles/Header.module.css';

class Header extends Component {
    render() {
        return (
            <header className= {styles.header}>
                <h1>Resume Creator</h1>
            </header>
        );
    }
}

export default Header;