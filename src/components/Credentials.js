import { Component } from "react";


class Credentials extends Component {
  constructor(props) {
    super(props);
    this.state = {
      credentials: props.credentials,
    };
  }
  componentDidUpdate(prevProps) {
    if (prevProps.credentials !== this.props.credentials) {
      this.setState({
        credentials: this.props.credentials,
      });
    }
  }
  render() {
    const { credentials } = this.state;
    if (credentials.length === 0) return null;
    return (
      <div>
        <h2>Credentials</h2>
        <ul>
          {credentials.map((credential, index) => (
            <li key={index}>{credential}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Credentials;