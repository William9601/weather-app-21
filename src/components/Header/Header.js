import './Header.css';
import Search from '../Search/Search';

const Header = ({ city = 'El tiempo', municipios }) => {
  return (
    <div className="header-container">
      <h1>{city}</h1>
      <Search municipios={municipios} />
    </div>
  );
};

export default Header;
