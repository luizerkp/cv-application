import { Component } from 'react';
import styles from '../styles/MainContainer.module.css';
import imgLogo from '../imgs/logo.svg';

class MainContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className={styles['main-container']}>
                <img src={imgLogo} alt='logo' />
            </div>
        );
    }
}

export default MainContainer;