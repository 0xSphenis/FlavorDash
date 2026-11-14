import './App.css';
import Header from "./components/Header";
import RestaurantList from './components/RestaurantList';
import restaurant from "./data/restaurant.json";

const App = () => {
  return (
    <div className='app'>
      <Header />
  <main className='main-content'>
    <RestaurantList restaurantData={restaurant} />
  </main>
  </div>
  );
};

export default App;
