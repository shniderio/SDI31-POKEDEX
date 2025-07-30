import { useEffect,useState } from "react"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

export default function PokeCard({poke, setDetails}){

  const [pokeData, setPokeData] = useState({})

  useEffect(()=>{
    fetch(poke.url)
      .then(res=>res.json())
      .then(data => setPokeData(data))
  },[])

  // if pokeData is empty display loading.
  if(Object.keys(pokeData).length < 1) return <div>Loading...</div>

  return (<div className="pokemon">
    <button onClick={() => setDetails(pokeData)}>SET DETAILS</button><br/>
    {pokeData.name} <br/>
    <img alt={pokeData.name} src={pokeData.sprites.front_default}/>
    </div>)
}