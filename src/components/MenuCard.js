import React from 'react'
import MenuItems from "./MenuItems";
import "./MenuCard.css";

const MenuCard = () => {
  return (
    <>
      <div className="menu-card-container" >
        {MenuItems && MenuItems.map(images => {
          return (
            <div key={images.id} className="menu-card-item">
              <div className="menu-card-image" key={images.id}>
                <img src={images.image} alt={`menu item ${images.id}`} />
              </div>

              <button className="menu-card-description-button">
                <h3>{images.description}</h3>
                <h3 style={{ fontFamily: 'Alata'}}>{images.price}</h3>
              </button>
            </div>
          )
        })
        }
      </div>
    </>
  )
}

export default MenuCard;