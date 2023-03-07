import React from "react";
import "./inputSearch.css";
import cleanIcon from '../img/clean.svg'


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
        <input
          value={searchValue}
          onChange={(e) => searchHandler(e)}
          placeholder="    Поиск по имени или e-mail"
        ></input>
      </div>
      <div className="btn">
        {(searchValue || sortBy.iter) && (<>
          <img src={cleanIcon} alt='cleanIcon'></img> <button onClick={buttonClear}>Очистить фильтр</button>
        </>
      
        )}
      </div>
    </div>
  );
}

export default InputSearch;
