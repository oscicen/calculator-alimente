import React, { useState } from "react";
import AddItem from "../AddItem/AddItem";
import ListItems from "../ListItems/ListItems";

const CalculatorAlimente = () => {
	const [foodItems, setFoodItems] = useState([]);
	
	const addFoodHandler = food => {
		setFoodItems([
			...foodItems,
			food
		])
	}

  return (
    <div>
      <AddItem addItem={addFoodHandler} />
      <ListItems alimente={foodItems} />
    </div>
  );
};

export default CalculatorAlimente;
