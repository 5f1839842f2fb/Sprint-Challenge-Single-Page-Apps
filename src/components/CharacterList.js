import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import WelcomePage from './WelcomePage'
import Axios from "axios";
import CharacterCard from './CharacterCard';

export default function CharacterList() {
  const [charactersData, setCharactersData] = useState([]);

  useEffect(() => {
    Axios.get("https://rickandmortyapi.com/api/character/")
      .then(response => {
        
        setCharactersData(response.data.results)
        console.log("response.data.results: ", response.data.results)
      })
  }, []);

  return (
    <section className="character-list">
      <Link to='/'>Home</Link>
      <div className='charactersDiv'>
        {charactersData.map(element => {
            return <CharacterCard character={element} key={Math.random()}/>
        })}
      </div>
    </section>
  );
}
