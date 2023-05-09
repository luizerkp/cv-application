import './styles/App.css';
import Header from './components/Header';
import MainContainer from './components/MainContainer';
import FooterStyled from './components/FooterStyled';

function App() {
  return (
    <div className="App">
      <Header />
      <MainContainer />
      <FooterStyled />
    </div>
  );
}

export default App;
