"use client";
import { Poppins } from "next/font/google";
import { useWindowWidth } from "@/hooks/WindowDimensions";
const poppins = Poppins({
	weight: ["400", "500", "700"],
	subsets: ["latin"],
	display: "swap",
});

const Navigation: React.FC = function () {
	const width = useWindowWidth();

	if (width === null) {
		return null; // Handle initial state when windowWidth is not yet available
	}
	return (
		<nav className="flex justify-between ">
			<img
				src="/img/logo.png"
				alt=""
				className="max-w-[11.2rem] h-[1.5rem] md:max-w-[16.485rem] md:h-[2.086rem] mt-[4.61rem] md:mt-[5.757rem]  "
			/>
			<div>
				{width > 768 ? (
					<button
						className={` mt-[4.6rem] text-[1.3rem] text-primary hover:text-[#5dc4ff] hover:backdrop-blur-[1.25rem] leading-[1.95rem] h-[4.8rem] py-[1.2rem] px-[4.4rem] border-2 border-primary rounded-[0.5rem] ${poppins.className} font-bold`}>
						ENQUIRE NOW
					</button>
				) : (
					<button>
						<img
							src="/img/smallBtn.png"
							alt="enquire now"
							className="max-w-[2.4rem] mt-[4.61rem]"
						/>
					</button>
				)}
			</div>
		</nav>
	);
};

export default Navigation;
