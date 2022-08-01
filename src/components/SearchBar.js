import React from 'react'
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div>
    <form  action="/" method="get"> 
        <input 
        className="search-bar-label"
        type="text"
        placeholder="search dinner options"
        name="search"
        />
        <button className="search-bar-button" type="submit"> search </button>
    </form>
    </div>
  )
}

export default SearchBar