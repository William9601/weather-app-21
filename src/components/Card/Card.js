import { EuiCard, EuiIcon, EuiFlexGroup, EuiFlexItem } from '@elastic/eui';

const Card = ({ city, temperaturaData, lluviaData }) => {
  return (
    <EuiFlexGroup gutterSize="l">
      <EuiFlexItem>
        <EuiCard
          layout="horizontal"
          icon={<EuiIcon size="xl" type={'cloudSunny'} />}
          title={city}
          description={`Temperatura: ${temperaturaData}º  Probabilidad de lluvia: ${lluviaData}`}
          onClick={() => {}}
        />
      </EuiFlexItem>
    </EuiFlexGroup>
  );
};

export default Card;
