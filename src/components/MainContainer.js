import { Component } from 'react';
import styles from '../styles/MainContainer.module.css';
// import ResumeContainer from './ResumeContainer';
import SideBar from './SideBar';

class MainContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
          <div className={styles['main-container']}>
            <SideBar></SideBar>

            {/* <ResumeContainer></ResumeContainer> */}
          </div>
        );
    }
}

export default MainContainer;