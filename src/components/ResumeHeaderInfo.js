import { Component } from "react";

class ResumeHeaderInfo extends Component {
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
    <div className= "resume-header">      
      <div className= "name">
        {fullName}
      </div>
      <div className= 'title'>
        {title}
      </div>
    </div>
    );
  }
}

export default ResumeHeaderInfo;