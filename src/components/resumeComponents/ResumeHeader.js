const  ResumeHeader = (props) => {
  const { fullName, title, styles } = props;
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

export default ResumeHeader;