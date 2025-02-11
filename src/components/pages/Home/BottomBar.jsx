import React from "react";
import {
	FaFacebookF,
	FaTwitter,
	FaLinkedinIn,
	FaWhatsapp,
} from "react-icons/fa";

const BottomBar = () => {
	const socialLinks = [
		{ icon: <FaFacebookF color="#000D44" />, link: "https://www.facebook.com" },
		{ icon: <FaTwitter color="#000D44" />, link: "https://www.twitter.com" },
		{
			icon: <FaLinkedinIn color="#000D44" />,
			link: "https://www.linkedin.com",
		},
		{ icon: <FaWhatsapp color="#000D44" />, link: "https://www.whatsapp.com" },
	];

	return (
		<div className="hidden md:flex md:bg-[#1F5FFF] md:p-2 text-white justify-around items-center">
			<p>Copyright © 2024. All Rights Reserved.</p>
			<div className="flex gap-2">
				{socialLinks.map((item, key) => (
					<a
						href={item.link}
						target="_blank"
						rel="noopener noreferrer"
						key={key}
						className="bg-white p-3 h-10 w-10 rounded-full text-center flex items-center justify-center"
					>
						{item.icon}
					</a>
				))}
			</div>
		</div>
	);
};

export default BottomBar;
