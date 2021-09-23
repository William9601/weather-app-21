import './Home.css';
import Header from '../../Header/Header';
import Body from '../Body/Body';
import { useEffect, useState } from 'react';
import {
  fetchMunicipios,
  fetchPrevisionMeteo,
} from '../../../services/apiServices';

const Home = () => {
  const [listaMunicipios, setListaMunicipios] = useState([]);
  const [codigoProvincia, setCodigoProvincia] = useState('');
  const [nombreProvincia, setNombreProvincia] = useState('');
  const [nombreMunicipio, setNombreMunicipio] = useState('');
  const [codigoIne, setCodigoIne] = useState('');
  const [previsionLluvia, setPrevisionLluvia] = useState('');
  const [temperaturaActual, setTemperaturaActual] = useState('');
  const [localStorage, setLocalStorage] = useState({});
  const [dataMeteo, setDataMeteo] = useState({});

  useEffect(() => {
    fetchMunicipios().then((data) => setListaMunicipios(data));
    const localData = window.localStorage.getItem('localData');
    return localData ? JSON.parse(localData) : [];
  }, []);

  useEffect(() => {
    fetchPrevisionMeteo(codigoProvincia, codigoIne).then((data) => {
      setPrevisionLluvia(data.lluvia);
      setTemperaturaActual(data.temperatura_actual);
      setNombreProvincia(data.municipio.NOMBRE_PROVINCIA);

      const cardData = {
        lluvia: data.lluvia,
        temperaturaActual: data.temperatura_actual,
        nombreProvincia: data.municipio.NOMBRE_PROVINCIA,
        nombreMunicipio: data.municipio.NOMBRE,
      };

      window.localStorage.setItem('localData', JSON.stringify(cardData));

      setLocalStorage(cardData);
    });
  }, [nombreMunicipio]);

  return listaMunicipios.length > 0 ? (
    <div className="home-container">
      <Header
        listaMunicipios={listaMunicipios}
        setCodigoProvincia={setCodigoProvincia}
        setNombreMunicipio={setNombreMunicipio}
        setCodigoIne={setCodigoIne}
        nombreProvincia={nombreProvincia}
      />
      <Body
        nombreMunicipio={nombreMunicipio}
        temperaturaActual={temperaturaActual}
        previsionLluvia={previsionLluvia}
      />
    </div>
  ) : (
    <p>error when fetching data</p>
  );
};

export default Home;
