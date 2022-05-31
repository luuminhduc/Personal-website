import React from "react";
import Display from "../Display";

const Banner = ({ isLight }) => {
	const arr = [
		{
			name: "Github",
			link: "https://github.com/luuminhduc",
		},
		{
			name: "Gitlab",
			link: "https://gitlab.com/duc123",
		},
		{
			name: "Email",
			text: "luuminhduc00@gmail.com",
		},
		{
			name: "Phone number",
			text: "0383172117",
		},
	];
	return (
		<div>
			<div className="flex flex-col md:w-full w-10/12  mx-auto justify-center pt-44 mb-24 items-center">
				<h1 className={`font-bold text-blue-500 text-center text-6xl mb-5 `}>
					Front end web developer
				</h1>
				<p
					className={`text-center text-xl ${
						isLight ? "text-gray-700" : "text-gray-400"
					}`}
				>
					I design and code beautifully simple things, and I love what I do.
				</p>
			</div>

			<div className="grid gap-10 lg:grid-cols-3 md:grid-cols-3 grid-cols-1">
				{arr.map((item, idx) => (
					<div
						className={`border border-solid p-3 rounded ${
							isLight
								? "bg-white border-gray-300"
								: "bg-gray-800 border-gray-700"
						}`}
						key={idx}
					>
						<p className="font-semibold mb-3">{item.name}</p>
						{item.link ? (
							<a rel="noreferrer" target="_blank" href={`${item.link}`}>
								<p className="text-gray-500">{item.link}</p>
							</a>
						) : (
							<p className="text-gray-500">{item.text}</p>
						)}
					</div>
				))}
			</div>

			<Display isLight={isLight} />
		</div>
	);
};

export default Banner;
