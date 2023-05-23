import { Component } from 'react';
import './styles/App.css';
import Header from './components/Header';
import MainContainer from './components/MainContainer';
import FooterStyled from './components/FooterStyled';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      currentTemplate: 'template1',
    };
  }

  updateCurrentTemplate = (templateName) => {
    this.setState({ currentTemplate: templateName });
  };
  
  render() {
    const { currentTemplate } = this.state;
    return (
      <div className="App">
        <Header
          updateCurrentTemplate={this.updateCurrentTemplate}
          currentTemplate={currentTemplate} 
        />
        <MainContainer
          currentTemplate={currentTemplate} 
        />
        <FooterStyled />
      </div>
    );
  }
}

export default App;
