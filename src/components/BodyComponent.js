import RestaurentCard from "./Restautentcard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import SearchComponent from "./SearchBar";

const Body = () => {
  const [ListofRestaurent, setListofRestaurent] = useState([]);

  const [filteredListofRestaurent, setfilteredListofRestaurent] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.611248758108047&lng=77.21520349640122&is-seo-homepage-enabled=true&page_type=DESKTOP_"
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6460176&lng=77.3695166&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // Applying check for the existence of data,to determine in wwhich obj data is available

    const api_data_strings = ["restaurant_grid_listing", "top_brands_for_you"];

    const restaurantCards = json?.data?.cards.filter((card) =>
      api_data_strings.includes(card.card.card.id)
    );

    const updatedList = restaurantCards.reduce((list, card) => {
      return list.concat(card.card.card.gridElements.infoWithStyle.restaurants);
    }, []);

    const uniqueRestaurants = [...updatedList];
    setListofRestaurent(uniqueRestaurants);
    setfilteredListofRestaurent(uniqueRestaurants);
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
                <RestaurentCard key={restaurent.info.id} resData={restaurent} />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Body;
