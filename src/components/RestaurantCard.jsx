import { useState } from "react";
import "./RestaurantCard.css";

const RestaurantCard = ({
  id,
  name,
  cuisine,
  isOpen,
  lastUpdate,
  description,
  rating = 4.8,
}) => {
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchRestaurantDetails() {
    if (details) {
      setDetails(null);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`/restaurantDetails${id}.json`);

      if (!response.ok) {
        throw new Error("Não foi possível carregar os detalhes.");
      }

      const data = await response.json();
      setDetails(data);
    } catch (err) {
      setError("Detalhes indisponíveis para este restaurante no momento.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <article className="restaurant-card">
      <div className="card-badges">
        <span className={`badge-status ${isOpen ? "aberto" : "fechado"}`}>
          <span className="status-dot"></span>
          {isOpen ? "aberto" : "fechado"}
        </span>
        <span className="badge-cuisine">{cuisine}</span>
      </div>

      <div className="card-body">
        <div className="card-header">
          <h2 className="card-title">{name}</h2>
          <span className="card-rating">★ {rating}</span>
        </div>

        <p className="card-description">{description}</p>

        {loading && <p className="details-loading">Carregando detalhes...</p>}

        {error && <p className="details-error">{error}</p>}

        {details && (
          <div className="card-details">
            <p><strong>Endereço:</strong> {details.address}</p>
            <p><strong>Horário:</strong> {details.openingHours}</p>
            <p><strong>Telefone:</strong> {details.phone}</p>
            <p><strong>Destaque:</strong> {details.highlight}</p>
          </div>
        )}

        <div className="card-footer">
          <button
            type="button"
            onClick={fetchRestaurantDetails}
            className="details-btn"
            disabled={loading}
          >
            {details ? "Ocultar detalhes" : "Ver detalhes →"}
          </button>
        </div>
      </div>
    </article>
  );
};

export default RestaurantCard;