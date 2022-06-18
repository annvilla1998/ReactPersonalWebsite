import './App.css';
import { Routes, Route } from 'react-router-dom'
import { Navigation } from './components/Navigation/index'
import { Homepage } from './components/Homepage/index'
import { Resume } from './components/Resume/index'
import { Portfolio } from './components/Portfolio/index'
import { Contact } from './components/Contact/index'

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
