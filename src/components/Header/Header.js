import './Header.css';
import Search from '../Search/Search';

const Header = ({
  nombreProvincia,
  listaMunicipios,
  setCodigoProvincia,
  setNombreMunicipio,
  setCodigoIne,
}) => {
  return (
    <div className="header-container">
      <h1>{nombreProvincia ? nombreProvincia : 'El Tiempo'}</h1>
      <Search
        listaMunicipios={listaMunicipios}
        setCodigoProvincia={setCodigoProvincia}
        setCodigoIne={setCodigoIne}
        setNombreMunicipio={setNombreMunicipio}
      />
    </div>
  );
};

export default Header;
