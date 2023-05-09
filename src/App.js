import Lottie from 'lottie-react';
import Loading from './loading.json';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Main from './components/Main';
function App() {
  const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);
  return (
    <>
    {loading && <div className='items-center w-1/2 absolute left-1/4'>
            <Lottie animationData={Loading} />
            </div>}
    {!loading && <div className=''>
      <BrowserRouter>
      <div>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      </div>
      </BrowserRouter>  
    </div>}
    </>
  );
}

export default App;