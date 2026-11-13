import './App.css';
import Header from "./components/Header";
import RestaurantCard from './components/RestaurantCard';

const App = () => {
  return (
  <div>
    <Header />
    <RestaurantCard 
      name="RestauranteTeste"
      cuisine="CuisineTeste"
      isOpen={true}
    />
  </div>
  );
};

export default App;
