import React from "react";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const TopBar = () => {
	const iconSize = 13;
	const items = [
		{
			icon: <FaPhone color="white" size={iconSize} />,
			att: "Phone: +163-654-3569",
		},
		{
			icon: <MdEmail color="white" size={iconSize} />,
			att: "Email: info@mediax.com",
		},
		{
			icon: <FaLocationDot color="white" size={iconSize} />,
			att: " 1 Barnes Jewish Hospital Plaza, United States",
		},
	];

	return (
		<div className="hidden md:flex md:bg-[#1F5FFF] md:p-2 lg:px-32">
			<div className="flex md:justify-between lg:justify-start flex-1 gap-3">
				{items.map((item, key) => {
					return (
						<div key={key} className="flex gap-2">
							<div className="border-white border-1 rounded-full p-2">
								{item.icon}
							</div>
							<div className="flex items-center ">
								<p className="text-white text-xs lg:text-lg">{item.att}</p>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default TopBar;
