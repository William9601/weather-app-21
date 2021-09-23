import './Header.css';
import Search from '../Search/Search';

const Header = ({ provincia, municipios, setCodProv, setCity, setCodeIne }) => {
  return (
    <div className="header-container">
      <h1>{provincia ? provincia : 'El Tiempo'}</h1>
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
