import { useState } from 'react'
import './App.css'

import PokeList from './PokeList'
import Details from './Details'

function App() {

  const [details, setDetails] = useState({})

  return(
    <div>
      <h1>POKEDEX</h1>
      <button onClick={() => setDetails({})}>HOME</button>
      {Object.keys(details).length < 1 ? <PokeList setDetails={setDetails}/>: <Details pokeData={details}/>}
    </div>
  )
  
}

export default App
