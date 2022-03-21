import './App.css';
import GlobalCSS from './styled-components/global.css'
import Header from './components/header';
import Body from './components/body';

function App() {
  return (
     <>
      <GlobalCSS/>
      <Header></Header>
      <Body></Body>
     </>
  );
}

export default App;
