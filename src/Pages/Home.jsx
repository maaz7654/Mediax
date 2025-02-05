import React from "react";
import TopBar from "../components/pages/Home/TopBar";
import Navbar from "../components/shared/Navbar";
import HeroSection from "../components/pages/Home/HeroSection";
import About from "../components/pages/Home/About";
import Services from "../components/pages/Home/Services";
import WelcomeSection from "../components/pages/Home/WelcomeSection";

const Home = () => {
	return (
		<div>
			<TopBar />
			<Navbar />
			<HeroSection />
			<About />
			<Services />
			{/* <WelcomeSection /> */}
		</div>
	);
};

export default Home;
