const Skills = (props) => {
  const { skills, styles } = props;

  if (skills.length === 0) return null;
  
  return (
    <div className={styles['skills']}>
      <h2>Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          skill && <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;