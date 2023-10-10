
import RestaurentCard from "./Restautentcard";
import RestaurentList from "./utils/mockData";
import { useState } from "react";
const Body = () => {

const [ListofRestaurent,setListofRestaurent] = useState(RestaurentList);

  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={()=>{
          const FilteredList  = ListofRestaurent.filter((res)=> (res.info.rating.rating_text) > 4);
          setListofRestaurent(FilteredList);
        }}
        >Top Rated Restaurant</button></div>
      <div className="res-container">
        {ListofRestaurent.map((restaurent) => {
          return (
            <RestaurentCard key={restaurent.info.resId} resData={restaurent} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
