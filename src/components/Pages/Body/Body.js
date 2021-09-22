import './Body.css';
import Card from '../../Card/Card';

const Body = () => {
  const list = [1, 2, 3];
  return (
    <div className="body-container">
      <div className="card-container">
        <Card list={list} />
      </div>
    </div>
  );
};

export default Body;
