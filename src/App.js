import logo from './logo.svg';
import './App.css';
// import "./index.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Gallery from './pages/gallery';
import Contact from './pages/contact';
import Academy from './pages/academy';

function App() {
  return (
    <Router>
    <Routes>
      <Route exact path="/" element={Home} />
      <Route path="/about" element={About} />
      <Route path="/contact" element={Contact} />
      <Route path="/gallery" element={Gallery} />
      <Route path="/academy" element={Academy} />
    </Routes>
  </Router>
  
  );
}

export default App;
