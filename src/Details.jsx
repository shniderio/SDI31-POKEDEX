import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Details(){
  const {name } = useParams();
  const [ pokeData, setPokeData ] = useState(null);
  
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(response => response.json())
      .then(data => setPokeData(data));
  }, [name]);

  if (!pokeData) return <div>Loading...</div>;


  return (
    <>
      <div>
        <h2>{pokeData.name}</h2>
        <img alt={pokeData.name} src={pokeData.sprites.front_default} />
        <ol>
          {pokeData.moves.map(move => (
            <li key={move.move.name}>{move.move.name}</li>
          ))}
        </ol>
      </div>
    </>
  )
  
  
  // return (
  // <div>
  //   {pokeData.name}
  //   <img alt={pokeData.name} src={pokeData.sprites.front_default}/>
  //   <ol>
  //     {pokeData.moves.map(move => <li>{move.move.name}</li>)}
  //   </ol>
  // </div>
  // )
}