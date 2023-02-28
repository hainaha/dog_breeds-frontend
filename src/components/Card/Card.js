// import { CreateUserContext } from '../contexts/CurrentUserContext';
// import { useContext } from 'react';
import { useState } from 'react';
import './card.css';
import ImagePopup from '../ImagePopup/ImagePopup';

function Card(props) {
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);

  function handleCardClick(card) {
    setIsImagePopupOpen(true);
    console.log(card);
  }

  function closeImagePopup() {
    setIsImagePopupOpen(false);
  }
  // const currentUser = useContext(CreateUserContext);
  // const isOwn = props.card.owner === currentUser._id;

  // const cardDeleteButtonClassName = isOwn
  //   ? 'card__delete-icon'
  //   : 'card__delete-icon_hidden';

  // const isLiked = props.card.likes.some((i) => i === currentUser._id);

  // const cardLikeButtonClassName = `like-button ${
  //   isLiked && 'like-button_active'
  // }`;

  // const cardLikesClassName = `card__likes ${isLiked && 'card__likes_active'}`;

  // function handleClick() {
  //   props.onCardClick(props.card);
  // }

  // function handleLikeClick() {
  //   props.onCardLike(props.card);
  // }

  // function handleDeleteClick() {
  //   props.onCardDelete(props.card);
  // }

  return (
    <>
      <div className='card'>
        {/* <button
          className={cardDeleteButtonClassName}
          type='submit'
          onClick={handleDeleteClick}
        ></button> */}
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
          {/* <div className='card__like-container'>
            <button
              className={cardLikeButtonClassName}
              type='button'
              onClick={handleLikeClick}
            ></button>
            <p className={cardLikesClassName}>{props.card.likes.length}</p>
            <p className='card__id'>{props.card._id}</p>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Card;
