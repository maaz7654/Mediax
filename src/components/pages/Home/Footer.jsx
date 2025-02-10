import React from "react";
import Subscribe from "./Subscribe";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { CiPhone } from "react-icons/ci";

const Footer = () => {
	const div_1 = [
		{
			icon: <CiLocationOn color="#04CE78" />,
			content: "2478 Street City Ohio 90255",
		},
		{
			icon: <MdOutlineEmail color="#04CE78" />,
			content: "2478 info@mediax.com City",
		},
		{
			icon: <CiPhone color="#04CE78" />,
			content: "+(402) 763 282 46",
		},
	];

	return (
		<div className="bg-[url('/images/footer_bg.jpg')] bg-cover">
			<Subscribe />

			<div className="px-48 py-32 flex justify-start">
				<div className="space-y-3">
					<p className="text-gray-400">
						Subscribe to out newsletter today to receive latest news
						administrate cost effective for tactical data.
					</p>

					{div_1.map((item, key) => {
						return (
							<div className="flex items-center gap-2 text-gray-400">
								{item.icon}
								<p>{item.content}</p>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Footer;
