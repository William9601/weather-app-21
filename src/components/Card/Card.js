import { EuiCard, EuiIcon, EuiFlexGroup, EuiFlexItem } from '@elastic/eui';

const Card = () => {
  return (
    <EuiFlexGroup gutterSize="l">
      <EuiFlexItem>
        <EuiCard
          layout="horizontal"
          icon={<EuiIcon size="xl" type={'cloudSunny'} />}
          title={'data'}
          description="This card adds uses an 'xl' size icon which works well in a horizontal layout."
          onClick={() => {}}
        />
      </EuiFlexItem>
    </EuiFlexGroup>
  );
};

export default Card;
