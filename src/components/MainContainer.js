import { Component } from 'react';
import styles from '../styles/MainContainer.module.css';
// import imgLogo from '../imgs/logo.svg';
import ResumeContainer from './ResumeContainer';

class MainContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className={styles['main-container']}>
                <ResumeContainer></ResumeContainer>
            </div>
        );
    }
}

export default MainContainer;