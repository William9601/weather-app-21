import { EuiCard, EuiIcon, EuiFlexGroup, EuiFlexItem } from '@elastic/eui';

const Card = ({ title, description, iconType, layout }) => {
  return (
    <EuiFlexGroup gutterSize="l">
      <EuiFlexItem>
        <EuiCard
          layout={layout}
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
