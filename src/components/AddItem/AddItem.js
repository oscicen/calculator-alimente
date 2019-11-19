import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { items } from "../../db-items";

import Preview from "../Preview/Preview";

const types = [
  "carne",
  "lactate",
  "oua",
  "proteine-vegetale",
  "legume",
  "fructe"
];

const useStyles = makeStyles(theme => ({
  formControl: {
    minWidth: 282
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

const AddItem = props => {
  const classes = useStyles();

  const [foodType, setFoodType] = useState("");
  const [foodItem, setFoodItem] = useState("");
  const [weight, setWeight] = useState("");

  const setFoodTypeHandler = event => {
    setFoodType(event.target.value);
  };

  const setFoodItemHandler = event => {
    setFoodItem(event.target.value);
  };

  const setWeightHandler = event => {
    setWeight(event.target.value);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="tip-mancare">Categorie</InputLabel>
          <Select
            labelId="tip-mancare"
            onChange={setFoodTypeHandler}
            value={foodType}
          >
            {types.map(type => (
              <MenuItem key={type} value={type}>
                {type}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={4}>
        <FormControl className={classes.formControl}>
          <InputLabel id="mancare">Aliment</InputLabel>
          <Select
            labelId="mancare"
            onChange={setFoodItemHandler}
            value={foodItem}
            disabled={foodType ? false : true}
          >
            {items
              .filter(type => type.tip === foodType)
              .map(item => (
                <MenuItem key={item.value} value={item.value}>
                  {item.nume}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={4}>
        <FormControl className={classes.formControl}>
          <TextField
            label="Gramaj"
            value={weight}
            onChange={setWeightHandler}
            disabled={foodType && foodItem ? false : true}
          />
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <Preview foodItem={foodItem} weight={weight} />
      </Grid>
      <Grid item xs={12}>
        <Button
          variant="contained"
          color="primary"
          disabled={foodType && foodItem && weight ? false : true}
          onClick={() => {
            setFoodType("");
            setFoodItem("");
            setWeight("");
            return props.addItem({ value: foodItem, gramaj: weight });
          }}
        >
          Adauga alimentul
        </Button>
      </Grid>
    </Grid>
  );
};

export default AddItem;
