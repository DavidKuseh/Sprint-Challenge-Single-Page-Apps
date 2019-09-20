  
import React from "react";

export default function CharacterCard(props) {
	const {
		name,
		image,
		species,
		status,
	} = props.data;
	return (
		<div className="character">
			<div>Name: {name}</div>
			<div>Species: {species}</div>
			<div>Status: {status}</div>
			<img src={image} alt=''/>
		</div>
	);
}