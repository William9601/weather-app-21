import './Home.css';
import Header from '../../Header/Header';
import Body from '../Body/Body';
import { useEffect, useState } from 'react';

const Home = () => {
  const [municipios, setMunicipios] = useState([]);
  const [codProv, setCodProv] = useState('');
  const [city, setCity] = useState('');
  const [codeIne, setCodeIne] = useState('');
  const [meteoData, setMeteoData] = useState([]);
  const [lluviaData, setLluviaData] = useState('');
  const [temperaturaData, setTemperaturaData] = useState('');

  useEffect(() => {
    fetchMunicipios();
  }, []);

  const fetchMunicipios = async () => {
    const res = await fetch('https://www.el-tiempo.net/api/json/v2/municipios');
    const fetchData = await res.json();
    setMunicipios(fetchData);
  };

  useEffect(() => {
    fetchMeteoData();
  }, [city]);

  const fetchMeteoData = async () => {
    const res = await fetch(
      `https://www.el-tiempo.net/api/json/v2/provincias/${codProv}/municipios/${codeIne}`
    );
    const fetchData = await res.json();
    setMeteoData(fetchData);
    setLluviaData(fetchData.lluvia);
    setTemperaturaData(fetchData.temperatura_actual);
  };

  console.log(temperaturaData);

  //const nombreMunicipios = municipios.map((el) => {
  //  return el.NOMBRE;
  //});

  return municipios.length > 0 ? (
    <div className="home-container">
      <Header
        municipios={municipios}
        setCodProv={setCodProv}
        setCity={setCity}
        setCodeIne={setCodeIne}
        city={city}
      />
      <Body
        city={city}
        temperaturaData={temperaturaData}
        lluviaData={lluviaData}
      />
    </div>
  ) : (
    <p>loading</p>
  );
};

export default Home;
