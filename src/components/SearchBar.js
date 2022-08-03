import React from 'react'
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <>
      <form action="/" method="get" >
        
        <input
          className="search-bar-label"
          type="text"
          placeholder="search dinner options"
          name="search"
        />

        <button className="search-bar-button" type="button">
          search </button>
      </form>
    </>
  )
}

export default SearchBar