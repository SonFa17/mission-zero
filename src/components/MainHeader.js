import React from 'react'
import "./MainHeader.css";
import backgroudImage from "./img/background.png";
import SearchBar from './SearchBar';

const MainHeader = () => {
  return (
    <>
      <div className='main-header'>

        <div>
          <h1 className="main-header-headline"> Thinking about dinner?</h1>
          <p className="main-header-sub-headline">Order with us for fast delivery from your favourite local restaurants</p>
        </div>

        <div className="main-header-search-bar">
          <SearchBar />
        </div>

        <img src={backgroudImage} alt="cornfield" className="hero-image"></img>



      </div>
    </>
  )
}

export default MainHeader