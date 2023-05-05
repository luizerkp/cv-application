import { Component } from 'react';

const defaultSummary = "Experienced Product Manager with a proven track record of successfully delivering products from conception to launch. Skilled in market research, product strategy, user experience design, project management, and team leadership. Strong ability to identify customer needs and translate them into product features that drive business growth and customer satisfaction. Proactive problem-solver with excellent communication and collaboration skills.";

class ResumeSummary extends Component {
    constructor(props) {
      super(props);
      this.state = {
        summary: defaultSummary 
      };
    }
    render() {
        return (
          <p>{this.state.summary}</p>
        );
    }
}

export default ResumeSummary;