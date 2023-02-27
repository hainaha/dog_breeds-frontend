import image from '../../images/friends-3042751-min.jpg';
import './main-image.css';

function Image() {
  return (
    <>
      <header className='header'>
        <img
          src={image}
          className='header__logo'
          alt='An image of a dog sitting next to a woman looking at the horizon'
        />
      </header>
    </>
  );
}

export default Image;
