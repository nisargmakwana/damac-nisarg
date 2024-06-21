import OfferSection from "./OfferSection";
import Header from "./Header";
import Navigation from "./Navigation";

export default function Hero() {
	return (
		<section className="bg-custom-bg bg-cover bg-center h-fit pb-[2rem] md:h-[65.8rem]">
			<div className="mx-auto max-w-[31.975rem] md:max-w-[112.2rem]  ">
				<Navigation />
				<div className="mt-[3.515rem] md:grid md:grid-cols-2 md:mt-[12.757rem]">
					<Header />
					<OfferSection />
				</div>
			</div>
		</section>
	);
}
