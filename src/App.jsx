import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import RestaurantList from "./components/RestaurantList";
import RestaurantAdd from "./components/RestaurantAdd";

const App = () => {
  const [restaurantsData, setRestaurantsData] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false);
  useEffect(() => {
    const fetchRestaurantsData = () => {
      fetch("/restaurants.json")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Erro ao buscar os dados dos restaurantes");
          }
          return response.json();
        })
        .then((data) => {
          setRestaurantsData(data);
        })
        .catch((error) => {
          console.error("Falha na requisição:", error);
        });
    };

    fetchRestaurantsData();
  }, []);

  function toggleForm() {
    setIsFormVisible((prev) => !prev);
  }

  return (
    <div className="app">
      <Header />

      <main className="main-content">
        <button
          onClick={toggleForm}
          className={`toggle-form-btn ${isFormVisible ? "cancel" : ""}`}
        >
          {isFormVisible ? "Cancelar" : "+ Adicionar Restaurante"}
        </button>

        {isFormVisible && <RestaurantAdd />}
        <RestaurantList restaurantData={restaurantsData} />
      </main>
    </div>
  );
};

export default App;