import { Component } from "react";

class ResumeHeader extends Component {
  render() {
    const { fullName, title, styles } = this.props;
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