import './Body.css';
import Card from '../Card/Card';
import { EuiCard, EuiIcon, EuiFlexGroup, EuiFlexItem } from '@elastic/eui';

const Body = ({ globalData, prevSearch }) => {
  return (
    <div className="body-container">
      {globalData.nombreMunicipio ? (
        <div className="select-card-container">
          <Card
            title={globalData.nombreMunicipio}
            description={`Temperatura: ${globalData.temperaturaActual}º  Probabilidad de lluvia: ${globalData.previsionLluvia}`}
            iconType={
              globalData.previsionLluvia === '0' ? 'cloudSunny' : 'cloudDrizzle'
            }
            layout={'vertical'}
          />
        </div>
      ) : (
        <h1>Por favor seleccione un municipio</h1>
      )}
      {prevSearch.length > 1 ? <h1>Busquedas recientes</h1> : null}
      <div className="prev-search-container">
        {prevSearch &&
          prevSearch.slice(-4).map(
            (el, i) =>
              el.codigoIne !== globalData.codigoIne && (
                <div className="prev-search-card">
                  <Card
                    key={i}
                    title={el.nombreMunicipio}
                    description={`Temperatura: ${el.temperaturaActual}º  Probabilidad de lluvia: ${el.previsionLluvia}`}
                    iconType={
                      el.previsionLluvia === '0' ? 'cloudSunny' : 'cloudDrizzle'
                    }
                    layout={'vertical'}
                  />
                </div>
              )
          )}
      </div>
    </div>
  );
};

export default Body;
