import React, { useEffect } from "react";
import Bds from "../../assets/images/bat-dong-san.png";
import ECom from "../../assets/images/e-com.png";
import EComDash from "../../assets/images/e-dashboard.png";
import Todo from "../../assets/images/todo.png";
import Calculator from "../../assets/images/calculator.png";
import Gallery from "../../assets/images/gallery.png";
import Insta from "../../assets/images/insta.png";
import KeoBua from "../../assets/images/keo-bua-bao.png";
import Student from "../../assets/images/student.png";
import Sunshie from "../../assets/images/sunshine.png";
import Movie from "../../assets/images/movieApp.png";
import Memory from "../../assets/images/memory.png";
import MuiEDash from "../../assets/images/muiDashboard.png";
import MuiClient from "../../assets/images/muiClient.png";

const MyWork = ({ isLight }) => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const workArrs = [
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
		{
			name: "Bat Dong San",

			skills: ["React", "Tailwind", "Firebase", "Redux"],
			url: "https://thue-phong.vercel.app",
			img: Bds,
		},
		{
			name: "Instagram-clone",
			skills: ["React", "Tailwind", "Firebase", "Redux"],
			url: "https://instagram-clone-gilt-nine.vercel.app/",
			img: Insta,
		},
		{
			name: "Basic E-commerce",
			skills: ["React", "Tailwind", "Firebase", "Redux"],
			url: "https://shopping-site-xi.vercel.app/",
			img: ECom,
		},
		{
			name: "Bacsic E-commerce dashboard",
			skills: ["React", "Tailwind", "Firebase", "Redux"],
			url: "https://11st-dashboard.vercel.app/home",
			img: EComDash,
		},
		{
			name: "Calculator",
			skills: ["React", "Sass"],
			url: "https://calculator-nine-rouge.vercel.app/",
			img: Calculator,
		},

		{
			name: "Keo bua bao",
			skills: ["React", "Sass"],
			url: "https://rock-scissor.vercel.app/",
			img: KeoBua,
		},

		{
			name: "Movie app",
			skills: ["React", "Tailwind", "API", "Redux"],
			url: "https://movie-app-bay-nu.vercel.app/",
			img: Movie,
		},
	];

	return (
		<div className="grid gap-10 pt-28 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
			{workArrs.map((item, idx) => (
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
							<img className=" rounded" src={item.img} alt="" />
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
	);
};

export default MyWork;
