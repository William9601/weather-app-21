import './Home.css';
import Header from '../../Header/Header';
import Body from '../Body/Body';
import { useEffect, useState } from 'react';
import { fetchMunicipios, fetchMeteoData } from '../../../services/apiServices';

const Home = () => {
  const [municipios, setMunicipios] = useState([]);
  const [codProv, setCodProv] = useState('');
  const [provincia, setProvincia] = useState('');
  const [city, setCity] = useState('');
  const [codeIne, setCodeIne] = useState('');
  const [meteoData, setMeteoData] = useState([]);
  const [lluviaData, setLluviaData] = useState('');
  const [temperaturaData, setTemperaturaData] = useState('');

  useEffect(() => {
    fetchMunicipios().then((data) => setMunicipios(data));
  }, []);

  useEffect(() => {
    fetchMeteoData(codProv, codeIne).then((data) => {
      setMeteoData(data);
      setLluviaData(data.lluvia);
      setTemperaturaData(data.temperatura_actual);
      setProvincia(data.municipio.NOMBRE_PROVINCIA);
    });
  }, [city]);

  return municipios.length > 0 ? (
    <div className="home-container">
      <Header
        municipios={municipios}
        setCodProv={setCodProv}
        setCity={setCity}
        setCodeIne={setCodeIne}
        provincia={provincia}
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
