import React, { useState } from "react";
import Subscribe from "./Subscribe";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { CiPhone } from "react-icons/ci";
import { DiCelluloid } from "react-icons/di";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { GrFormSchedule } from "react-icons/gr";
import BottomBar from "./BottomBar";

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

	const div_2 = [
		"About Us",
		"Terms of Use",
		"Our Services",
		"Help & FAQs",
		"Blog",
		"Privacy policy",
		"Contact Us",
	];

	const div_3 = [
		"Cardiology Care",
		"Urgent Care",
		"Orthopedic Care",
		"Diagnosis department",
		"Gastroenterology",
		"Therapy department",
		"Dental service",
	];

	const div_4 = [
		{
			image: "/images/checkup.png",
			des: "How Business Is Taking Over & What to Do About It",
			date: "21 Jun, 2024",
		},
		{
			image: "/images/research.png",
			des: "Health vs. Wealth Navigate Business in Medicine",
			date: "22 Jun, 2024",
		},
	];

	const [arrowState, setArrowState] = useState({});
	const [arrowState2, setArrowState2] = useState({});

	const handleClick = (key) => {
		setArrowState((prevState) => ({
			...prevState,
			[key]: !prevState[key],
		}));
	};

	const handleClick2 = (key) => {
		setArrowState2((prevState) => ({
			...prevState,
			[key]: !prevState[key],
		}));
	};

	return (
		<div className="bg-[url('/images/footer_bg.jpg')] bg-cover">
			<Subscribe />
			<div className="px-8 lg:px-32 py-16 lg:py-32 grid grid-cols-1 md:grid-cols-2 lg:flex gap-8 lg:gap-16 lg:items-end">
				<div className="space-y-3 w-full">
					<p className="text-gray-400">
						Subscribe to our newsletter today to receive the latest news
						administrate cost-effective for tactical data.
					</p>
					{div_1.map((item, key) => (
						<div key={key} className="flex items-center gap-2 text-gray-400">
							{item.icon}
							<p>{item.content}</p>
						</div>
					))}
				</div>

				<div className="space-y-10 w-full">
					<div className="space-y-5">
						<h3 className="text-white text-2xl lg:text-3xl font-semibold">
							Quick Links
						</h3>
						<div className="h-[1px] w-full bg-gradient-to-r from-[#04CE78] to-transparent mt-1"></div>
					</div>
					<div className="space-y-2 mt-2">
						{div_2.map((item, key) => (
							<p
								key={key}
								className="text-gray-400 text-lg cursor-pointer flex items-center"
								onClick={() => handleClick(key)}
							>
								<span>
									{arrowState[key] ? (
										<MdKeyboardArrowDown />
									) : (
										<MdKeyboardArrowRight />
									)}
								</span>
								{item}
							</p>
						))}
					</div>
				</div>

				<div className="space-y-10 w-full">
					<div className="space-y-5">
						<h3 className="text-white text-2xl lg:text-3xl font-semibold">
							Popular Service
						</h3>
						<div className="h-[1px] w-full bg-gradient-to-r from-[#04CE78] to-transparent mt-1"></div>
					</div>
					<div className="space-y-2 mt-2">
						{div_3.map((item, key) => (
							<p
								key={key}
								className="text-gray-400 text-lg cursor-pointer flex items-center"
								onClick={() => handleClick2(key)}
							>
								<span>
									{arrowState2[key] ? (
										<MdKeyboardArrowDown />
									) : (
										<MdKeyboardArrowRight />
									)}
								</span>
								{item}
							</p>
						))}
					</div>
				</div>

				<div className="space-y-12 w-full">
					<div className="space-y-5">
						<h3 className="text-white text-2xl lg:text-3xl font-semibold">
							Recent Posts
						</h3>
						<div className="h-[1px] w-full bg-gradient-to-r from-[#04CE78] to-transparent mt-1"></div>
					</div>
					{div_4.map((item, key) => (
						<div key={key} className="flex gap-5 items-center">
							<img
								src={item.image}
								alt="checkup"
								className="h-16 w-16 lg:h-22 lg:w-22"
							/>
							<div className="space-y-3 w-full">
								<p className="text-white font-bold text-sm lg:text-md">
									{item.des}
								</p>
								<div className="flex gap-1 text-gray-500 items-center">
									<GrFormSchedule color="#04CE78" />
									{item.date}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
			<BottomBar />
		</div>
	);
};

export default Footer;
