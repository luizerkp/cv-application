const Credentials = (props) => {
  const { credentials, styles } = props;
  if (credentials.length === 0) return null;
  return (
    <div className={styles['credentials']}>
      <h2>Credentials</h2>
      <ul>
        {credentials.map((credential, index) => (
          credential && <li key={index}>{credential}</li>
        ))}
      </ul>
    </div>
  );
}

export default Credentials;