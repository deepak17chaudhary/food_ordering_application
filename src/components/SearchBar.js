import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const SearchComponent = ({ searchData,setSearchedRestaurent }) => {
  const [searchText, setSearchText] = useState("");


// console.log("searchData1", searchData)
  //onChangeSearchText function
  const onChangeSearchText = (e) => {
    setSearchText(e.target.value);
  };

  // on click function for search button
  const onClicksearchText = () => {
    const filteredListofRestaurent = searchData.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
//console.log("filter restaurent",filteredListofRestaurent);
    setSearchedRestaurent(filteredListofRestaurent);  // sending data back from child to parent
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search Restaurants....."
        className="input-box"
        value={searchText}
        onChange={onChangeSearchText}
       
      />
      <button className="search-btn" onClick={onClicksearchText}>
        <FontAwesomeIcon icon={faMagnifyingGlass}  />
      </button>
    </div>
  );
};

export default SearchComponent;
