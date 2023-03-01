import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import api from '../../utils/TheDogApi';
import Header from '../Header/Header';
import MainImage from '../MainImage/MainImage';
import Description from '../Description/Description';
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

  // const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  // const [selectedCard, setSelectedCard] = useState({});

  // function handleCardClick(card) {
  //   setSelectedCard(card);
  //   setIsImagePopupOpen(true);
  //   console.log(card);
  // }

  // function closeImagePopup() {
  //   setIsImagePopupOpen(false);
  // }

  useEffect(() => {
    api
      .getInitialCards()
      .then(setIsLoading(true))
      .then((initialCards) => {
        setCards(initialCards);
        setIsLoading(false);
      });
    api.getBreeds().then((allBreeds) => {
      setBreeds(allBreeds);
    });
    api.getBreedImage(2).then((xxx) => {
      console.log(xxx.url);
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
        <Main cards={cards} isLoading={isLoading} breeds={breeds} />
        {/* <Preloader /> */}
        {/* <MainImage />
        <Description /> */}
        {/* <About /> */}
        {/* <div className=''></div>
        <Routes>
          <Route path='/' element={<About />} />
          <Route path='/main' element={<Main />} />
        </Routes> */}
        {/* <ImagePopup
          card={selectedCard}
          isOpen={isImagePopupOpen}
          onClose={closeImagePopup}
        /> */}
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
