import React, { useEffect, useState } from "react";
import CharacterCard from './CharacterCard';
import styled from 'styled-components';

const CharacterSection = styled.section`
  background-color: grey;

  div {
    padding: 8px;
    display: flex;
  flex-direction: column;
  }

  .character {
    width: 400px;
    display: flex;
    flex-wrap: wrap;
  }

  display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`
export default function CharacterList(props) {
  const { characterList } = props;
	return (

    <>  <h2>Character List</h2>
    
		<CharacterSection className="character-list">
			
			{
				characterList.map(char => <CharacterCard key={char.id} name={char.name} species={char.species} status={char.status} image={char.image} />)
			}
		</CharacterSection>
    </>
	);
}