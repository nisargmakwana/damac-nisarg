import React from "react";
import { Poppins } from "next/font/google";
const poppins = Poppins({
	weight: ["400", "500", "700"],
	subsets: ["latin"],
	display: "swap",
});

function OfferSection() {
	return (
		<div className="w-[30.6rem] h-[33.5rem] bg-[rgba(87,144,190,0.12)] backdrop-blur-[1.25rem] justify-self-end rounded-[1.4rem] mt-[2rem] md:mt-[0] ">
			<div className="flex flex-col w-[24.8rem] mx-auto text-[#FCFCFC]">
				<p
					className={`${poppins.className} font-[400] text-[1.3rem] leading-[2rem] mt-[3.3rem] tracking-[0.15em] `}>
					PRICING STARTS FROM
				</p>
				<h1 className="font-[500] text-[4.8rem] leading-[6.24rem] mt-[0.2rem]">
					$ 425,000
				</h1>
				<p className="font-[400] text-[2.4rem] leading-[3.557rem] mt-[1.5rem]">
					AED 1.3 Million
				</p>
				<button
					className={`${poppins.className} font-[700] text-[1.2rem] leading-[1.8rem] tracking-[3%] mt-[2.5rem] w-[24.8rem] h-[4.8rem] rounded-[0.5rem] py-[1.2rem] px-[4rem] bg-primary hover:text-primary hover:bg-[#FCFCFC] hover:border-[0.2rem] hover:border-black`}>
					GET A PRESENTATION
				</button>
			</div>
			<div className="w-[30.6rem] h-[0] border-[rgba(0,0,0,0.3)] border-t-[1px] mt-[3.05rem] "></div>
			<p
				className={`${poppins.className} w-[24.8rem] mx-auto font-[400] text-[1.3rem] text-[#98C5E8] mt-[1.35rem] place-content-center `}>
				Get an Expert’s Presentation of Real Estate in Dubai for Life and
				investment
			</p>
		</div>
	);
}

export default OfferSection;
