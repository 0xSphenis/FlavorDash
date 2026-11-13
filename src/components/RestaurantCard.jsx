const RestaurantCard = ({name, cuisine, isOpen}) => {
    return(
        <div>
            <h2>{name}</h2>
            <p>{cuisine}</p>
            <p>{isOpen ? "Aberto" : "Fechado"}</p>
        </div>
    );
};

export default RestaurantCard;