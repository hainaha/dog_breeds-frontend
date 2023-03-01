import { NavLink } from 'react-router-dom';
import './navigation.css';

export default function Navigation() {
  return (
    <nav className='navigation'>
      <NavLink to='/' className='navigation__link'>
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
