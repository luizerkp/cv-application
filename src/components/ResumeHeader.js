import { Component } from "react";
import styles from "../styles/Template1.module.css";

class ResumeHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: props.fullName,
      title: props.title, 
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.fullName !== this.props.fullName) {
      // console.log('ResumeHeaderInfo componentDidUpdate');
      this.setState({
        fullName: this.props.fullName,
      });
    }
    if (prevProps.title !== this.props.title) {
      // console.log('ResumeHeaderInfo componentDidUpdate');
      this.setState({
        title: this.props.title,
      });
    }
  }

  render() {
    const { fullName, title } = this.state;
    return (
    <div className= {styles['resume-header']}>      
      <div className= {styles['name']}>
        {fullName}
      </div>
      <div className= {styles['title']}>
        {title}
      </div>
    </div>
    );
  }
}

export default ResumeHeader;