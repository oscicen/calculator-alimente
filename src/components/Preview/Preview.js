import React from "react";
import Grid from "@material-ui/core/Grid";

import { items } from "../../db-items";
import { calcItem } from "../../utils/calculate";

const Preview = props => {
  const aliment = items.find(item => item.value === props.foodItem);

  const infoReady = props.weight ? (
    <>
      <Grid container spacing={2}>
        <Grid item xs={2}>Aliment:</Grid>
        <Grid item xs={2}>Calorii</Grid>
        <Grid item xs={2}>Proteine</Grid>
        <Grid item xs={2}>Lipide</Grid>
        <Grid item xs={2}>Carbohidrati</Grid>
        <Grid item xs={2}>Fibre</Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <strong>{aliment.nume}</strong>
        </Grid>
        <Grid item xs={2}>
          <strong>{calcItem(aliment.calorii, props.weight)}</strong>
        </Grid>
        <Grid item xs={2}>
          <strong>{calcItem(aliment.proteine, props.weight)}</strong>
        </Grid>
        <Grid item xs={2}>
          <strong>{calcItem(aliment.lipide, props.weight)}</strong>
        </Grid>
        <Grid item xs={2}>
          <strong>{calcItem(aliment.carbohidrati, props.weight)}</strong>
        </Grid>
        <Grid item xs={2}>
          <strong>{calcItem(aliment.fibre, props.weight)}</strong>
        </Grid>
      </Grid>
    </>
  ) : (
    <p>Completeaza campurile de mai sus.</p>
  );

  return infoReady;
};

export default Preview;
