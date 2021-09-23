import './Body.css';
import Card from '../../Card/Card';

const Body = ({ globalData }) => {
  return (
    <div className="body-container">
      <div className="card-container">
        {globalData.nombreMunicipio ? (
          <Card
            title={globalData.nombreMunicipio}
            description={`Temperatura: ${globalData.temperaturaActual}º  Probabilidad de lluvia: ${globalData.previsionLluvia}`}
            iconType={
              globalData.previsionLluvia === '0' ? 'cloudSunny' : 'cloudDrizzle'
            }
          />
        ) : (
          <h1>Por favor seleccione un municipio</h1>
        )}
      </div>
    </div>
  );
};

export default Body;
