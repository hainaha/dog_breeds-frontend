import { useState, useEffect } from 'react';
import Card from '../Card/Card';
import './Main.css';
import Preloader from '../Preloader/Preloader';
import api from '../../utils/TheDogApi';

function Main() {
  const [cards, setCards] = useState([]);
  const [breeds, setBreeds] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [cardsToShow, setCardsToShow] = useState(3);
  const [selectedBreed, setSelectedBreed] = useState('');
  const [selectedBreedInfo, setSelectedBreedInfo] = useState({
    image: {},
    name: '',
    temperament: '',
  });

  function handleSelectBreed(evt) {
    const selected = evt.target.value;
    setSelectedBreed(selected);
  }

  function showSelectedBreed() {
    if (selectedBreed) {
      let breed = breeds.find(function (breed) {
        return breed.name === selectedBreed;
      });
      setSelectedBreedInfo(breed);
    }
  }

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
      })
      .finally(() => {
        setIsLoading(false);
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
    <>
      <main>
        <div className='main__select-container'>
          <p className='main__select-title'>
            Wants to know more about a breed? Select it below:
          </p>
          <select
            name='breed'
            id='breed'
            value={selectedBreed}
            onChange={handleSelectBreed}
            className='main__select'
          >
            <option value='0' key='select_breed'>
              Choose a breed
            </option>
            {breeds.map((breed) => (
              <option value={breed.name} key={breed.id}>
                {breed.name}
              </option>
            ))}
          </select>
          <button className='main__button' onClick={showSelectedBreed}>
            Search
          </button>
          <img
            src={selectedBreedInfo.image.url}
            alt={selectedBreedInfo.name}
            className='main__select-image'
          />
          <p className='main__select-text'>{selectedBreedInfo.name}</p>
          <p className='main__select-text'>{selectedBreedInfo.temperament}</p>
          <p className='main__select-title'>
            Not sure about the breed? Look at the cards to know more about
            randomly picked breeds.
          </p>
        </div>
        {isLoading ? <Preloader /> : ''}
        <section className='main__content'>
          {cards.slice(0, cardsToShow).map((card) => (
            <>
              <Card card={card} key={card.id} />
            </>
          ))}
          {cardsToShow >= cards.length ? (
            ''
          ) : (
            <div className='main__button-container'>
              <button className='main__button' onClick={handleShowMoreCards}>
                Show More
              </button>
            </div>
          )}
        </section>
      </main>
    </>
  );
}

export default Main;
