import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import { Icon, IconButton, Container } from '@mui/material';

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Container>
        <IconButton>
          <Icon>favorite</Icon>
        </IconButton>
        <IconButton>
          <Icon>share</Icon>
        </IconButton>
        <Button variant="outlined" color="primary">Read more</Button>
      </Container>
    </div>
  );
}

export default App;
