import React from "react";
import { IoMenuOutline } from "react-icons/io5";

const Navbar = () => {
	const navItems = [
		"HOME +",
		"ABOUT US",
		"SERVICES +",
		"PAGES +",
		"BLOG +",
		"CONTACT",
	];
	return (
		<div className="flex justify-between md:justify-end p-2 sm:p-1 sm:px-20 md:p-3 md:px-25 lg:p-5 lg:px-30">
			<div className="flex items-center justify-between sm:gap-32 max-lg:w-full ">
				<div className="md:justify-around hidden justify-between gap-5 whitespace-nowrap lg:flex lg:flex-nowrap lg:gap-10">
					{navItems.map((item, key) => (
						<a key={key} className="text-black font-semibold py-2" href="#">
							{item}
						</a>
					))}
				</div>
				<div className="flex max-md:flex w-full gap-5 justify-between">
					<button className="bg-gradient-to-b from-green-600 to-green-100 text-black font-semibold rounded-full px-3 md:px-6 p-2 md:py-3 shadow-lg text-sm hover:from-green-700 hover:to-green-200">
						<a href="#">APPOINTMENT NOW</a>
					</button>

					<button className="rounded-full border border-gray-300 p-2 hover:bg-gray-100">
						<a href="#">
							<IoMenuOutline className="text-black" size={28} />
						</a>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
