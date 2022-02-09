import "./styles.css";
import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];
// console.log(allCategories)

function App() {
  const [listItems, setListItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setListItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setListItems(newItems);
  };
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h4>Recommended Best Music for You</h4>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu item={listItems} />
      </section>
    </main>
  );
}

export default App;
