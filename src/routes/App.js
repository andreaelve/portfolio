import Home from '../components/Home';
import Navbar from '../components/Navbar';
import About from '../components/About';
import Work from '../components/Work';
import Contact from '../components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
