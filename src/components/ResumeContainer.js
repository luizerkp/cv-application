// import styles from '../styles/ResumeContainer.module.css';
import { Component } from 'react';
import Template1 from './Template1';

class ResumeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTemplate: props.currentTemplate,
      masterObject: props.masterObject,
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.masterObject !== this.props.masterObject) {
      // console.log('ResumeContainer componentDidUpdate');
      this.setState({
        masterObject: this.props.masterObject,
      });
    }
  }

  render() {
    // console.log('ResumeContainer render');
    const { currentTemplate, masterObject } = this.state;
    const templates = {
      template1: () => <Template1 masterObj={masterObject} />,
    };
    return (
      templates[currentTemplate] ? templates[currentTemplate]() : templates.template1()
    );
  }
}

export default ResumeContainer;
