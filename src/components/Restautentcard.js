import { RES_CARD_IMAGE_URL } from "./utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const RestaurentCard = ({ resData }) => {
  const {
    name,
    cloudinaryImageId,
    avgRating,
    locality,
    cuisines,
    costForTwo,
    totalRatingsString,
  } = resData?.info || {};

  const ratingColor = Number(avgRating) > 4 ? "green" : "red";
  let cuisine = cuisines.join(", ");
  cuisine = cuisine.length > 40 ? cuisine.substring(0, 30) : cuisine + "....";
  return (
    <div className="res-card">
      <img
        className="res-card-image"
        src={RES_CARD_IMAGE_URL + cloudinaryImageId}
        alt="not available"
      />
      <h1 className="res-title">{name}</h1>
      <h1>
        <span
          style={{
            backgroundColor: ratingColor,
            color: "white",
            fontSize: "10px",
            padding: "4px",
          }}
        >
          {avgRating}★
        </span>
        <span> - ({totalRatingsString})</span>
      </h1>
      <h1>{cuisine}</h1>
      <h1>
        <FontAwesomeIcon icon={faLocationDot} /> {locality}
      </h1>
      <h1>{costForTwo}</h1>
    </div>
  );
};

export default RestaurentCard;
