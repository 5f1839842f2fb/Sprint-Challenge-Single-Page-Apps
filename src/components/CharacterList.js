import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import Axios from "axios";
import CharacterCard from './CharacterCard';
import SearchForm from './SearchForm'

export default function CharacterList() {
  const [charactersData, setCharactersData] = useState([]);
  const [filteredData, setFilteredData] = useState([])

  useEffect(() => {
    Axios.get("https://rickandmortyapi.com/api/character/")
      .then(response => {
        
        setCharactersData(response.data.results)
        setFilteredData(response.data.results)
        console.log("response.data.results: ", response.data.results)
      })
  }, []);

  return (
    <section className="character-list">
      <Link to='/'>Home</Link>
      <div className='charactersDiv'>
        {filteredData.map(element => {
            return <CharacterCard character={element} key={Math.random()}/>
        })}
      </div>
        <SearchForm charactersData={charactersData} setFilteredData={setFilteredData}/>
    </section>
  );
}
