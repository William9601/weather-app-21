import './Header.css';
import Search from '../Search/Search';

const Header = ({ city = 'El tiempo' }) => {
  return (
    <div className="header-container">
      <h1>{city}</h1>
      <Search />
    </div>
  );
};

export default Header;
