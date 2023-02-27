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
          I find the diversity of dog breeds to be nothing short of fascinating.
          From the tiny Chihuahua to the massive Great Dane, the range of sizes,
          shapes, and coat colors is simply incredible. Each breed has its own
          unique set of characteristics, and I love to learn about them all.
        </p>
        <p className='description__text'>
          Dogs are truly a person's best friend, and I'm proud to call myself a
          dog lover. I'm sure that anyone who has ever owned a pup would agree
          that the unconditional love and companionship that a dog provides is
          more than worth the effort of taking care of them.
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
