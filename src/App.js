import { Grid } from '@mui/material';
import './App.css';
import Navbar from './components/Navbar';
import MainBody from './components/MainBody';

function App() {
  return (
    <Grid>
    <Navbar />
    <Grid mt={'50px'}>
    <MainBody />
    </Grid>
    </Grid>
  );
}

export default App;
