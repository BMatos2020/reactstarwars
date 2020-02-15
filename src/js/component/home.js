import React, { useState, useEffect } from "react";
import { Card } from "./card";

// export function Home() {
// 	const [people, setPeople] = useState([]);

// 	useEffect(() => {
// 		fetch("https://swapi.co/api/people/")
// 			.then(resp => resp.json())
// 			.then(data => {
// 				setPeople(data);
// 				console.log(data);
// 			});
// 	}, []);

// 	return (
// 		<>
// 			{people.map((item, index) => {
// 				return <div key={index} />;
// 			})}
// 		</>
// 	);
// }

export function Home() {
	const [people, setPeople] = useState([
		"Angel",
		"Brenda",
		"Joivre",
		"Nick",
		"Hernan",
		"Ben"
	]);

	return (
		<>
			{people.map((item, index) => {
				return <div key={index}>{item}</div>;
			})}
		</>
	);
}
