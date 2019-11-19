import React from "react";
import Grid from "@material-ui/core/Grid";

import Item from "./Item/Item";
import { items } from "../../db-items";
import { calcItem } from "../../utils/calculate";

const ItemsList = props => {
  const total = props.alimente.length
    ? props.alimente.reduce(
        (acc, item) => {
          const aliment = items.find(alm => alm.value === item.value);
          acc.calorii += +calcItem(aliment.calorii, item.gramaj);
          acc.proteine += +calcItem(aliment.proteine, item.gramaj);
          acc.lipide += +calcItem(aliment.lipide, item.gramaj);
          acc.carbohidrati += +calcItem(aliment.carbohidrati, item.gramaj);
          acc.fibre += +calcItem(aliment.fibre, item.gramaj);
          return acc;
        },
        { calorii: 0, proteine: 0, lipide: 0, carbohidrati: 0, fibre: 0 }
      )
    : null;

  const listaAlimente = props.alimente.length ? (
    <div>
      {props.alimente.map(item => {
        const aliment = items.find(alm => alm.value === item.value);
        return <Item aliment={aliment} weight={item.gramaj} />;
      })}
    </div>
  ) : null;

  const totalAlimente = props.alimente.length ? (
    <Grid
      container
      spacing={2}
      style={{ backgroundColor: "#1565C0", color: "#fff" }}
    >
      <Grid item xs={2}>
        <strong>Total</strong>
      </Grid>
      <Grid item xs={2}>
        <strong>{total.calorii.toFixed(2)}</strong>
      </Grid>
      <Grid item xs={2}>
        <strong>{total.proteine.toFixed(2)}</strong>
      </Grid>
      <Grid item xs={2}>
        <strong>{total.lipide.toFixed(2)}</strong>
      </Grid>
      <Grid item xs={2}>
        <strong>{total.carbohidrati.toFixed(2)}</strong>
      </Grid>
      <Grid item xs={2}>
        <strong>{total.fibre.toFixed(2)}</strong>
      </Grid>
    </Grid>
  ) : null;

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          Aliment:
        </Grid>
        <Grid item xs={2}>
          Calorii
        </Grid>
        <Grid item xs={2}>
          Proteine
        </Grid>
        <Grid item xs={2}>
          Lipide
        </Grid>
        <Grid item xs={2}>
          Carbohidrati
        </Grid>
        <Grid item xs={2}>
          Fibre
        </Grid>
      </Grid>
      {listaAlimente}
      {totalAlimente}
    </>
  );
};

export default ItemsList;
