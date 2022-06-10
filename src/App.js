import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Main />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
