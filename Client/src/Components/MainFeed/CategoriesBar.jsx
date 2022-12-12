import React, { useState } from "react";
import "./MainFeed.scss";

const keyWords = [
  "All",
  "React JS",
  "Angular",
  "API",
  "Tamil Songs",
  "React Native",
  "MERN",
  "Coding",
  "Music",
  "Movies",
  "Motorcycles",
  "New to You",
  "Gadgets",
  "Stock Market",
];
const CategoriesBar = () => {
  const [activeElement, setActiveElement] = useState("All");
  return (
    <div className="categories-container">
      {keyWords.map((element, index) => (
        <button
          key={index}
          className={
            activeElement === element
              ? " category-item active"
              : "category-item"
          }
          onClick={() => setActiveElement(element)}
        >
          {element}
        </button>
      ))}
    </div>
  );
};

export default CategoriesBar;
