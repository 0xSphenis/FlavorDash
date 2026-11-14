import "./RestaurantCard.css";
 
const RestaurantCard = ({id, name, cuisine, isOpen, lastUpdate, description}) => { 
    return(
      <article className='restaurant-card'>
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
        </div>
        <p className="card-description"> O restaurante {name} trabalha com a cuisine {cuisine} 
            <br></br>
            {description}</p>
        <div className="card-footer">
        </div>
      </div>
    </article>
    );
};

export default RestaurantCard;