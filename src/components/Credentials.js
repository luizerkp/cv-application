import { Component } from "react";


class Credentials extends Component {
  render() {
    const { credentials } = this.props;
    if (credentials.length === 0) return null;
    return (
      <div>
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