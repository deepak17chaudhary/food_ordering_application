
import RestaurentCard from "./Restautentcard";
import RestaurentList from "./RestaurentList";
const Body = () => {
  return (
    <div className="body">
      {/* <div className="search">search</div> */}
      <div className="res-container">
        {RestaurentList.map((restaurent) => {
          return (
            <RestaurentCard key={restaurent.info.resId} resData={restaurent} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
