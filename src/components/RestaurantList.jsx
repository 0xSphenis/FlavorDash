import RestaurantCard from "./RestaurantCard";
import "./RestaurantList.css"

const RestaurantList = ({restaurantData}) => {
    if (!restaurantData || restaurantData === 0) {
        return <p>não conseguimos encontrar restaurantes para você :/</p>
    }
    return (
        <section className="restaurant-list">
            {restaurantData.map((restaurant) => (
                <RestaurantCard
                key={restaurant.id}
                {...restaurant}
                />
                ))
            };
        </section>
    );
};

export default RestaurantList;