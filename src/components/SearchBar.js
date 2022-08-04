import React from 'react'
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <>
      <form action="/" method="get" >
        
        <input
          className="search-bar-label"
          type="text"
          placeholder="enter your delivery address here"
          name="search"
        />

        <button className="search-bar-button" type="button">
          food search</button>
      </form>
    </>
  )
}

export default SearchBar