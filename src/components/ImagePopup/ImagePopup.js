import './ImagePopup.css';

function ImagePopup({ isOpen, imgSrc, imgName, onClose }) {
  return (
    <>
      <div className={`popup ` + (isOpen ? 'popup_opened' : '')}>
        <div className='popup__container'>
          <img src={imgSrc} alt={imgName} className='popup__expanded-image' />
          <p className='popup__text'>{imgName}</p>
          <button
            className='popup__close'
            type='button'
            onClick={onClose}
          ></button>
        </div>
      </div>
    </>
  );
}

export default ImagePopup;
