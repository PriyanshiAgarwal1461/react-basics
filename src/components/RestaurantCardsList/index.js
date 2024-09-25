import {useState, useEffect} from "react"
import RestaurantCard from "./RestaurantCard";
import restaurantCardsListData from "./../../dummyData/restaurantCardList.json";
import "./index.css"

const RestaurantCardsList = () => {

  const [ search, setSearch] = useState("");
  const [restaurantCardsList, setRestaurantCardsList] = useState(restaurantCardsListData.data)

  const handleSearchChange = (e) => {
    setSearch(e.target.value)
  }
  
  useEffect(()=>{
    const tempList = restaurantCardsListData.data.filter((item)=>{
      return(
        item.name.toLowerCase().includes(search.toLowerCase())
      )
    })
    setRestaurantCardsList([...tempList])

  },[search])

  return (
    <>
    <input placeholder = "search" value={search} onChange = {(e)=>{handleSearchChange(e)}} style={{margin:9, borderRadius: 5}}></input>
      <div className="restaurantCardList">
      {restaurantCardsList.map((item) => {
        return <RestaurantCard key={item.id} restaurantCardData={item} />;
      })}
    </div>
    </>
  );
};

export default RestaurantCardsList;
