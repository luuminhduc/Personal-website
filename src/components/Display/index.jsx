import React from "react";
import MuiEDash from "../../assets/images/muiDashboard.png";
import MuiClient from "../../assets/images/muiClient.png";
import { Link } from "react-router-dom";

const Display = ({ isLight }) => {
	const arr = [
		{
			name: "Fullstack E-commerce app (admin)",
			skills: ["React", "Material-UI", "Node-js", "Mongo-db", "Redux-toolkit"],
			url: "https://my-ecommerce-mui-style.vercel.app/home",
			img: MuiEDash,
		},
		{
			name: "Fullstack E-commerce app (user)",
			skills: ["React", "Material-UI", "Node-js", "Mongo-db", "Redux-toolkit"],
			url: "https://e-commerce-client-site.vercel.app/",
			img: MuiClient,
		},
	];

	return (
		<div>
			<div className="grid gap-10 pt-28 lg:grid-cols-2 md:grid-cols-1 grid-cols-1">
				{arr.map((item, idx) => (
					<a rel="noreferrer" target="_blank" href={`${item.url}`}>
						<div
							className={`rounded-lg border hover:scale-105 transform cursor-pointer mb-3 ${
								isLight
									? "border-gray-300 bg-white"
									: "border-gray-700 bg-gray-800"
							}`}
							key={idx}
						>
							{item.img ? (
								<img className="" src={item.img} alt="" />
							) : (
								<div className="h-24 w-24"></div>
							)}
							<div className="p-5">
								<h3 className={`font-semibold mb-3`}>{item.name}</h3>
								<div className="flex flex-wrap">
									{item.skills.map((el, i) => (
										<p
											className="mr-3 px-3 py-1 bg-green-500 text-white rounded mb-1 text-xs"
											key={i}
										>
											#{el}
										</p>
									))}
								</div>
							</div>
						</div>
					</a>
				))}
			</div>
			<div className="text-center mt-7">
				<Link
					className="bg-blue-500 text-white px-7 py-3 rounded cursor-pointer"
					to="/projects"
				>
					More projects
				</Link>
			</div>
		</div>
	);
};

export default Display;
