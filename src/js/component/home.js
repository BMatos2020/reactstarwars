import React, { useState, useEffect } from "react";
import { Card } from "./card";

export function Home() {
	const [people, setPeople] = useState([]);

	useEffect(() => {
		fetch("https://swapi.co/api/people/")
			.then(resp => resp.json())
			.then(data => {
				setPeople(data);
				// useState([]);
				// console.log(data);
			});
	}, []);

	return (
		<div>
			{people.results &&
				people.results.map((item, index) => {
					return <Card key={index} cardTitle={item.name} />;
				})}
		</div>
	);
}

// On line 19 --- before mapping ,
// REACT requires you to check whether there are items to display on load,
// then it will render the map

// 	useEffect(() => {
// 		fetch("https://swapi.co/api/people/")
// 			.then(resp => resp.json())
// 			.then(data => {
// 				setPeople(data.results);
// 				// useState([]);
// 				console.log(data);
// 			});
// 	}, []);

// 	return (
// 		<div>
// 			{people.map((item, index) => {
// 				return <Card key={index} cardTitle={item.name} />;
// 			})}
// 		</div>
// 	);
// }

//

// export function Home() {
// 	const [people, setPeople] = useState([]);

// 	useEffect(() => {
// 		fetch("https://swapi.co/api/people/", {
// 			method: "GET"
// 		})
// 			.then(resp => resp.json())
// 			.then(data => {
// 				useState([]);

// 				console.log(data);
// 			});
// 	}, []);

// 	return (
// 		<>
// 			{people.results.map((item, index) => {
// 				return <Card key={index} cardTitle={item} />;
// 			})}
// 			;
// 		</>
// 	);
// }

// // export function Home() {
// // 	const [people, setPeople] = useState([
// // 		"Angel",
// // 		"Brenda",
// // 		"Joivre",
// // 		"Nick",
// // 		"Hernan",
// // 		"Ben"
// // 	]);

// // 	return (
// // 		<>
// // 			{people.map((item, index) => {
// // 				return <Card key={index} cardTitle={item} />;
// // 			})}
// // 			;
// // 		</>
// // 	);
// // }
