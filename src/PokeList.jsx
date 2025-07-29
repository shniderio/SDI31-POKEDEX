import PokeCard from "./PokeCard"

import { useState, useEffect } from "react"

export default function PokeList({setDetails}){

  const [listData, setListData] = useState([])

    useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=9')
      .then(res=>res.json())
      .then(data => setListData(data.results))
  },[])

  return <div>{listData.map(pokemon => <PokeCard key={pokemon.name} poke={pokemon} setDetails={setDetails}/>)}</div>
}