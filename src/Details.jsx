
export default function Details({pokeData}){
  return (
  <div>
    {pokeData.name}
    <img alt={pokeData.name} src={pokeData.sprites.front_default}/>
    <ol>
      {pokeData.moves.map(move => <li>{move.move.name}</li>)}
    </ol>
  </div>
)
}