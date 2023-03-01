import { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import api from '../../utils/TheDogApi';
import Header from '../Header/Header';
import Home from '../Home/Home';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import About from '../About/About';
import Main from '../Main/Main';

function App() {
  const [cards, setCards] = useState([]);
  const [breeds, setBreeds] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [cardsToShow, setCardsToShow] = useState(3);
  const navigate = useNavigate();

  const breedsPage = () => {
    navigate('/breeds');
  };

  function handleShowMoreCards() {
    setCardsToShow(cardsToShow + 3);
  }

  useEffect(() => {
    api
      .getInitialCards()
      .then(setIsLoading(true))
      .then((initialCards) => {
        setCards(initialCards);
        setIsLoading(false);
      })
      .catch((err) => {
        alert(
          'Sorry, something went wrong with the request. There may be a connection issue or the server may be down. Please try again later.'
        );
      });
    api
      .getBreeds()
      .then((allBreeds) => {
        setBreeds(allBreeds);
      })
      .catch((err) => {
        alert(
          'Sorry, something went wrong with the request. There may be a connection issue or the server may be down. Please try again later.'
        );
      });
  }, []);

  return (
    <div className='page'>
      <div className='page__content'>
        <Header />
        <Navigation />
        <Routes>
          <Route path='/' element={<Home breedsPage={breedsPage} />} />
          <Route
            path='/breeds'
            element={
              <Main
                cards={cards}
                isLoading={isLoading}
                breeds={breeds}
                showMoreCards={handleShowMoreCards}
                cardsToShow={cardsToShow}
              />
            }
          />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
