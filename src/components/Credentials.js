import { Component } from "react";
import styles from "../styles/Template1.module.css";

class Credentials extends Component {
  render() {
    const { credentials } = this.props;
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
}

export default Credentials;