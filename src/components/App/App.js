import { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import api from '../../utils/TheDogApi';
import Header from '../Header/Header';
import Home from '../Home/Home';
// import Description from '../Description/Description';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import About from '../About/About';
import Preloader from '../Preloader/Preloader';
import Main from '../Main/Main';
// import ImagePopup from '../ImagePopup/ImagePopup';

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

  // const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  // const [selectedCard, setSelectedCard] = useState({});

  // function handleCardClick(card) {
  //   setSelectedCard(card);
  //   setIsImagePopupOpen(true);
  //   console.log(card);
  // }

  // function goToBreeds() {
  //   <Link to='/breeds'></Link>;
  // }

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

  // console.log(cards);
  // console.log(breeds);
  // breeds.forEach((breed) => {
  //   console.log(breed);
  // });

  // function filterBreedsWithImage(breeds) {
  //   const result = breeds.filter(hasImage);

  //   function hasImage(breed) {
  //     return breed.image;
  //   }
  //   console.log(result);
  // }

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
          {/* <MainImage />
        <Description /> */}
          {/* <About /> */}
          {/* <div className=''></div>
        <Routes>
          <Route path='/' element={<About />} />
          <Route path='/main' element={<Main />} />
        </Routes> */}
        </Routes>
      </div>
      <Footer />
    </div>
  );

  // return (
  //   <div className='App'>
  //     <header className='App-header'>
  //       <img src={logo} className='App-logo' alt='logo' />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className='App-link'
  //         href='https://reactjs.org'
  //         target='_blank'
  //         rel='noopener noreferrer'
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
