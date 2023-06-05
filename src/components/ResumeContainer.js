// import styles from '../styles/ResumeContainer.module.css';
import { Component } from 'react';
import Template1 from './Template1';

class ResumeContainer extends Component {
  render() {
    const { currentTemplate, masterObject } = this.props;
    // console.log(currentTemplate);

    const templates = {
      template1: () => <Template1 masterObj={masterObject} />,
    };
    return (
      templates[currentTemplate] ? templates[currentTemplate]() : templates.template1()
    );
  }
}

export default ResumeContainer;
