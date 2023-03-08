import './About.css';
import authorImage from '../../images/haina-rego.jpg';
import githubIcon from '../../images/github-icon.svg';

function About() {
  return (
    <>
      <div className='about__container'>
        <div className='about__image-container'>
          <img
            src={authorImage}
            className='about__image'
            alt='Front face of Haina Rego'
          />
        </div>
        <div className='about__text-container'>
          <h2 className='about__title'>About the author Haina Rego</h2>
          <p className='about__text'>
            Haina graduated in Computer Science from the University of Brasília
            (UnB) and built this website as her final project for the Practicum
            Web Developer course. You can see this and other project's code at
            the GitHub link below.
          </p>
          <a
            href='https://github.com/hainaha'
            target='_blank'
            rel='noreferrer'
            className='about__link'
          >
            <img src={githubIcon} className='about__icon' alt='GitHub Icon' />
            GitHub
          </a>
        </div>
      </div>
    </>
  );
}

export default About;
