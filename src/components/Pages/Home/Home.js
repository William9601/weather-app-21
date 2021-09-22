import './Home.css';
import Header from '../../Header/Header';
import Body from '../Body/Body';
import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    console.log('hello');
  });
  return (
    <div className="home-container">
      <Header />
      <Body />
    </div>
  );
};

export default Home;
