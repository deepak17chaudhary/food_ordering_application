import RestaurentCard from "./Restautentcard";
// import RestaurentList from "./utils/mockData";
import { useEffect, useState } from "react";

const Body = () => {
  const [ListofRestaurent, setListofRestaurent] = useState([]);
  const [filteredListofRestaurent, setfilteredListofRestaurent] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.611248758108047&lng=77.21520349640122&is-seo-homepage-enabled=true&page_type=DESKTOP_"
    );
    const json = await data.json();
console.log(json);
    const updatedList =
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setListofRestaurent(updatedList);
    setfilteredListofRestaurent(updatedList);
  };

  return (
    <div className="body">
      <div className="Restaurant-List">
        <h1>Restaurant List</h1>
      </div>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const FilteredList = ListofRestaurent.filter(
              (res) => Number(res.info.avgRating) > 4.3
            );
            setListofRestaurent(FilteredList);
          }}
        >
          Top Rated Restaurant
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            setListofRestaurent(filteredListofRestaurent);
          }}
        >
          Reset
        </button>
      </div>
      <div className="res-container">
        {ListofRestaurent.map((restaurent) => {
          //console.log(restaurent);
          return (
            <RestaurentCard key={restaurent.info.id} resData={restaurent} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
