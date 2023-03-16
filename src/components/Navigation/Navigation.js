import { NavLink } from 'react-router-dom';
import './Navigation.css';

export default function Navigation() {
  return (
    <nav className='navigation'>
      <NavLink to='/dog_breeds-frontend' className='navigation__link'>
        Home
      </NavLink>
      <NavLink to='about' className='navigation__link'>
        About
      </NavLink>
      <NavLink to='breeds' className='navigation__link'>
        Dog Breeds
      </NavLink>
    </nav>
  );
}
