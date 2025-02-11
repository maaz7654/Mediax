import React from "react";

const Subscribe = () => {
	return (
		<div className="px-8 md:px-20 lg:px-48 py-6 lg:py-10 flex flex-col gap-8 lg:gap-14">
			<div className="flex flex-col lg:flex-row justify-between items-center">
				<h3 className="font-semibold text-2xl lg:text-4xl text-white mb-4 lg:mb-0">
					Subscribe For Newsletter
				</h3>
				<form
					action=""
					className="flex flex-col lg:flex-row gap-3 w-full lg:w-auto"
				>
					<input
						type="text"
						placeholder="Email Address"
						className="bg-white rounded-full p-3 px-5 w-full lg:w-auto"
					/>
					<button className="bg-gradient-to-b from-green-600 to-green-100 text-black font-semibold rounded-full px-3 md:px-6 p-2 md:py-3 shadow-lg text-sm hover:from-green-700 hover:to-green-200">
						<a href="#">SUBSCRIBE</a>
					</button>
				</form>
			</div>
			<div className="w-full bg-gray-700 h-[1px]"></div>
		</div>
	);
};

export default Subscribe;
