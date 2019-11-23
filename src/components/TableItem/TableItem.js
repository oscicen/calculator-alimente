import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableFooter from '@material-ui/core/TableFooter';

import { createData, calcItem, tableHeadData } from "../../utils/utils";

const useStyles = makeStyles({
  tableCell: {
    fontSize: "0.875rem",
    borderBottom: "none",
    color: "#1b5e20"
  }
});

const TableItem = props => {

  const classes = useStyles();

  const row = props.itemType === "head" ? createData(...tableHeadData) : createData(...props.itemData);

  let tableItem = null;

  if (props.itemType === "head") {
    tableItem = (
      <TableHead>
        <TableRow>
          <TableCell><strong>{row.name}</strong></TableCell>
          <TableCell align="right"><strong>{row.calories}</strong></TableCell>
          <TableCell align="right"><strong>{row.protein}</strong></TableCell>
          <TableCell align="right"><strong>{row.fat}</strong></TableCell>
          <TableCell align="right"><strong>{row.carbs}</strong></TableCell>
          <TableCell align="right"><strong>{row.fiber}</strong></TableCell>
          <TableCell align="right"><strong>{row.weight}</strong></TableCell>
        </TableRow>
      </TableHead>
    )
  } else if (props.itemType === "footer") {
    tableItem = (
      <TableFooter>
        <TableRow>
          <TableCell className={classes.tableCell}><strong>{row.name}</strong></TableCell>
          <TableCell className={classes.tableCell} align="right"><strong>{row.calories}</strong></TableCell>
          <TableCell className={classes.tableCell} align="right"><strong>{row.protein}</strong></TableCell>
          <TableCell className={classes.tableCell} align="right"><strong>{row.fat}</strong></TableCell>
          <TableCell className={classes.tableCell} align="right"><strong>{row.carbs}</strong></TableCell>
          <TableCell className={classes.tableCell} align="right"><strong>{row.fiber}</strong></TableCell>
          <TableCell className={classes.tableCell} align="right"><strong>{row.weight}</strong></TableCell>
        </TableRow>
      </TableFooter>
    )
  } else {
    tableItem = (
      <TableBody>
        <TableRow>
          <TableCell>{row.name}</TableCell>
          <TableCell align="right">{calcItem(row.calories, row.weight)}</TableCell>
          <TableCell align="right">{calcItem(row.protein, row.weight)}</TableCell>
          <TableCell align="right">{calcItem(row.fat, row.weight)}</TableCell>
          <TableCell align="right">{calcItem(row.carbs, row.weight)}</TableCell>
          <TableCell align="right">{calcItem(row.fiber, row.weight)}</TableCell>
          <TableCell align="right">{row.weight}</TableCell>
        </TableRow>
      </TableBody>
    )
  }

  return tableItem;
}

export default TableItem;