import './App.css';
import Header from "./components/Header";
import RestaurantCard from './components/RestaurantCard';

const App = () => {
  return (
    <div className='app'>
      <Header />
  <main className='main-content'>
    <RestaurantCard 
      name="Restaurante"
      cuisine="brasileira"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitat"
      isOpen={true}
    />
  </main>
  </div>
  );
};

export default App;
