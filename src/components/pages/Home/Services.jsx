import React from "react";

const Services = () => {
	const items = [
		{
			icon: "/images/internal.png",
			desc: "Internal Medicine",
			count: "30+ Doctors",
		},
		{
			icon: "/images/dental.png",
			desc: "Dental Care",
			count: "20+ Doctors",
		},
		{
			icon: "/images/urology.png",
			desc: "Urology Care",
			count: "20+ Doctors",
		},
		{
			icon: "/images/neuro.png",
			desc: "Neurology Care",
			count: "10+ Doctors",
		},
		{
			icon: "/images/gynae.png",
			desc: "Gynaecologists",
			count: "30+ Doctors",
		},
		{
			icon: "/images/opthal.png",
			desc: "Opthalmology",
			count: "24+ Doctors",
		},
		{
			icon: "/images/ortho.png",
			desc: "Orthopedics",
			count: "24+ Doctors",
		},
		{
			icon: "/images/cardio.png",
			desc: "Cardiology",
			count: "20+ Doctors",
		},
	];

	return (
		<div className="flex flex-col text-center p-6 md:p-10 lg:px-32 lg:py-48 space-y-5 bg-[url('/images/services_bg.png')] bg-cover bg-[#F5F7FA]">
			<p className="font-semibold text-xl text-[#04CE78]">Our Services</p>
			<h3 className="font-bold text-4xl">
				Our Mediax <br /> specialties <br /> Technical service
			</h3>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 lg:px-32">
				{items.map((item, key) => {
					return (
						<div
							key={key}
							className="flex flex-col items-center justify-between bg-white/70 p-8 rounded-xl h-full"
						>
							<div className="p-3 bg-[#E6E9EE] rounded-full w-16 h-16 flex justify-center">
								<img src={item.icon} alt="internal" className="w-16 h-auto" />
							</div>
							<h3 className="font-bold text-lg md:text-xl sm:text-2xl lg:text-xl xl:text-2xl">
								{item.desc}
							</h3>
							<p className="text-gray-400 text-lg">{item.count}</p>
							<button className="bg-gradient-to-b from-blue-300 to-blue-100 text-black font-semibold rounded-full px-3 md:px-6 p-2 md:py-3 shadow-lg text-sm hover:from-blue-400 hover:to-blue-200">
								<a href="#">READ MORE</a>
							</button>
						</div>
					);
				})}
			</div>
			<div className="flex items-center mt-10 justify-center">
				<div className="hidden md:flex w-full bg-black h-[1px]"></div>
				<div className="rounded-full w-full md:max-w-[300px] lg:max-w-none border p-2">
					<p className="text-sm text-gray-500 text-center">
						You Get Our 20+ More services...{" "}
						<a href="#" className="text-green-500">
							EXPLORE ALL SERVICES
						</a>
					</p>
				</div>
				<div className="hidden md:flex w-full bg-black h-[1px]"></div>
			</div>
		</div>
	);
};

export default Services;
