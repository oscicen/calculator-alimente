import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Table from "@material-ui/core/Table";

import TableItem from "../TableItem/TableItem";
import { items } from "../../db-items";

const useStyles = makeStyles({
  root: {
    width: '100%',
    overflowX: 'auto',
  }
});

const Preview = props => {

  const classes = useStyles();
  const aliment = items.find(item => item.value === props.foodItem);

  const infoReady = props.weight ? (
    <>
      <Table className={classes.root} size="small">
        <TableItem
          itemType="head"
        />
        <TableItem
          itemData={[
            aliment.nume,
            aliment.calorii,
            aliment.proteine,
            aliment.lipide,
            aliment.carbohidrati,
            aliment.fibre,
            props.weight
          ]}
        />
      </Table>
    </>
  ) : (
    <p style={{ textAlign: "center" }}>Completeaza campurile de mai sus.</p>
  );

  return infoReady;
};

export default Preview;
