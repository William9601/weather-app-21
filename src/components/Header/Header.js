import './Header.css';
import Search from '../Search/Search';

const Header = ({
  city = 'El tiempo',
  municipios,
  setCodProv,
  setCity,
  setCodeIne,
}) => {
  return (
    <div className="header-container">
      <h1>{city}</h1>
      <Search
        municipios={municipios}
        setCodProv={setCodProv}
        setCodeIne={setCodeIne}
        setCity={setCity}
      />
    </div>
  );
};

export default Header;
