import styles from '../styles/ResumeContainer.module.css';
import { Component } from 'react';



// to do Refactor so that it imports templates that will consume the data from the different resume components
class ResumeContainer extends Component {
    render() {
      const { currentTemplate } = this.props;
        return (
          <div className={styles['resume-container']}>Current Resume template is {currentTemplate}</div>
        );
    }
}

export default ResumeContainer;