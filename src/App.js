import React from "react";
import CalculatorAlimente from "./components/CalculatorAlimente/CalculatorAlimente";
import Header from "./components/Header/Header";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    marginTop: "80px"
  }
}

const App = props => {

  const { classes, className, ...rest } = props

  return (
    <>
      <CssBaseline />
      <Container maxWidth="md" className={[classes.root, className].join(" ")} {...rest}>
        <Header />
        <CalculatorAlimente />
      </Container>
    </>
  );
}

export default withStyles(styles)(App);
