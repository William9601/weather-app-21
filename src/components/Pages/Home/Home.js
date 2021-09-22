import './Home.css';
import Header from '../../Header/Header';
import Body from '../Body/Body';
import { useEffect, useState } from 'react';

const Home = () => {
  const [municipios, setMunicipios] = useState([]);

  useEffect(() => {
    fetchMunicipios();
  }, []);

  const fetchMunicipios = async () => {
    const res = await fetch('https://www.el-tiempo.net/api/json/v2/municipios');
    const fetchData = await res.json();
    setMunicipios(fetchData);
  };

  const nombreMunicipios = municipios.map((el) => {
    return el.NOMBRE;
  });

  return municipios.length > 0 ? (
    <div className="home-container">
      <Header municipios={nombreMunicipios} />
      <Body />
    </div>
  ) : (
    <p>loading</p>
  );
};

export default Home;
