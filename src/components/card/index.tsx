import React from "react";

const Card = ({ data }: { data: any }) => {
	return (
		<div className="w-full flex flex-col md:flex-row-reverse my-2 md:gap-x-2 md:items-center md:justify-between max-w-screen-md bg-slate-900 border-gray-800 border rounded-md shadow-md p-4">
			<div className="w-full md:w-96 flex justify-center md:justify-end">
				<img
					src={data.strDrinkThumb}
					alt={data.strDrink}
					className="w-auto max-h-60 object-cover rounded-md"
				/>
			</div>
			<div className="w-full">
				<h1 className="text-xl font-medium my-3">{data.strDrink}</h1>
				<p className="text-sm">Category : {data.strCategory}</p>
				<p className="text-sm">
					Alcoholic :{" "}
					{data.strAlcoholic === "Alcoholic" ? (
						<span className="text-emerald-400">Yes</span>
					) : (
						<span className="">No</span>
					)}
				</p>
				<p className="text-sm">Glass : {data.strGlass}</p>
				<p className="text-sm mt-4">{data.strInstructions}</p>

				{/* Ingredients */}
				<div className="mt-4">
					<p className="text-sm mt-4 mb-2">Ingredients</p>
					<ul className="list-disc list-inside">
						{Object.keys(data)
							.filter((key) => key.includes("strIngredient"))
							.map((key, index) => {
								if (data[key]) {
									return (
										<li
											key={index}
											className="text-sm ps-4">
											{data[key]} -{" "}
											{data[`strMeasure${key.split("strIngredient")[1]}`] ?? "As your taste"}
										</li>
									);
								}
							})}
					</ul>
				</div>

				{/* video button */}
				{data.strVideo && (
					<div className="my-4 flex justify-start">
						<a
							href={data.strVideo}
							target="_blank"
							rel="noreferrer"
							className="cursor-pointer text-sm font-medium from-purple-700 to-red-500 bg-gradient-to-r text-white px-4 py-1.5 rounded-md hover:from-red-500 hover:to-purple-600 ease-in duration-300">
							Watch Video
						</a>
					</div>
				)}

				{/* tags */}
				<div className="w-full flex justify-center mt-5">
					<div className="flex flex-wrap gap-2">
						{data.strTags &&
							data.strTags.split(",").map((tag: string, index: number) => (
								<span
									key={index}
									className="text-xs bg-emerald-500/50 text-white px-2 py-1 rounded-md">
									{tag}
								</span>
							))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
