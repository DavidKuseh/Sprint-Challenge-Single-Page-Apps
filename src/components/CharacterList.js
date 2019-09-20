import React, { useEffect, useState } from "react";
import axios from 'axios';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    // debugger
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get("https://rick-api.herokuapp.com/api/character")
     .then(res => {
        setCharacter(res.data.results);
     })
     .catch(error =>{
       console.log(error);
     })
  }, [id]);

  return (
    <section className="character-list">
      <h2>TODO: `array.map()` over your state here!</h2>
      {
        character.map(person => {
          {person.name} {person.status} {person.species}
        })
      }
    </section>
  );
}
