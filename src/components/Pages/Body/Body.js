import './Body.css';
import Card from '../../Card/Card';
import { municipios } from '../../../data';

const Body = ({ city, temperaturaData, lluviaData }) => {
  return (
    <div className="body-container">
      <div className="card-container">
        <Card
          city={city}
          temperaturaData={temperaturaData}
          lluviaData={lluviaData}
        />
      </div>
    </div>
  );
};

export default Body;
