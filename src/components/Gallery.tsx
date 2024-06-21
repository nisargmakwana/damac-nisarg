import { Poppins } from "next/font/google";
import RevealingSection from "./RevealingSection";
const poppins = Poppins({
	weight: ["400", "500", "700"],
	subsets: ["latin"],
	display: "swap",
});
function Gallery() {
	return (
		<section className="max-w-[112.2rem] mx-auto mt-[5rem] md:mt-[2rem]">
			<RevealingSection>
				<div
					className={`${poppins.className} text-center h-[4.9rem] font-[700] text-[1.3rem] leading-[1.95rem] w-full md:text-right`}>
					<button className="text-[#FCFCFC] w-[15.3rem] h-[4.8rem] border bg-[#00357B] rounded-[0.5rem] tracking-widest mr-[1.1rem] hover:border-[0.2rem] hover:border-black">
						EXTERIORS
					</button>
					<button className="text-[#00357B] w-[15.3rem] h-[4.8rem] border bg-[#FCFCFC] rounded-[0.5rem] tracking-widest hover:border-[0.2rem] hover:border-black">
						INTERIORS
					</button>
				</div>
			</RevealingSection>
			<RevealingSection>
				<div className="mt-[2.8rem] grid grid-cols-4 max-w-[36.1rem] md:max-w-full mx-auto gap-[1rem] md:gap-[2.3805rem]">
					<img
						src="./img/gallery1.png"
						alt="gallery image 1"
						className="col-span-4 max-w-[36.1rem] h-[22.2rem] md:max-w-[112.2rem] md:h-[49.4rem]"
					/>

					<img
						src="./img/gallery2.png"
						alt="gallery image 2"
						className="md:max-w-[26.505rem] md:h-[16.8rem]"
					/>
					<img
						src="./img/gallery3.png"
						alt="gallery image 3"
						className="md:max-w-[26.505rem] md:h-[16.8rem]"
					/>
					<img
						src="./img/gallery4.png"
						alt="gallery image 4"
						className="md:max-w-[26.505rem] md:h-[16.8rem]"
					/>
					<img
						src="./img/gallery5.png"
						alt="gallery image 5"
						className="md:max-w-[26.505rem] md:h-[16.8rem]"
					/>
				</div>
			</RevealingSection>
		</section>
	);
}

export default Gallery;
