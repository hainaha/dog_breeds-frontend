import image from '../../images/friends-3042751-min.jpg';
import './main-image.css';

function MainImage() {
  return (
    <>
      <img
        src={image}
        className='main-image'
        alt='An image of a dog sitting next to a woman looking at the horizon'
      />
    </>
  );
}

export default MainImage;
