import { Container, Typography, Box, List, ListItem} from '@mui/material';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css'

import PokeList from './PokeList'
import Details from './Details'

function App() {

  return(

      <Container>
        <Box sx={{ textAlign: 'center', mt: 4}}>
        <Typography variant='h2' color='primary' gutterBottom>
          POKEDEX
        </Typography>
          <List sx={{ display: 'flex', justifyContent: 'center'}}>
            <ListItem>
                <Link to="/pokedex">Pokedex</Link>
            </ListItem>
          </List>
        </Box>
      
        <Routes>
          <Route path="/pokedex" element={<PokeList />} />
          <Route path="/pokemon/:name" element={<Details />} />
        </Routes>
      </Container>
  )
  
}

export default App
