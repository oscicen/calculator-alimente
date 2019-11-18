import React from "react";
import Grid from "@material-ui/core/Grid";

import { calcItem } from "../../../utils/calculate";

const Item = props => {
  const { aliment, weight } = props;

  return (
    <Grid container spacing={2}>
      <Grid item xs={2}>
        <strong>{aliment.nume}</strong>
      </Grid>
      <Grid item xs={2}>
        <strong>{calcItem(aliment.calorii, weight)}</strong>
      </Grid>
      <Grid item xs={2}>
        <strong>{calcItem(aliment.proteine, weight)}</strong>
      </Grid>
      <Grid item xs={2}>
        <strong>{calcItem(aliment.lipide, weight)}</strong>
      </Grid>
      <Grid item xs={2}>
        <strong>{calcItem(aliment.carbohidrati, weight)}</strong>
      </Grid>
      <Grid item xs={2}>
        <strong>{calcItem(aliment.fibre, weight)}</strong>
      </Grid>
    </Grid>
  );
};

export default Item;
