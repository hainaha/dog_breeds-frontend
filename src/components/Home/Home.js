import image from '../../images/friends-3042751-min.jpg';
import './Home.css';

function Home({ breedsPage }) {
  return (
    <>
      <div className='home__container'>
        <img
          src={image}
          className='home__image'
          alt='Dog sitting next to a woman looking at the horizon'
        />
        <p className='home__text'>
          This website provides an overview of different dog breeds, including
          images and their temperament.
        </p>
        <p className='home__text'>
          The diversity of dog breeds is fascinating, each breed has its own
          unique set of characteristics. From the tiny Chihuahua to the massive
          Great Dane, the range of sizes, shapes, and coat colors is simply
          incredible.
        </p>
        <p className='home__text'>
          No matter what breed you choose, you can be sure that you will have a
          loyal companion for life. Now click the button and take a look at some
          breeds.
        </p>
        <button className='home__button' onClick={breedsPage}>
          Dog Breeds
        </button>
      </div>
    </>
  );
}

export default Home;
