import React from "react";
import "./inputSearch.css";
import cleanIcon from '../img/clean.svg'
import searchIcon from '../img/source_icons_search 1.svg'


function InputSearch({
  searchValue,
  searchHandler,
  setSearchValue,
  sortBy,
  setSortBy,
}) {
  const buttonClear = () => {
    setSearchValue("");
    setSortBy({ iter: "", order: "" });
  };
  return (
    <div className="wrapper">
      <div className="input">
        <img className="search_icon" src={searchIcon} alt='searchIcon'></img><input
          value={searchValue}
          onChange={(e) => searchHandler(e)}
          placeholder="        Поиск по имени или e-mail"
        ></input>
      </div>
      <div className="btn">
        {(searchValue || sortBy.iter) && (<>
          <img onClick={buttonClear} src={cleanIcon} alt='cleanIcon'></img> <button onClick={buttonClear}>Очистить фильтр</button>
        </>
      
        )}
      </div>
    </div>
  );
}

export default InputSearch;
