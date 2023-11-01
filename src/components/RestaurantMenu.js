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
  const [resInfo, setResInfo] = useState();
  const [restrauInfo, setRestrauInfo] = useState();

  const { resId } = useParams();

  const [counters, setCounters] = useState({}); // Separate counts for each item

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(RESTAURANT_MENU_API + resId);
        const json = await response.json();
        console.log(json?.data);
        setResInfo(json?.data);
        const filteredData = json?.data.cards.filter((item) => {
          return Object.keys(item).some((key) => key.startsWith("groupedCard"));
        });
        console.log(filteredData);
        let detailsData =
          filteredData[0]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
        console.log("detailsData", detailsData);
        const itemCardsData = detailsData.filter(
          (item) => item?.card?.card?.title === "Recommended"
        );
        console.log(itemCardsData);
        const recommendedData = itemCardsData[0]?.card?.card.itemCards;
        console.log("recommendedData", recommendedData);
        setRestrauInfo(recommendedData);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

  console.log("resInfo",resInfo?.cards[0]?.card?.card?.info);
  console.log("restrauInfo",restrauInfo);

  const handleAddClick = (itemId) => {
    const newCounter = { ...counters };
    newCounter[itemId] = (newCounter[itemId] || 0) + 1;
    setCounters(newCounter);
  };
  

  const handleDecrementClick = (itemId) => {
    if (counters[itemId] > 0) {
      const newCounters = { ...counters };
      newCounters[itemId] = newCounters[itemId] - 1;
      setCounters(newCounters);
      
    }
  };

  

  if (resInfo === null || resInfo === undefined) return <Shimmer />;

  const {
    name,
    areaName,
    avgRating,
    costForTwoMessage,
    cuisines,
    cloudinaryImageId,
  } = resInfo ? resInfo?.cards[0]?.card?.card?.info : {};

  // const { itemCards } =
  // ?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  // [2]?.card?.card;
  // console.log("item", itemCards);
  const itemCards = restrauInfo;
  console.log("itemCards", itemCards)


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
          <p>Cuisines: {cuisines ? cuisines.join(", ") : ""}</p>
          <p>{costForTwoMessage}</p>
        </div>
      </div>
      <h2 className="menu-title">Menu</h2>
      <div className="restaurant-list-menu-items-container">
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
                  {item.card.info.description.length < 200
                    ? item.card.info.description
                    : item.card.info.description.substr(0, 200) + "..."}
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
                {!counters[item.card.info.id] ? (
                  <button
                    type="button"
                    className="add-button"
                    onClick={() => handleAddClick(item.card.info.id)}
                  >
                    ADD
                  </button>
                ) : (
                  <div className="counter-div">
                    <button
                      type="button"
                      className="counter-button"
                      onClick={() => handleDecrementClick(item.card.info.id)}
                    >
                      -
                    </button>
                    <span className="counter-text">
                      {counters[item.card.info.id]}
                    </span>
                    <button
                      type="button"
                      className="counter-button"
                      onClick={() => handleAddClick(item.card.info.id)}
                    >
                      +
                    </button>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>

   <div className="checkout-container">
        {Object.values(counters)[0] <= 0 ||
        Object.values(counters)[0] === undefined ? null : (
          <div>
            <h1>Checkout Details</h1>
            <div className="order-summary">
              <h2>Order Summary</h2>
              <ul>
                <li>Product 1: $10</li>
                <li>Product 2: $20</li>
              </ul>
            </div>
            <div className="shipping-info">
              <h2>Shipping Information</h2>
              <p>Shipping Address: 123 Main St, City</p>
              <p>Estimated Delivery: 2-3 days</p>
            </div>
            <div className="payment-info">
              <h2>Payment Information</h2>
              <p>Payment Method: Credit Card</p>
              <p>Total Amount: $30</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RestaurantMenu;
