import React, { useState, useEffect } from "react";

//create your first component
export function Home() {
	const [people, setPeople] = useState([]);

	useEffect(() => {
		fetch("https://swapi.co/api/films/")
			.then(resp => resp.json())
			.then(data => {
				console.log(data);
			});
	}, []);

	return <></>;
}
