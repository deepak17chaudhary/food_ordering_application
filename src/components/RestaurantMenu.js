import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { RESTAURANT_MENU_API, RESTAURANT_MENU_LOGO_IMAGE_URL } from "./utils/constants";
import { RESTAURANT_MENU_ITEMS_IMAGE } from "./utils/constants";
import {useParams} from "react-router-dom";


const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const {resId} = useParams();
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(   
      RESTAURANT_MENU_API + resId
    );
    const jsonData = await data.json(); 

   
    setResInfo(jsonData.data);
  };

  if (resInfo === null) return <Shimmer />;
 
  const {
    name,
    areaName,
    avgRating,
    costForTwoMessage,
    cuisines,
    cloudinaryImageId,
  } = resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

 

  return (
    <div className="restaurant-container">
        <div className="restaurant-details">
            <img className="Restaurant-logo" src={RESTAURANT_MENU_LOGO_IMAGE_URL + cloudinaryImageId} alt="Restaurant Logo" />
            <h1>{name}</h1>
            <p>{areaName}</p>
            <p>Avg. Rating: {avgRating}</p>
            <p>Cuisines: {cuisines.join(", ")}</p>
            <p>{costForTwoMessage}</p>
        </div>
        <h2 className="menu-title">Menu</h2>
        <ul className="menu-items">
            {itemCards.map((item) => (
                <li className="menu-item" key={item.card.info.id}>
                     <img
                className="menu-item-logo"
                src={RESTAURANT_MENU_ITEMS_IMAGE + item.card.info.imageId}
                alt="no preview"
              />
                    <div>
                        <p>{item.card.info.name}</p>
                        <p>Description: {item.card.info.description}</p>
                        <p className="price">₹ {item.card.info.price / 100}</p>
                    </div>
                </li>
            ))}
        </ul>
    </div>
  );
};

export default RestaurantMenu;
