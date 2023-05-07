import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import './index.css';
import Main from './Main';
import About from './components/About';
import TeckStack from './components/TeckStack';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/About" element={<About />} />
        <Route path="/TeckStack" element={<TeckStack />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      </div>
      </BrowserRouter>  
    </div>
  );
}

export default App;
