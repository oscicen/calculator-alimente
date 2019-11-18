import React from "react";
import Grid from "@material-ui/core/Grid";

import Item from "./Item/Item";
import { items } from "../../db-items";

const ItemsList = props => {
  const listaAlimente = props.alimente.length ? (
    <div>
			
      {props.alimente.map(item => {
        const aliment = items.find(alm => alm.value === item.value);
        return <Item aliment={aliment} weight={item.gramaj} />;
      })}
    </div>
  ) : null;

  return (
		<>
		<Grid container spacing={2}>
			<Grid item xs={2}>Aliment:</Grid>
			<Grid item xs={2}>Calorii</Grid>
			<Grid item xs={2}>Proteine</Grid>
			<Grid item xs={2}>Lipide</Grid>
			<Grid item xs={2}>Carbohidrati</Grid>
			<Grid item xs={2}>Fibre</Grid>
		</Grid>
		{listaAlimente}
	</>
	);
};

export default ItemsList;
