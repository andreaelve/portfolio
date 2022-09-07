import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Work from './components/Work';

function App() {
  return (
    <div className="App">
      <header className="header">
        <p className="header_name">Andrea Elvegård</p>
        <Navbar />
      </header>
      <Home />
      <About />
      <Work />
    </div>
  );
}

export default App;
