import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Home from '../Home/Home';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import About from '../About/About';
import Main from '../Main/Main';

function App() {
  const navigate = useNavigate();

  const breedsPage = () => {
    navigate('/breeds');
  };

  return (
    <div className='page'>
      <div className='page__content'>
        <Header />
        <Navigation />
        <Routes>
          <Route
            path='/dog_breeds-frontend'
            element={<Home breedsPage={breedsPage} />}
          />
          <Route path='/breeds' element={<Main />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
