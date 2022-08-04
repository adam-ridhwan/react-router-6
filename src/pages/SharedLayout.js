import { Outlet } from 'react-router-dom';

// import Navbar from '../components/NavBar';
import StyleNavBar from '../components/StyleNavBar';

const Home = () => {
  return (
    <>
      <StyleNavBar />
      <Outlet />
    </>
  );
};
export default Home;
