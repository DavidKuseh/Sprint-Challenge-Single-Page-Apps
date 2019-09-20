  
import React from "react";

export default function CharacterCard(props) {
	const {
		name,
		image,
		species,
		status,
	} = props;
	return (
		<div className="character">
			<img src={image} alt=''/>
			<h3>Name: {name}</h3>
			<p>Species: {species}</p>
			<p>Status: {status}</p>
		</div>
	);
}