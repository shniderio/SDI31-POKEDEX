import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
  Typography
} from '@mui/material';

export default function PokeList({}){

  const [ pokeData, setPokeData ] = useState([]);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=9`)
    .then(response => response.json())
    .then(data => {
      const fetches = data.results.map(pokemon =>
        fetch(pokemon.url).then(result => result.json())
      );
      Promise.all(fetches).then(pokemonDetails => setPokeData(pokemonDetails));
    })
  }, []);

  return (
    <Grid container spacing={2} justifyContent="center" sx={{ mt: 3 }}>
      {pokeData.map(poke => (
        <Grid item key={poke.name}>
          <Card sx={{ maxWidth: 150 }}>
            <CardActionArea component={Link} to={`/pokemon/${poke.name}`}>
              <CardMedia
                component="img"
                height="140"
                image={poke.sprites.front_default}
                alt={poke.name}
                sx={{ objectFit: 'contain', p: 1 }}
              />
              <CardContent>
                <Typography variant="h6" align="center">
                  {poke.name}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}