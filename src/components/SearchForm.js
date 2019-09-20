import React from "react";
import styled from 'styled-components';

const Form = styled.div`
	form {
		width: 100%;
		display: flex;
	}
	.col {
		padding-right: 15px;
	}
	label {
		display: block;
	}
`;

export default function SearchForm(props) {
	const { search, setSearch } = props
	const handleChange = e => {
		setSearch({ ...search, [e.target.id]: e.target.value });
	}
	return (
		<section className="search-form">
			<Form>
				<form onSubmit={e => e.preventDefault()}>
					<div className="col">
						<label htmlFor="name"></label>
						<input
							id="name"
							name="name"
							type="text"
							value={search.name}
							onChange={handleChange}
							placeholder="Search character name"
						/>
            <button>Search</button>
					</div>
				</form>
			</Form>
		</section>
	);
}