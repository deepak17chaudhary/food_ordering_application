

const RestaurentCard = ({ resData }) => {
    const { name, image, rating, locality, cuisine } = resData?.info || {};
  
    const ratingColor = Number(rating.rating_text) > 4 ? "green" : "red";
    const cuisines = cuisine.map((cuisine) => cuisine.name).join(", ");
    return (
      <div className="res-card">
        <img className="res-card-image" src={image.url} alt="not available" />
        <h1 className = "res-title">{name}</h1>
        <h1>
          <span
          
            style={{
              backgroundColor: ratingColor,
              color: "white",
              fontSize: "10px",
              padding : "4px"
            }}
          >
            {rating.rating_text}★
          </span>
        </h1>
        <h1>{rating.rating_subtitle}</h1>
        <h1>{cuisines}</h1>
        <h1> {locality.name}</h1>
      </div>
    );
  };
  
 



  export default RestaurentCard;