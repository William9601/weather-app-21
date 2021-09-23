import './Body.css';
import Card from '../../Card/Card';
import { municipios } from '../../../data';

const Body = ({ nombreMunicipio, temperaturaActual, previsionLluvia }) => {
  return (
    <div className="body-container">
      <div className="card-container">
        {nombreMunicipio ? (
          <Card
            title={nombreMunicipio}
            description={`Temperatura: ${temperaturaActual}º  Probabilidad de lluvia: ${previsionLluvia}`}
            iconType={previsionLluvia === '0' ? 'cloudSunny' : 'cloudDrizzle'}
          />
        ) : (
          <h1>Por favor seleccione un municipio</h1>
        )}
      </div>
    </div>
  );
};

export default Body;
