import GlobalCSS from './styled-components/global.css'
import Header from './components/header';
import StatusDashboard from './pages/StatusDashboard';

function App() {
  return (
     <>
      <GlobalCSS/>
      <Header></Header>
      <StatusDashboard></StatusDashboard>
     </>
  );
}

export default App;
