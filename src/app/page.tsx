import "./globals.css";
import Hero from "@/components/Hero";
import FeatureSection from "@/components/FeatureSection";
import AmenititsSection from "@/components/AmenititsSection";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import RevealingSection from "@/components/RevealingSection";
export default function Home() {
	return (
		<>
			<RevealingSection>
				<Hero />
			</RevealingSection>
			<RevealingSection>
				<FeatureSection />
			</RevealingSection>
			<AmenititsSection />
			<Gallery />
			<Footer />
		</>
	);
}
