import './Body.css';
import Card from '../../Card/Card';
import { municipios } from '../../../data';

const Body = ({ city, temperaturaData, lluviaData }) => {
  return (
    <div className="body-container">
      <div className="card-container">
        {city ? (
          <Card
            city={city}
            temperaturaData={temperaturaData}
            lluviaData={lluviaData}
          />
        ) : (
          <h1>Por favor seleccione un municipio</h1>
        )}
      </div>
    </div>
  );
};

export default Body;
