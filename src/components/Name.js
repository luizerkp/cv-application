import { Component } from 'react';

class Name extends Component {
    constructor(props) {
        super(props);
        this.state = {
          fullName: "John Smith"
        };
    }
    render() {
        return (
          <h1>{this.state.fullName}</h1>
        );
    }
}

export default Name;