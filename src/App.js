import React, { useState, useEffect } from "react";
import { Route, Link } from 'react-router-dom';
import Header from "./components/Header.js";
import CharacterList from './components/CharacterList';
import WelcomePage from './components/WelcomePage';
import SearchForm from './components/SearchForm';
import axios from 'axios';

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
	const [characterData, setCharacterData] = useState([]);
	useEffect(() => {
		axios.get('https://rickandmortyapi.com/api/character/')
			.then(res => {
				setCharacterData(res.data.results);
			})
			.catch(error => console.log(error))
	}, []);


  const onSearch = event => {
    setSearchTerm(event.target.value);
  }

  return (
    <main>
      <Header />
        <Link to="/">Home</Link>
        <SearchForm onSearch={onSearch} searchTerm={searchTerm}/>
        <Route exact path ='/' component= {WelcomePage} />
        <Route path ='/characters' render= {() => 
        <CharacterList characterList={characterData.filter(char =>{
        return char.name.includes(searchTerm);
        })}/> } />
    </main>
  );
}
