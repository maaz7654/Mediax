import React from "react";

const ChooseUs = () => {
	const items = [
		{
			step: "01",
			title: "Compassionate & Expert Care",
			des: "Our team of dedicated healthcare professionals combines years of experience with a genuine commitment to providing.",
		},
		{
			step: "02",
			title: "Patient-Centered Approach",
			des: "Your health and well-being are our top priorities. We take the time to listen to your concerns, answer your questions.",
		},
		{
			step: "03",
			title: "Personalized Treatment Plans",
			des: "We understand that every patient is unique, and their healthcare needs may vary. That's why we create individualized treatment.",
		},
	];

	return (
		<div className="flex flex-col md:flex-row justify-center py-16 px-5 md:px-16 lg:px-32 gap-10">
			<div className="space-y-5 md:flex-1">
				<p className="font-semibold text-sm text-[#04CE78]">WHY CHOOSE US</p>
				<h2 className="font-bold text-3xl text-black">
					We Are Always Open For <br /> Your Health Services
				</h2>
				<div className="space-y-10">
					{items.map((item, key) => (
						<div key={key} className="flex items-start space-x-4">
							<div className="relative flex flex-col items-center text-[#04CE78]">
								<div className="rounded-full border-[1px] h-12 w-12 p-3 bg-white z-10 flex items-center justify-center">
									<p className="text-lg font-bold">{item.step}</p>
								</div>

								{key !== items.length - 1 && (
									<div className="absolute top-12 w-[1px] bg-[#04CE78] h-[160px] md:h-[200px] lg:h-[160px]"></div>
								)}
							</div>

							<div className="space-y-5">
								<h3 className="text-2xl font-semibold">{item.title}</h3>
								<p className="text-gray-500 text-md">{item.des}</p>
								{key !== items.length - 1 && (
									<div className="w-full h-[1px] bg-gray-300"></div>
								)}
							</div>
						</div>
					))}
				</div>
			</div>

			<div className="pt-8 md:pt-16 md:flex-1">
				<img
					src="/images/doctor_scrub.jpg"
					alt="scrubbed doctor"
					className="rounded-lg w-full max-w-[500px] h-full max-h-[500px] object-cover"
				/>
			</div>
		</div>
	);
};

export default ChooseUs;
