import RestaurentCard from "./Restautentcard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import SearchComponent from "./SearchBar";
import { Link } from "react-router-dom";
import { RESTAURANT_LIST_MAIN_API } from "./utils/constants";

const Body = () => {
  const [ListofRestaurent, setListofRestaurent] = useState([]);

  const [filteredListofRestaurent, setfilteredListofRestaurent] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_LIST_MAIN_API);
    const jsonData = await data.json();
    
    // Applying check for the existence of data,to determine in wwhich obj data is available

    const api_data_strings = "restaurant_grid_listing";

    const restaurantCard = jsonData?.data?.cards.find(
      (card) => card.card.card.id === api_data_strings
    );

    let finalData =
      restaurantCard.card.card.gridElements.infoWithStyle.restaurants;

    setListofRestaurent(finalData);
    setfilteredListofRestaurent(finalData);
  };

  const handleSearch = (filteredData) => {
    setfilteredListofRestaurent(filteredData);
  };
  return (
    <div className="body">
      <div className="Restaurant-List">
        <h1>Discover Flavors Near You!</h1>
        <SearchComponent
          searchData={ListofRestaurent}
          setSearchedRestaurent={handleSearch}
        />
      </div>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const FilteredList = ListofRestaurent.filter(
              (res) => Number(res.info.avgRating) > 4.2
            );
            setfilteredListofRestaurent(FilteredList);
          }}
        >
          Top Rated Restaurant
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            setfilteredListofRestaurent(ListofRestaurent);
          }}
        >
          Reset
        </button>
      </div>
      <div className="res-container">
        {ListofRestaurent.length === 0 ? (
          <Shimmer />
        ) : (
          <div className="res-body">
            {filteredListofRestaurent.map((restaurent) => {
              return (
                <Link
                  key={restaurent.info.id}
                  to={"/restaurants/" + restaurent.info.id}
                >
                  <RestaurentCard resData={restaurent} />
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Body;
