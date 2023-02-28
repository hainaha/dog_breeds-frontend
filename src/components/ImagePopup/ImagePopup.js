import './imagePopup.css';

function ImagePopup(props) {
  return (
    <>
      <div className={`popup ` + (props.isOpen ? 'popup_opened' : '')}>
        <div className='popup__container'>
          <img
            src={props.card.url}
            alt={'ALT'}
            className='popup__expanded-image'
          />
          <p className='popup__info'>{props.card.url}</p>
          <button
            className='popup__close'
            type='button'
            onClick={props.onClose}
          ></button>
        </div>
      </div>
    </>
  );
}

export default ImagePopup;
