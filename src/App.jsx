import { useState } from 'react';
import './App.css';
import Header from "./components/Header";
import RestaurantList from './components/RestaurantList';
import restaurant from "./data/restaurant.json";
import RestaurantAdd from './components/RestaurantAdd';
const App = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  function toggleForm() {
    setIsFormVisible((prev) => !prev);
  }
  return (
    <div className='app'>
      <Header />
  <main className='main-content'>
    <button onClick={toggleForm} className='toggle-form-btn'>
      {isFormVisible ? "Fechar Formulário" : "Novo Restaurante"}
    </button>
    {isFormVisible && <RestaurantAdd />}
    <RestaurantList restaurantData={restaurant} />
  </main>
  </div>
  );
};

export default App;
