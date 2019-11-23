import React from "react";
import Table from "@material-ui/core/Table";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

import TableItem from "../TableItem/TableItem";
import { items } from "../../db-items";
import { calcItem } from "../../utils/utils";

const useStyles = makeStyles({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  paper: {
    padding: 18,
    marginBottom: 24
  }
});

const ListItems = props => {

  const classes = useStyles();

  const total = props.alimente.length
    ? props.alimente.reduce(
        (acc, item) => {
          const aliment = items.find(alm => alm.value === item.value);
          acc.calorii += +calcItem(aliment.calorii, item.gramaj);
          acc.proteine += +calcItem(aliment.proteine, item.gramaj);
          acc.lipide += +calcItem(aliment.lipide, item.gramaj);
          acc.carbohidrati += +calcItem(aliment.carbohidrati, item.gramaj);
          acc.fibre += +calcItem(aliment.fibre, item.gramaj);
          acc.gramaj += +item.gramaj
          return acc;
        },
        { calorii: 0, proteine: 0, lipide: 0, carbohidrati: 0, fibre: 0, gramaj: 0 }
      )
    : null;

  const listaAlimente = props.alimente.length ? (
    <>
      {props.alimente.map((item, i) => {
        const aliment = items.find(alm => alm.value === item.value);
        return (
          <TableItem
            key={aliment.value + i}
            itemData={[
              aliment.nume,
              aliment.calorii,
              aliment.proteine,
              aliment.lipide,
              aliment.carbohidrati,
              aliment.fibre,
              item.gramaj
            ]}
          />
         );
      })}
    </>
  ) : null;

  const totalAlimente = props.alimente.length ? (
    <TableItem
      itemType="footer"
      itemData={[
        "Total",
        (total.calorii).toFixed(2),
        (total.proteine).toFixed(2),
        (total.lipide).toFixed(2),
        (total.carbohidrati).toFixed(2),
        (total.fibre).toFixed(2),
        total.gramaj
      ]}
    />
  ) : null;

  return (
    <>
      <Paper className={classes.paper}>
        <Table className={classes.root} size="small">
          <TableItem 
            itemType="head" 
          />
        {listaAlimente}
        {totalAlimente}
        </Table>
      </Paper>
    </>
  );
};

export default ListItems;
