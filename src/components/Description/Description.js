import './description.css';

function Description() {
  return (
    <>
      <div className='description__container'>
        <p className='description__text'>
          This website provides an overview of different dog breeds, including
          images and their temperament.
        </p>
        <p className='description__text'>
          The diversity of dog breeds is fascinating, each breed has its own
          unique set of characteristics. From the tiny Chihuahua to the massive
          Great Dane, the range of sizes, shapes, and coat colors is simply
          incredible.
        </p>
        <p className='description__text'>
          No matter what breed you choose, you can be sure that you will have a
          loyal companion for life. Now click the button and take a look at some
          breeds.
        </p>
        <button className='description__button'>Dog Breeds</button>
      </div>
    </>
  );
}

export default Description;
