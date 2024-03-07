import React from "react";

const Greetings = () => {
	return (
		<div className="h-fit">
			<h1 className="text-4xl font-bold">
				Welcome to the <span className="text-emerald-400">Cocktail Search App</span>
			</h1>
			<p className="text-md italic mt-3 text-center">
				Search for your favorite cocktails and find new ones to try!
			</p>
		</div>
	);
};

export default Greetings;
