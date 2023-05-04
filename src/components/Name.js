import { Component } from 'react';

class Name extends Component {
    constructor(props) {
        super(props);
        this.state = "John Smith";
    }
    render() {
        return (
          <h1>{this.state}</h1>
        );
    }
}

export default Name;