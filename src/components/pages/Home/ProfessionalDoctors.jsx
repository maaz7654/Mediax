import React from "react";
import Stats from "./Stats";

const ProfessionalDoctors = () => {
	const doctors = [
		{
			image: "/images/dr1.png",
			name: "Dr. Douglas Lyphe",
			speciality: "Physiotherapist",
		},
		{
			image: "/images/dr2.png",
			name: "Dr. Wisteria Ravenc",
			speciality: "Cardiologist",
		},
		{
			image: "/images/dr3.png",
			name: "Dr. Benjamin Evalent",
			speciality: "Dentist",
		},
		{
			image: "/images/dr4.png",
			name: "Dr. Rishita Rosei",
			speciality: "Neurologist",
		},
	];

	return (
		<div className="relative bg-[url('/images/professional_bg.jpg')] bg-cover px-4 lg:px-16 pt-16 mt-32 flex flex-col justify-center items-center">
			<Stats />
			<div className="text-center space-y-3 md:translate-y-1/3">
				<h3 className="text-[#04CE78] text-lg md:text-xl">EXPERT DOCTORS</h3>
				<p className="font-semibold text-2xl md:text-3xl lg:text-4xl mb-10">
					Meet Our Professional Doctors
				</p>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
					{doctors.map((item, key) => (
						<div
							key={key}
							className="text-center flex flex-col items-center p-4"
						>
							<img
								src={item.image}
								alt={item.name}
								className="rounded-3xl h-64 w-full object-cover"
							/>
							<p className="font-bold text-lg mt-4">{item.name}</p>
							<p className="text-gray-500 text-md">{item.speciality}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ProfessionalDoctors;
