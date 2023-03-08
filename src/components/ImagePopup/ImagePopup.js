import './ImagePopup.css';

function ImagePopup(props) {
  return (
    <>
      <div className={`popup ` + (props.isOpen ? 'popup_opened' : '')}>
        <div className='popup__container'>
          <img
            src={props.imgSrc}
            alt={props.imgName}
            className='popup__expanded-image'
          />
          <p className='popup__text'>{props.imgName}</p>
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
