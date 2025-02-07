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
		<div className="relative bg-cover bg-gray-700 px-4 lg:px-32 pt-32 mt-20 flex flex-col justify-center items-center">
			<Stats />
			<div className="text-center space-y-3 transform">
				<h3 className="text-[#04CE78]">EXPERT DOCTORS</h3>
				<p className="font-semibold text-2xl">Meet Our Professional Doctors</p>

				<div className="relative w-full max-w-screen-xl">
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
						{doctors.map((item, key) => (
							<div
								key={key}
								className="text-center bg-white p-4 rounded-3xl shadow-lg"
							>
								<img src={item.image} alt="dr" className="rounded-3xl w-full" />
								<p className="font-bold text-lg mt-2">{item.name}</p>
								<p className="text-gray-500 text-md">{item.speciality}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfessionalDoctors;
