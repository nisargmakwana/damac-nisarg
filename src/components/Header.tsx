import { Poppins } from "next/font/google";
const poppins = Poppins({
	weight: ["400", "500", "700"],
	subsets: ["latin"],
	display: "swap",
});

function Header() {
	return (
		<header className="justify-self-start flex flex-col gap-[0.8rem] md:gap-[4rem] text-[#FCFCFC]  max-w-[31.975rem] md:max-w-[49.886rem] md:h-[21.7rem]">
			<div className="flex flex-col gap-[1.9rem]">
				<h1 className="font-[500] text-[3.7rem] leading-[4.6rem] md:text-[4.8rem] md:leading-[6.24rem]">
					HARBOUR LIGHTS DE{" "}
					<span className="text-[3.7rem] text-primary">GRESOGONO</span>
				</h1>
				<p
					className={`${poppins.className} font-bold text-[1.4rem] leading-[2.2rem] md:text-[2.5rem] md:leading-[3.3rem] `}>
					1, 2 & 3 Bedrooms Seaside Apartments in Dubai Maritime City
				</p>
			</div>
			<div className="flex flex-col gap-[0.5rem] md:gap-[1rem] leading-[1.5rem] text-[ #E7EBEF]">
				<div
					className={`${poppins.className} font-[400] text-[1.1rem] md:text-[1.4rem] bg-[rgba(0,0,0,0.26)] w-[30.5rem] flex items-center`}>
					<span className="inline-block w-[0.3rem] h-[3.8rem] bg-primary mr-[1rem]"></span>
					<p className="inline-block  ">
						Rental Returns of{" "}
						<span className="font-[600] text-[1.3rem] md:text-[1.6rem] ">
							UPTO 11%**
						</span>
					</p>
				</div>
				<div
					className={`${poppins.className} font-[400] text-[1.1rem] md:text-[1.4rem] bg-[rgba(0,0,0,0.26)] w-[30.5rem] flex items-center`}>
					<span className="inline-block w-[0.3rem] h-[3.8rem] bg-primary mr-[1rem]"></span>
					<p className="inline-block  ">
						Capital Appreciation of{" "}
						<span className="font-[600] text-[1.3rem] md:text-[1.6rem] ">
							UPTO 32%**
						</span>
					</p>
				</div>
			</div>
		</header>
	);
}

export default Header;
