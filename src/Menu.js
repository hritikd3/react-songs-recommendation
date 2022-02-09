import React from "react";

const Menu = ({ item }) => {
  return (
    <div className="section-center">
      {item.map((listItems) => {
        const { id, title, img, desc, price } = listItems;
        return (
          <article key={id} className="menu-item">
            <img src={img} alt={title} className="photo"></img>
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">{price}</h4>
              </header>
              <p>{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
