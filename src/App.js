import React from 'react';
import AddItem from "./components/AddItem/AddItem"
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <AddItem/>
      </Container>
    </React.Fragment>
  );
}

export default App;
