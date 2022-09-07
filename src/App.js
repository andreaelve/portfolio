import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <header className="header">
        <p className="header_name">Andrea Elvegård</p>
        <Navbar />
      </header>
      <Home />
    </div>
  );
}

export default App;
