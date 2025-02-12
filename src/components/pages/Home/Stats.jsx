import React from "react";

const Stats = () => {
	const items = [
		{
			count: "69k",
			des: "Satisfied Patients",
		},
		{
			count: "236k",
			des: "Professional Doctors",
		},
		{
			count: "19k",
			des: "Operations Successful",
		},
		{
			count: "320k",
			des: "National Awards Win",
		},
	];

	return (
		<div className="absolute -top-35 p-6 sm:p-10 md:p-16 md:px-32 w-full">
			<div className="flex flex-nowrap justify-between items-center gap-5 sm:gap-8 md:gap-12 lg:gap-16 bg-[#000D44] py-8 sm:py-10 lg:py-5 px-6 sm:px-10 md:px-2 lg:px-24 rounded-3xl">
				{items.map((item, index) => (
					<div
						key={index}
						className="flex items-center lg:space-x-10 text-center"
					>
						<div className="text-white space-y-2 sm:space-y-3">
							<p className="text-xl sm:text-2xl md:text-3xl font-bold text-[#04CE78] whitespace-nowrap">
								{item.count}
								<span className="text-white">+</span>
							</p>
							<p className="text-xs sm:text-sm md:text-md lg:text-lg text-gray-400">
								{item.des}
							</p>
						</div>

						{index !== items.length - 1 && (
							<div className="hidden lg:block bg-white w-[1px] h-12 sm:h-16"></div>
						)}
					</div>
				))}
			</div>
		</div>
	);
};

export default Stats;
