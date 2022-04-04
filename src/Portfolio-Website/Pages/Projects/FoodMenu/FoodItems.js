import { menu } from "./FoodMenu";
import { useState } from "react";
import Categories from "./Categories.js";
import Menu from "./Menu";
import Location from "./Location";

const allCategories = ["all", ...new Set(menu.map((item) => item.category))];

const FoodItems = () => {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(menu);
      return;
    }
    const newItems = menu.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
        <Location />
      </section>
    </main>
  );
};

export default FoodItems;
