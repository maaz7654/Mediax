import React from "react";

const Subscribe = () => {
	return (
		<div className="px-48 py-10 flex flex-col gap-14">
			<div className="flex justify-around items-center">
				<h3 className="font-semibold text-4xl text-white w-full">
					Subscribe For Newsletter
				</h3>
				<form action="" className="flex gap-3 w-full justify-end px-16">
					<input
						type="text"
						placeholder="Email Address"
						className="bg-white rounded-full p-3 px-5 w-full"
					/>
					<button className="bg-gradient-to-b from-green-600 to-green-100  text-black font-semibold rounded-full px-3 md:px-6 p-2 md:py-3 shadow-lg text-sm hover:from-green-700 hover:to-green-200">
						<a href="#">SUBSCRIBE</a>
					</button>
				</form>
			</div>
			<div className="w-full bg-gray-700 h-[1px]"></div>
		</div>
	);
};

export default Subscribe;
