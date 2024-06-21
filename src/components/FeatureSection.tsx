import React from "react";

function FeatureSection() {
	return (
		<section className="bg-[#F4F9FF] md:h-[17.782rem]">
			<div className="grid grid-cols-2 gap-[1rem] gap-y-[5rem] w-[30.6rem] pt-[3.6rem] md:flex md:h-[12.4rem] md:gap-[16rem] md:max-w-[102.1rem] place-content-center mx-auto md:pt-[2.69rem]">
				<img
					src="/img/feature1.png"
					alt="feature 1 of Harbour Lights De Gresogono"
				/>
				<img
					src="/img/feature2.png"
					alt="feature 2 of Harbour Lights De Gresogono"
				/>
				<img
					src="/img/feature3.png"
					alt="feature 3 of Harbour Lights De Gresogono"
				/>
				<img
					src="/img/feature4.png"
					alt="feature 4 of Harbour Lights De Gresogono"
				/>
			</div>
		</section>
	);
}

export default FeatureSection;
