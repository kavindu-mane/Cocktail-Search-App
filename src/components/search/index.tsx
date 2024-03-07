"use client";

import axios from "axios";
import { useState } from "react";
type propTypes = {
	setCocktails: (cocktails: any[]) => void;
	setIsInitial: (isInitial: boolean) => void;
};

const Search = ({ setCocktails, setIsInitial }: propTypes) => {
	const [search, setSearch] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const fetchCocktails = async () => {
		setIsLoading(true);
		await axios
			.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
			.then((res) => {
				const { drinks } = res.data;
				if (drinks) {
					setCocktails(drinks);
					setIsInitial(false);
				} else {
					setCocktails([]);
					setIsInitial(false);
				}
			})
			.catch(() => {
				alert("Failed to fetch cocktails data. Please try again later.");
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	return (
		<div className="w-full max-w-screen-sm pt-10 flex flex-col items-center">
			{/* search input */}
			<input
				type="text"
				placeholder="Search Cocktails..."
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				className="w-full p-2 px-4 border bg-transparent border-gray-300 focus:outline-none rounded-full"
			/>

			{/* search button */}
			<button
				onClick={fetchCocktails}
				disabled={isLoading}
				className="bg-emerald-600 w-fit hover:bg-purple-500 duration-200 ease-in-out text-white p-1.5 mt-5 hover px-20 rounded-full">
				{isLoading ? "Loading..." : "Search"}
			</button>
		</div>
	);
};

export default Search;
