import { Poppins } from "next/font/google";
import RevealingSection from "./RevealingSection";
const poppins = Poppins({
	weight: ["400", "500", "700"],
	subsets: ["latin"],
	display: "swap",
});
function Footer() {
	return (
		<RevealingSection>
			<footer className="mt-[6.8rem] w-full h-[7.85rem] md:h-[10.8rem] bg-[#091D41] grid">
				<p
					className={`${poppins.className} font-[400] text-[1.4rem] leading-[2rem] place-content-center text-center text-[#FCFCFC]`}>
					© DAMAC Copyright 2024 All rights reserved.
				</p>
			</footer>
		</RevealingSection>
	);
}

export default Footer;
