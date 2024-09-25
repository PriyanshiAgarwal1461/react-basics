import "./index.css"
import foodVilla from "./../../asset/foodVilla.png"

const RestaurantCard = (props) => {
  const { restaurantCardData } = props;

  return (
    <div className="restaurantCard">
        <img src ={foodVilla} alt ="img" className="restaurantCardImg"></img>
      <h1>{restaurantCardData.name}</h1>
      <h2>{restaurantCardData.cuisine.join(", ")}</h2>
      <h4>{restaurantCardData.rating} stars</h4>
    </div>
  );
};
export default RestaurantCard;
