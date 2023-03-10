import { useState } from 'react';
import './Card.css';
import ImagePopup from '../ImagePopup/ImagePopup';

function Card({ card }) {
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);

  function handleCardClick() {
    setIsImagePopupOpen(true);
  }

  function closeImagePopup() {
    setIsImagePopupOpen(false);
  }

  return (
    <article className='card'>
      <img
        src={card.url}
        className='card__image'
        alt={card.breeds[0].name}
        onClick={handleCardClick}
      />
      <div className='card__title-container'>
        <h2 className='card__title'>{card.breeds[0].name}</h2>
        <p className='card__text'>{card.breeds[0].temperament}</p>
        <ImagePopup
          isOpen={isImagePopupOpen}
          imgSrc={card.url}
          imgName={card.breeds[0].name}
          onClose={closeImagePopup}
        />
      </div>
    </article>
  );
}

export default Card;
