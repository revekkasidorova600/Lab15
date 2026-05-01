import Footer from './components/Footer/index';
import Head from './components/Head/index';
import Main from './components/Main/index';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Head />
      <Main />
      <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
