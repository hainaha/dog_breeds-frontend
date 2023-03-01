import { useState } from 'react';
import './card.css';
import ImagePopup from '../ImagePopup/ImagePopup';

function Card(props) {
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);

  function handleCardClick() {
    setIsImagePopupOpen(true);
  }

  function closeImagePopup() {
    setIsImagePopupOpen(false);
  }

  return (
    <>
      <div className='card'>
        <img
          src={props.card.url}
          className='card__image'
          alt={props.card.breeds[0].name}
          onClick={handleCardClick}
        />
        <div className='card__title-container'>
          <h2 className='card__title'>{props.card.breeds[0].name}</h2>
          <p className='card__text'>{props.card.breeds[0].temperament}</p>
          <ImagePopup
            isOpen={isImagePopupOpen}
            imgSrc={props.card.url}
            imgName={props.card.breeds[0].name}
            onClose={closeImagePopup}
          />
        </div>
      </div>
    </>
  );
}

export default Card;
