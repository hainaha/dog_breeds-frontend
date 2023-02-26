import logo from '../../images/paw-black-shape.svg';
import './header.css';

function Header() {
  return (
    <>
      <header className='header'>
        <img src={logo} className='header__logo' alt='Dog paw icon' />
        <h1 className='header__title'>Dog Breeds</h1>
      </header>
    </>
  );
}

export default Header;
