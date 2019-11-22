import React, { useState } from "react";
import AddItem from "../AddItem/AddItem";
import ItemsList from "../ItemsList/ItemsList";

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
      <ItemsList alimente={foodItems} />
    </div>
  );
};

export default CalculatorAlimente;
