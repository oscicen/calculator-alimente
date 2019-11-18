import React, { useState } from "react";
import AddItem from "../AddItem/AddItem";
import ItemsList from "../ItemsList/ItemsList";

const CalculatorAlimente = props => {
	const [alimente, setAlimente] = useState([]);
	
	const addItemHandler = aliment => {
		setAlimente([
			...alimente,
			aliment
		])
	}

  return (
    <div>
      <AddItem addItem={addItemHandler} />
      <ItemsList alimente={alimente} />
    </div>
  );
};

export default CalculatorAlimente;
