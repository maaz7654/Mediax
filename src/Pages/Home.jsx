import React from "react";
import Navbar from "../components/shared/Navbar";
import HeroSection from "../components/pages/Home/HeroSection";
import About from "../components/pages/Home/About";
import Services from "../components/pages/Home/Services";
import WelcomeSection from "../components/pages/Home/WelcomeSection";
import ChooseUs from "../components/pages/Home/ChooseUs";
import Stats from "../components/pages/Home/Stats";
import ProfessionalDoctors from "../components/pages/Home/ProfessionalDoctors";
import Appointment from "../components/pages/Home/Appointment";
import Footer from "../components/pages/Home/Footer";
import TopBar from "../components/pages/Home/TopBar";

const Home = () => {
	return (
		<div className="w-full">
			<TopBar />
			<Navbar />
			<HeroSection />
			<About />
			<Services />
			<WelcomeSection />
			<ChooseUs />
			{/* <Stats /> */}
			<ProfessionalDoctors />
			<Appointment />
			<Footer />
		</div>
	);
};

export default Home;
