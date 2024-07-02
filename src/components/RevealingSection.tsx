"use client";
import { useEffect, useRef, useState, PropsWithChildren } from "react";

const RevealingSection: React.FC<PropsWithChildren<{}>> = ({ children }) => {
	const sectionRef = useRef<HTMLDivElement>(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setIsVisible(true);
						observer.unobserve(entry.target);
					}
				});
			},
			{
				threshold: 0.3, // Adjust as needed
			}
		);
		const sRefCurrent = sectionRef.current;
		if (sRefCurrent) {
			observer.observe(sRefCurrent);
		}

		return () => {
			if (sRefCurrent) {
				observer.unobserve(sRefCurrent);
			}
		};
	}, []);

	return (
		<div
			ref={sectionRef}
			className={`transition-opacity duration-1000 ${
				isVisible ? "opacity-100" : "opacity-0"
			}`}>
			{children}
		</div>
	);
};

export default RevealingSection;
