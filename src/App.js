import React from 'react';
import CalculatorAlimente from "./components/CalculatorAlimente/CalculatorAlimente"
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <CalculatorAlimente/>
      </Container>
    </React.Fragment>
  );
}

export default App;
