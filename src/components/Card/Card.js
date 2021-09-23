import { EuiCard, EuiIcon, EuiFlexGroup, EuiFlexItem } from '@elastic/eui';

const Card = ({ title, description, iconType }) => {
  return (
    <EuiFlexGroup gutterSize="l">
      <EuiFlexItem>
        <EuiCard
          layout="horizontal"
          icon={<EuiIcon size="xl" type={iconType} />}
          title={title}
          description={description}
          onClick={() => {}}
        />
      </EuiFlexItem>
    </EuiFlexGroup>
  );
};

export default Card;
