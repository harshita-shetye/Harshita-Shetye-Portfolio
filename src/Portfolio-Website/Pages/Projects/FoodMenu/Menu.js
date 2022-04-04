import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";

const Menu = ({ items }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <section className="item-center">
      {items.map((menuItem) => {
        const { id, image, alt, title, description, category, price, recipe } =
          menuItem;
        return (
          <div key={id} className="menu-item">
            <img src={image} alt={title} className="photo" />
            <section className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">{price}</h4>
              </header>
              <p className="item-text">{description}</p>
            </section>
          </div>
        );
      })}
    </section>
  );
};

export default Menu;
