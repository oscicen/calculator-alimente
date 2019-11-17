import React from "react";
import Grid from "@material-ui/core/Grid";

import { items } from "../../db-items";

const Preview = props => {
  const aliment = items.find(item => item.value === props.foodItem);

	const calculateItems = item => {
		return (item * props.weight / 100).toFixed(2);
	}

  const infoReady = props.weight ? (
    <Grid container spacing={3}>
      <Grid item xs={2}>
        Aliment:
        <br />
        <strong>{aliment.nume}</strong>
      </Grid>
      <Grid item xs={2}>
        Calorii
        <br />
        <strong>{calculateItems(aliment.calorii)}</strong>
      </Grid>
      <Grid item xs={2}>
        Proteine
        <br />
        <strong>{calculateItems(aliment.proteine)}</strong>
      </Grid>
      <Grid item xs={2}>
        Lipide
        <br />
        <strong>{calculateItems(aliment.lipide)}</strong>
      </Grid>
      <Grid item xs={2}>
				Carbohidrati
        <br />
        <strong>{calculateItems(aliment.carbohidrati)}</strong>
      </Grid>
      <Grid item xs={2}>
				Fibre
        <br />
        <strong>{calculateItems(aliment.fibre)}</strong>
      </Grid>
    </Grid>
  ) : (
    <p>Completeaza campurile de mai sus.</p>
  );

  return infoReady;
};

export default Preview;
