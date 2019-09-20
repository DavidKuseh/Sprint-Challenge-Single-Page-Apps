import React from "react";

export default function SearchForm(props) {
	const {onSearch, searchTerm }= props;
	return (
		<section className="search-form">
			<label htmlFor='nameInput'>Search Character Name: </label>
			<input onChange={onSearch} value={searchTerm} id='nameInput' type='text' />
		</section>
	);
}