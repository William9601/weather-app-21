import './Body.css';
import Card from '../../Card/Card';
import { municipios } from '../../../data';

const Body = () => {
  const city = municipios.municipios;
  const list = [1, 2, 3];

  return (
    <div className="body-container">
      <div className="card-container">
        <Card />
      </div>
    </div>
  );
};

export default Body;
