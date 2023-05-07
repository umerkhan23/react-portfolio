import Lottie from 'lottie-react';
import Loading from './loading.json';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import './index.css';
import Main from './Main';
import About from './About';
import TeckStack from './components/TeckStack';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
function App() {
  const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 5000);
    }, []);
  return (
    <>
        {loading && <div className='items-center w-1/2 absolute left-1/4'>
            <Lottie animationData={Loading} />
            </div>}
    {!loading && <div>
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
    </div>}
    </>
  );
}

export default App;
