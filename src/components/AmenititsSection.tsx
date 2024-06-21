import { Poppins } from "next/font/google";
import RevealingSection from "./RevealingSection";

const poppins = Poppins({
	weight: ["400", "500", "700"],
	subsets: ["latin"],
	display: "swap",
});

function AmenititsSection() {
	return (
		<section className="mt-[4.3rem] md:mt-[5.7rem]">
			<RevealingSection>
				<img
					src="/img/harbour-lights.png"
					alt="Harbour Lights"
					className="mx-auto"
				/>
			</RevealingSection>
			<RevealingSection>
				<div className="h-fit md:h-[14.4rem] max-w-[30.186rem] md:max-w-[77.7rem] flex flex-col gap-[1.1rem] mt-[2.5rem] mx-auto">
					<p className="font-[500] text-[3.1rem] md:text-[3.6rem] leading-[4.7rem] text-center text-[#00357B] ">
						FEATURES & AMENITIES
					</p>
					<p
						className={`${poppins.className} font-[400] text-[1.6rem] leading-[2.4rem] text-center text-[#343434]`}>
						Harbour Lights beautifully honours maritime voyages while embracing
						an opulent seafront lifestyle. Its maritime-inspired amenities
						provide an unmatched seaside experience, offering a life of
						tranquility and bliss.
					</p>
				</div>
			</RevealingSection>
			<RevealingSection>
				<div className="grid grid-cols-2 max-w-[34.7rem] mx-auto mt-[2.5rem] h-fit gap-[3rem] md:grid md:grid-cols-4 md:gap-[7rem] md:max-w-[111.8rem] md:mx-auto md:mt-[2.5rem]">
					<figure className="relative h-[17.184rem] md:w-[22.7rem] md:h-[27.1rem]">
						<img
							src="/img/ellipse.png"
							alt="Image 1"
							className="absolute left-[12px] -z-20 w-[12.394rem] md:w-[20rem]"
						/>
						<img
							src="/img/amenity1.png"
							alt="Image 2"
							className="absolute top-[6px] left-[15px] w-[11.694rem] md:w-[19.3rem] -z-10"
						/>
						<div className="absolute w-[14.568rem] h-[10.277rem] md:w-[22.7rem] md:h-[15.7rem] rounded-[2rem]  top-[40%] -z-30 bg-[#FCFCFC] shadow-custom ">
							<p
								className={`${poppins.className} mt-[5.5rem] md:mt-[10rem] mx-auto font-[600] text-[1.4rem] leading-[2rem] text-center text-[#00357B] w-[5.8rem] h-[4rem]`}>
								Floating Pools
							</p>
						</div>
					</figure>
					<figure className="relative md:w-[22.7rem] h-[17.184rem] md:h-[27.1rem]">
						<img
							src="/img/ellipse.png"
							alt="Image 1"
							className="absolute left-[12px] -z-20 w-[12.394rem] md:w-[20rem]"
						/>
						<img
							src="/img/amenity2.png"
							alt="Image 2"
							className="absolute top-[6px] left-[15px] w-[11.694rem] md:w-[19.3rem] -z-10"
						/>
						<div className="absolute w-[14.568rem] h-[10.277rem] md:w-[22.7rem] md:h-[15.7rem] rounded-[2rem] top-[40%] md:top-[40%] -z-30 bg-[#FCFCFC] shadow-custom ">
							<p
								className={`${poppins.className} mt-[5.5rem] md:mt-[10rem] mx-auto font-[600] text-[1.4rem] leading-[2rem] text-center text-[#00357B] w-[15rem] h-[4rem]`}>
								Spacious Cabins Like Rooms
							</p>
						</div>
					</figure>
					<figure className="relative h-[19.184rem] md:w-[22.7rem] md:h-[27.1rem]">
						<img
							src="/img/ellipse.png"
							alt="Image 1"
							className="absolute left-[12px] -z-20 w-[12.394rem] md:w-[20rem]"
						/>
						<img
							src="/img/amenity3.png"
							alt="Image 3"
							className="absolute top-[6px] left-[15px] w-[11.694rem] md:w-[19.3rem] -z-10"
						/>
						<div className="absolute w-[14.568rem] h-[10.277rem] md:w-[22.7rem] md:h-[15.7rem] rounded-[2rem]  top-[40%] -z-30 bg-[#FCFCFC] shadow-custom ">
							<p
								className={`${poppins.className} mt-[5.5rem] md:mt-[10rem] mx-auto font-[600] text-[1.4rem] leading-[2rem] text-center text-[#00357B] w-[15rem] h-[4rem]`}>
								Sea Facing Swimming Pools
							</p>
						</div>
					</figure>
					<figure className="relative h-[19.184rem] md:w-[22.7rem] md:h-[27.1rem]">
						<img
							src="/img/ellipse.png"
							alt="Image 1"
							className="absolute left-[12px] -z-20 w-[12.394rem] md:w-[20rem]"
						/>
						<img
							src="/img/amenity4.png"
							alt="Image 4"
							className="absolute top-[6px] left-[15px] w-[11.694rem] md:w-[19.3rem] -z-10"
						/>
						<div className="absolute w-[14.568rem] h-[10.277rem] md:w-[22.7rem] md:h-[15.7rem] rounded-[2rem]  top-[40%] -z-30 bg-[#FCFCFC] shadow-custom">
							<p
								className={`${poppins.className} mt-[5.5rem] md:mt-[10rem] mx-auto font-[600] text-[1.4rem] leading-[2rem] text-center text-[#00357B] w-[15rem] h-[4rem]`}>
								Gymnasium & Fitness
							</p>
						</div>
					</figure>
				</div>
			</RevealingSection>
			<p
				className={`${poppins.className} md:text-[1rem] md:leading-[4.7rem] tracking-[0.3] text-right w-[34.7rem] md:w-[111.8rem] mx-auto  `}>
				*T&Cs apply | ** Based on similar branded projects in the last 2 years.{" "}
				<span className="underline">Source 1</span> |{" "}
				<span className="underline"> Source 2</span>
			</p>
		</section>
	);
}

export default AmenititsSection;
