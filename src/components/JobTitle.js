import { Component } from 'react';

class JobTitle extends Component {
    constructor(props) {
        super(props);
        this.state = "Account Manager";
    }
    render() {
        return (
          <h2>{this.state}</h2>
        );
    }
}

export default JobTitle;