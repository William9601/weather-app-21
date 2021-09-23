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
  const [codigoIne, setCodigoIne] = useState('');
  const [nombreMunicipio, setNombreMunicipio] = useState('');
  const [globalData, setGlobalData] = useState([]);

  useEffect(() => {
    fetchMunicipios().then((data) => setListaMunicipios(data));
    // const localData = window.localStorage.getItem('fetchData');
    // return localData ? JSON.parse(localData) : [];
  }, []);

  useEffect(() => {
    fetchPrevisionMeteo(codigoProvincia, codigoIne).then((data) => {
      const fetchData = {
        previsionLluvia: data.lluvia,
        temperaturaActual: data.temperatura_actual,
        nombreProvincia: data.municipio.NOMBRE_PROVINCIA,
        nombreMunicipio: data.municipio.NOMBRE,
      };

      setGlobalData(fetchData);
    });
  }, [nombreMunicipio]);

  // useEffect(() => {
  //   window.localStorage.setItem('localData', JSON.stringify(globalData));
  // }, [globalData]);

  return listaMunicipios.length > 0 ? (
    <div className="home-container">
      <Header
        listaMunicipios={listaMunicipios}
        setCodigoProvincia={setCodigoProvincia}
        setNombreMunicipio={setNombreMunicipio}
        setCodigoIne={setCodigoIne}
        globalData={globalData}
      />
      <Body globalData={globalData} />
    </div>
  ) : (
    <p>error when fetching data</p>
  );
};

export default Home;
