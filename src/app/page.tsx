"use client";

import Card from "@/components/card";
import Footer from "@/components/footer";
import Greetings from "@/components/greetings";
import Search from "@/components/search";
import { useState } from "react";

export default function Home() {
	const [cocktails, setCocktails] = useState<any[]>([]);
	const [isInitial, setIsInitial] = useState(true);

	return (
		<main className="flex space-y-4 min-h-screen flex-col items-center justify-between p-24 pb-6">
			{/* greetings */}
			<Greetings />

			{/* search bar */}
			<Search
				setCocktails={setCocktails}
				setIsInitial={setIsInitial}
			/>

			{/* content area */}
			<div className="w-full h-full">
				{/* cocktails */}
				{cocktails.length > 0 ? (
					<ul className="flex flex-col items-center">
						{cocktails.map((cocktail, index) => (
							<Card
								key={index}
								data={cocktail}
							/>
						))}
					</ul>
				) : (
					!isInitial && <p className="text-sm italic text-center">No cocktails found.</p>
				)}
			</div>

			{/* footer */}
			<Footer />
		</main>
	);
}
