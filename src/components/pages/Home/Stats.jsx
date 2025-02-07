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
		<div className="absolute -top-35 p-8 md:p-16 md:px-32">
			<div className="flex flex-wrap justify-between items-center gap-10 bg-[#000D44] py-10 px-8 md:px-16 lg:px-32 rounded-3xl">
				{items.map((item, index) => (
					<div
						key={index}
						className="flex items-center lg:space-x-17 text-center"
					>
						<div className="text-white space-y-3">
							<p className="text-4xl font-bold text-[#04CE78] whitespace-nowrap">
								{item.count}
								<span className="text-white">+</span>
							</p>
							<p className="text-sm md:text-md text-gray-400">{item.des}</p>
						</div>

						{index !== items.length - 1 && (
							<div className="hidden lg:block bg-white w-[1px] h-16"></div>
						)}
					</div>
				))}
			</div>
		</div>
	);
};

export default Stats;
