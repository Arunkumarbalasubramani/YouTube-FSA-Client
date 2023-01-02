import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import "./MainFeed.scss";

const keyWords = [
  "New",
  "React JS",
  "Tamil Songs",
  "API",
  "React Native",
  "MERN",
  "Coding",
  "Motivation",
  "Self-Improvement",
  "Motorcycles",
  "Yezdi Adventure",
  "Gadgets",
  "Stock Market",
];
const CategoriesBar = ({ selectedcategory }) => {
  const navigate = useNavigate();

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
          onClick={() => {
            setActiveElement(element);
            selectedcategory(element);
            navigate(`/search/${element}`);
          }}
        >
          {element}
        </button>
      ))}
    </div>
  );
};

export default CategoriesBar;
