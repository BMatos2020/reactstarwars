import React from "react";
import PropTypes from "prop-types";

export function Card(props) {
	return (
		<div className="card" style={{ border: "none" }}>
			<a href={"props.cardLink"} className=" stretched-link" />
			<div className="card" style={{ width: "18rem;" }}>
				<img
					className="card-img-top"
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ6afIs-1S3GXUawbA_UeVHFwO8niO_4O7iEll3Uh8o_FNejgiC"
					alt="Card image cap"
				/>
				<div className="card-body">
					<h5 className="card-title">{props.cardTitle}</h5>
				</div>
			</div>
		</div>
	);
}

Card.propTypes = {
	cardTitle: PropTypes.string
};
