import './Home.css';
import Header from '../../Header/Header';
import Body from '../../Body/Body';
import { useEffect, useState } from 'react';
import {
  fetchMunicipios,
  fetchPrevisionMeteo,
} from '../../../services/apiServices';
import useLocalStorage from '../../../hooks/useLocalStorage';

const Home = () => {
  const [listaMunicipios, setListaMunicipios] = useState([]);
  const [codigoProvincia, setCodigoProvincia] = useState('');
  const [codigoIne, setCodigoIne] = useState('');
  const [nombreMunicipio, setNombreMunicipio] = useState('');
  const [globalData, setGlobalData] = useLocalStorage('localData', []);
  const [prevSearch, setPrevSearch] = useLocalStorage('previousSearch', []);

  useEffect(() => {
    fetchMunicipios().then((data) => setListaMunicipios(data));
  }, []);

  useEffect(() => {
    fetchPrevisionMeteo(codigoProvincia, codigoIne).then((data) => {
      const fetchData = {
        previsionLluvia: data.lluvia,
        temperaturaActual: data.temperatura_actual,
        nombreProvincia: data.municipio.NOMBRE_PROVINCIA,
        nombreMunicipio: data.municipio.NOMBRE,
        codigoIne: codigoIne,
      };

      setGlobalData(fetchData);
      setPrevSearch([...prevSearch, fetchData]);
    });
  }, [nombreMunicipio]);

  return listaMunicipios.length > 0 ? (
    <div className="home-container">
      <Header
        listaMunicipios={listaMunicipios}
        setCodigoProvincia={setCodigoProvincia}
        setNombreMunicipio={setNombreMunicipio}
        setCodigoIne={setCodigoIne}
        globalData={globalData}
      />
      <Body globalData={globalData} prevSearch={prevSearch} />
    </div>
  ) : (
    <p>error when fetching data</p>
  );
};

export default Home;
