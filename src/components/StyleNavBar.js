import { NavLink } from 'react-router-dom';

const navStatus = isActive => {
  return isActive ? 'link active' : 'link';
};

const Navbar = () => {
  return (
    <nav className='navbar'>
      <NavLink to='/' className={({ isActive }) => navStatus(isActive)}>
        Home
      </NavLink>
      <NavLink to='/about' className={({ isActive }) => navStatus(isActive)}>
        About
      </NavLink>
      <NavLink to='/products' className={({ isActive }) => navStatus(isActive)}>
        Products
      </NavLink>
      <NavLink to='/login' className={({ isActive }) => navStatus(isActive)}>
        Login
      </NavLink>
    </nav>
  );
};

export default Navbar;
