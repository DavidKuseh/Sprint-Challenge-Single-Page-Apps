import React, { useEffect, useState } from "react";
import axios from 'axios';

import CharacterCard from './CharacterCard';
import SearchForm from './SearchForm';
import styled from 'styled-components';

const CharacterSection = styled.section`
  background-color: grey;
`
export default function CharacterList(props) {
	const [characters, setCharacters] = useState([]);
	const [search, setSearch] = useState('');
	const [searchResults, setSearchResults] = useState([]);
	useEffect(() => {
		// TODO: Add API Request here - must run in `useEffect`
		axios.get('https://rickandmortyapi.com/api/character/')
			.then(res => {
				setCharacters(res.data.results);
			})
			.catch(error => console.log(error))

		//  Important: verify the 2nd `useEffect` parameter: the dependancies array!
	}, []);

	const charList = (searchResults.length > 0 ? searchResults : characters);
	return (
		<CharacterSection className="character-list">
			<SearchForm
				search={search}
				setSearch={setSearch}
			/>
			<h2>Character List</h2>
			{
				charList.map(char => <CharacterCard key={char.id} data={char} />)
			}
		</CharacterSection>
	);
}