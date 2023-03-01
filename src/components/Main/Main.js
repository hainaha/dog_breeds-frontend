// import { useContext } from 'react';
import { useState, useEffect } from 'react';
import Card from '../Card/Card';
import './main.css';
import Preloader from '../Preloader/Preloader';

// import { CreateUserContext } from '../contexts/CurrentUserContext';

function Main(props) {
  // const currentUser = useContext(CreateUserContext);
  const [selectedBreed, setSelectedBreed] = useState('');
  const [selectedBreedName, setSelectedBreedName] = useState('');
  const [selectedBreedImage, setSelectedBreedImage] = useState('');
  const [selectedBreedTemperament, setSelectedBreedTemperament] = useState('');
  // const [selectedBreedx, setSelectedBreedx] = useState({});

  // function handleSelectBreed(evt) {
  //   const breed = evt.target.value;
  //   setSelectedBreedName(breed);
  // }

  function handleSelectBreed(evt) {
    const selected = evt.target.value;
    setSelectedBreed(selected);
    // let breed = props.breeds.find(function (breed) {
    //   return breed.name === selectedBreed;
    // });
    // setSelectedBreedName(breed.name);
    // setSelectedBreedImage(breed.image.url);
    // setSelectedBreedTemperament(breed.temperament);
  }

  function showSelectedBreed() {
    let breed = props.breeds.find(function (breed) {
      return breed.name === selectedBreed;
    });
    setSelectedBreedName(breed.name);
    setSelectedBreedImage(breed.image.url);
    setSelectedBreedTemperament(breed.temperament);
  }

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
            {props.breeds.map((breed) => (
              <option value={breed.name} key={breed.id}>
                {breed.name}
              </option>
            ))}
          </select>
          <button className='main__button' onClick={showSelectedBreed}>
            See More
          </button>
          <img
            src={selectedBreedImage}
            alt={selectedBreedName}
            className='main__select-image'
          />
          <p className='main__select-text'>{selectedBreedName}</p>
          <p className='main__select-text'>{selectedBreedTemperament}</p>
          <p className='main__select-title'>
            Not sure about the breed? Look at the cards to know more about
            randomly picked breeds.
          </p>
        </div>
        {props.isLoading ? <Preloader /> : ''}
        <section className='content'>
          {props.cards.map((card) => (
            <>
              <Card card={card} key={card.id} onCardClick={props.onCardClick} />
            </>
          ))}
        </section>
      </main>
    </>
  );
}

export default Main;
