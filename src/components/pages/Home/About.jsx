import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

const About = () => {
	const aboutitems = [
		"Medical Professionals",
		"Facilities and Equipment",
		"Emergency Care",
		"Medical Consulting",
		"Services Offered",
		"Specializations",
	];
	return (
		<div className="relative p-6 md:px-32 lg:px-32 flex flex-col lg:flex-row justify-between items-start gap-30 py-32">
			<div className="relative w-full lg:w-1/2">
				<img
					src="/images/about_1_3.png"
					alt="about"
					className="h-[510px] object-cover w-full rounded-md"
				/>
				<div className="absolute bottom-0 -right-2 rounded-lg rounded-tl-[30%] text-center p-5 flex flex-col gap-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.25)] z-10 w-[70%] lg:w-[40%]">
					<h3 className="font-bold text-2xl">Dr. Esita Javed</h3>
					<p className="text-lg text-gray-500">
						Mention the languages <br /> in which the staff.
					</p>
					<p className="text-green-500 font-bold text-xl">★ ★ ★ ★ ★</p>
					<div className="flex gap-2 items-center justify-center text-sm">
						<FaPhoneAlt className="text-green-500 font-bold" size={20} />
						<p className="text-xl font-semibold"> +163 564 78965</p>
					</div>
				</div>
			</div>

			<div className="w-full lg:w-1/2 space-y-9 mt-6 md:mt-0">
				<p className="font-medium text-lg text-green-700">ABOUT US COMPANY</p>
				<h3 className="font-bold text-4xl">
					Affordable Health Care <br /> Solutions
				</h3>
				<p className="text-gray-700 text-xl">
					A brief statement outlining the purpose and mission of the clinic.
					This can <br /> the commitment to patient care, community health, and
					any <br /> specifical goals for our values.
				</p>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
					{aboutitems.map((item, key) => {
						return (
							<p
								key={key}
								className="font-semibold flex items-center gap-2 text-xl"
							>
								<img
									src="/images/about_icon.png"
									alt="heart"
									className="w-6 h-auto"
								/>
								{item}
							</p>
						);
					})}
				</div>

				<button className="bg-gradient-to-b from-green-600 to-green-100 text-black font-semibold rounded-full px-3 md:px-6 p-2 md:py-3 shadow-lg text-sm hover:from-green-700 hover:to-green-200">
					<a href="#">MORE ABOUT US</a>
				</button>
			</div>
		</div>
	);
};

export default About;
