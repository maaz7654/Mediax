import React from "react";

const WelcomeSection = () => {
	return (
		<div className="relative bg-[url('/images/welcome_bg.jpeg')] bg-cover flex justify-start pt-8 px-8 md:px-32 overflow-visible min-h-[400px] h-[50vh]">
			<div className="space-y-5 max-w-lg z-10">
				<h3 className="text-3xl md:text-4xl font-bold text-white">
					We’re welcoming new patients <br /> and can’t wait to meet you!
				</h3>
				<p className="text-white">
					A brief statement outlining the purpose and mission of the clinic.
					This can include the
					<br /> commitment to patient care, community health, and any specific
					goals or values. Specify the <br /> types of medical services
					provided.
				</p>
				<div className="flex gap-6 py-3">
					<button className="bg-gradient-to-b from-green-600 to-green-100 text-black font-semibold rounded-full px-3 md:px-6 p-2 md:py-3 shadow-lg text-sm hover:from-green-700 hover:to-green-200">
						<a href="#">BOOK APPOINTMENT</a>
					</button>
					<button className="bg-gradient-to-b from-blue-300 to-blue-200 text-black font-semibold rounded-full px-3 md:px-6 p-2 md:py-3 shadow-lg text-sm hover:from-blue-400 hover:to-blue-300">
						<a href="#">GET FREE CONSULTING</a>
					</button>
				</div>
			</div>

			<div className="absolute bottom-0 left-[5%] hidden md:left-170 lg:block">
				<img
					src="/images/group_doctors.png"
					alt="group-doctors"
					className="w-[60vw] md:w-[40vw] lg:w-[41vw] max-w-full h-auto object-contain"
					style={{ height: "auto" }}
				/>
			</div>
		</div>
	);
};

export default WelcomeSection;
