import React from "react";

const HeroSection = () => {
	return (
		<div className="bg-[url('/images/background.jpeg')] bg-cover md:bg-stretch flex justify-center items-end pt-5 gap-16 px-10">
			<div className="flex flex-col gap-6 py-20">
				<p className="flex text-[#04CE78] gap-2">
					<span>
						<img src="/images/title_icon.svg" alt="icon" />
					</span>
					24/7 EMERGENCY SERVICE
				</p>
				<h2 className="text-5xl text-[#000D44]  font-bold space-y-2">
					Caring for{" "}
					<span className="relative inline-block text-[#04CE78] font-semibold">
						Health
						<svg
							className="absolute bottom-[-10px] left-0 w-full"
							viewBox="0 0 100 10"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M0,5 Q50,0 100,5"
								stroke="#04CE78"
								strokeWidth="2"
								fill="transparent"
							/>
						</svg>
					</span>{" "}
					<br />
					Caring for You
				</h2>
				<p className="text-gray-400">
					A brief statement outlining the purpose and mission of the clinic.
					This can include the <br />
					commitment to patient care, community health.
				</p>
				<div className="flex gap-6 py-3">
					<button className="bg-gradient-to-b from-green-600 to-green-100 text-black font-semibold rounded-full px-3 md:px-6 p-2 md:py-3 shadow-lg text-sm hover:from-green-700 hover:to-green-200">
						<a href="#">DISCOVER MORE</a>
					</button>
					<button className="bg-gradient-to-b from-blue-600 to-blue-100 text-black font-semibold rounded-full px-3 md:px-6 p-2 md:py-3 shadow-lg text-sm hover:from-blue-700 hover:to-blue-200">
						<a href="#">SEE ALL SERVICE</a>
					</button>
				</div>
			</div>
			<div>
				<img
					src="/images/doctor.png"
					alt="doctor"
					className="hidden md:flex h-[500px]"
				/>
			</div>
		</div>
	);
};

export default HeroSection;
