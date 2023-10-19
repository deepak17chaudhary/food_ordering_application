import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import {
  RESTAURANT_MENU_API,
  RESTAURANT_MENU_LOGO_IMAGE_URL,
  VEG_ICON_IMAGE,
  NON_VEG_ICON_IMAGE,
} from "./utils/constants";
import { RESTAURANT_MENU_ITEMS_IMAGE } from "./utils/constants";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(RESTAURANT_MENU_API + resId);
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

  console.log(itemCards);

  return (
    <div className="restaurant-container">
      <div className="restaurant-details">
        <div className="Restaurant-logo-container">
          <img
            className="Restaurant-logo"
            src={RESTAURANT_MENU_LOGO_IMAGE_URL + cloudinaryImageId}
            alt="Restaurant Logo"
          />
        </div>
        <div className="restaurant-details-container">
          <h1>{name}</h1>
          <p>{areaName}</p>
          <p>Avg. Rating: {avgRating}</p>
          <p>Cuisines: {cuisines.join(", ")}</p>
          <p>{costForTwoMessage}</p>
        </div>
      </div>
      <h2 className="menu-title">Menu</h2>
      <ul className="menu-items">
        {itemCards.map((item) => (
          <li className="menu-item" key={item.card.info.id}>
            <img
              className="menu-item-logo"
              src={
                item.card.info.imageId
                  ? RESTAURANT_MENU_ITEMS_IMAGE + item.card.info.imageId
                  : RESTAURANT_MENU_LOGO_IMAGE_URL + cloudinaryImageId
              }
              alt="no preview"
            />

            <div className="menu-item-details">
              <p className="menu-item-name">{item.card.info.name}</p>
              <p className="menu-item-description">
                <strong>Description:</strong>
                {item.card.info.description.length < 300
                  ? item.card.info.description
                  : item.card.info.description.substr(0, 300) + "..."}
              </p>
              <p className="item-price">₹ {item.card.info.price / 100}</p>
              <img
                className="veg-nonveg-img"
                src={
                  item.card.info.itemAttribute.vegClassifier === "NONVEG"
                    ? NON_VEG_ICON_IMAGE
                    : VEG_ICON_IMAGE
                }
                alt="no preview"
              />
            </div>
            <div className="menu-item-add-button">
              <button type="button" className="add-button">
                Add
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
