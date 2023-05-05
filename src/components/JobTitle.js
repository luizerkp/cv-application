import { Component } from 'react';

class JobTitle extends Component {
    constructor(props) {
        super(props);
        this.state = 
        {
          title: "Account Manager"
        };
    }
    render() {
        return (
          <h2>{this.state.title}</h2>
        );
    }
}

export default JobTitle;