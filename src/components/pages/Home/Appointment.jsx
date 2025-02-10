import React from "react";

const Appointment = () => {
	const workingHour = [
		{ days: "Monday - Tuesday", time: "9am - 6pm" },
		{ days: "Wednesday - Thursday", time: "8am - 5pm" },
		{ days: "Friday", time: "7am - 10pm" },
		{ days: "Saturday", time: "10am - 7pm" },
		{ days: "Sunday", time: "Closed" },
	];

	return (
		<div className="px-6 md:px-16 lg:px-32 py-64 flex flex-col lg:flex-row justify-between items-center gap-8">
			<div className="absolute w-full lg:max-w-[250px] min-h-[500px] rounded-2xl border-4 border-gray-300 bg-transparent hidden lg:block -z-10"></div>

			<div className="bg-[#1F5FFF] text-white p-8  lg:max-w-sm rounded-2xl md:ml-25 md:h-[450px]">
				<h3 className="font-bold text-white text-2xl">Working Hours</h3>
				<p className="text-sm">
					Variations of passages are available without anything embarrassing.
				</p>
				<div className="space-y-5 mt-4">
					{workingHour.map((item, key) => (
						<div key={key}>
							<div className="flex justify-between">
								<p className="text-sm">{item.days}</p>
								<p className="text-sm">{item.time}</p>
							</div>
							{key !== workingHour.length - 1 && (
								<div className="h-[1px] bg-white opacity-40 mt-2"></div>
							)}
						</div>
					))}
				</div>
			</div>

			<div className="flex flex-col lg:flex-row gap-5 shadow-2xl rounded-2xl p-8 w-full">
				<div className="flex flex-col justify-around lg:gap-6 lg:p-3 w-full">
					<img
						src="/images/injection.png"
						alt="injection"
						className="w-full max-w-[300px] mx-auto lg:max-w-[600px]"
					/>
					<img
						src="/images/doctor_squad.png"
						alt="doctors squad"
						className="w-full max-w-[300px] mx-auto lg:max-w-[600px]"
					/>
				</div>

				<form className="space-y-3 w-full flex flex-col justify-between">
					<h3 className="font-bold text-3xl text-center">
						Make An Appointment
					</h3>

					<input
						type="text"
						placeholder="Your Name"
						className="w-full p-3 rounded-full bg-gray-100 outline-none"
					/>

					<input
						type="text"
						placeholder="Email Address"
						className="w-full p-3 rounded-full bg-gray-100 outline-none"
					/>

					<input
						type="tel"
						pattern="[0-9]{4}-[0-9]{7}"
						placeholder="Phone Number (e.g., 1234-5678901)"
						className="w-full p-3 rounded-full bg-gray-100 outline-none"
					/>

					<select
						name="department"
						id="department"
						className="w-full p-4 rounded-full bg-gray-100 outline-none"
					>
						<option value="" disabled selected className="text-gray-400">
							Choose Department
						</option>
						<option value="Neuro">Neurology</option>
						<option value="Opthal">Ophthalmology</option>
						<option value="Cardio">Cardiology</option>
					</select>

					<div className="flex gap-3">
						<input
							type="text"
							placeholder="Date"
							className="w-full p-3 rounded-full bg-gray-100 outline-none"
						/>

						<input
							type="text"
							placeholder="Time"
							className="w-full p-3 rounded-full bg-gray-100 outline-none"
						/>
					</div>

					<button className="bg-gradient-to-b from-green-600 to-green-100 text-black font-semibold rounded-full px-3 md:px-6 p-2 md:py-3 shadow-lg text-sm hover:from-green-700 hover:to-green-200">
						<a href="#">BOOK AN APPOINTMENT</a>
					</button>
				</form>
			</div>
		</div>
	);
};

export default Appointment;
