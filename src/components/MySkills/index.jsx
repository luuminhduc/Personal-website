import React from "react";

const MySkills = ({ isLight }) => {
	const skillArr = [
		"React",
		"Vanila javascript",
		"Sass",
		"Firebase",
		"Tailwindcss",
		"Git",
		"Node-js",
		"ES6",
		"REST API",
		"CSS",
		"Bootstrap",
		"JSON",
		"Redux",
		"Redux toolkit",
		"Mongo-db",
	];
	return (
		<div className="flex pt-28 flex-wrap">
			{skillArr.map((item) => (
				<div
					key={item}
					className={`border mr-5 mb-5 border-solid px-3 py-1 rounded ${
						isLight ? "border-gray-300 bg-white" : "border-gray-700 bg-gray-800"
					}`}
				>
					{item}
				</div>
			))}
		</div>
	);
};

export default MySkills;
