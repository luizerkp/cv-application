import { Component } from 'react';
import styled from 'styled-components';

const StyledInterests = styled.div`
    ul {
        list-style-type: none;
        padding: .5rem;
        margin: 0;
    }
    li {
        margin-bottom: 10px;
    }
`;

const defaultInterests = [
    'Design',
    'Photography',
    'Writing'
]
class Interests extends Component {
    constructor(props) {
        super(props);
        this.state = {
            interests: [...defaultInterests],
        };
    }
    render() {
        return (
          <StyledInterests>
              <ul>
                  {this.state.interests.map((interest, idx) => (
                      <li key={idx}>{interest}</li>
                  ))}
              </ul>
          </StyledInterests>
        );
    }
}

export default Interests;