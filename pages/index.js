import React from "react";
import { PageWrapper } from "../components/PageWrapper";
import { FeaturesSection } from "../components/FeaturesSection";
import { Alerts } from "../components/Alerts";

const Hero = () => {
	return (
		<div className='grid items-center p-4 text-700 text-left my-auto bg-neutral-900/70 bg-blend-overlay bg-[url("/bg-img-03.jpg")] bg-center bg-cover  h-[50vh] min-h-[250px]'>
			<div className='text-center'>
				<h1 className='text-900 font-bold text-3xl mb-3'>
					TORNADO <span className='text-red-500'>ACTION</span>
				</h1>
				<div className='text-sm flex items-center justify-evenly'>
					<p>Warnings.</p>
					<p>Watches.</p>
					<p>Real-Time.</p>
				</div>
			</div>
		</div>
	);
};

const HomeScreen = () => {
	return (
		<PageWrapper>
			<Hero />
			{/* <FeaturesSection /> */}
			<Alerts />
		</PageWrapper>
	);
};

export default HomeScreen;
