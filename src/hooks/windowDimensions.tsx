"use client";
import React, { useEffect, useState } from "react";

export function useWindowWidth(): number | null {
	const [windowWidth, setWindowWidth] = useState<number | null>(null);

	useEffect(() => {
		function handleResize() {
			setWindowWidth(window.innerWidth);
		}

		// Set initial window width
		handleResize();

		// Add event listener
		window.addEventListener("resize", handleResize);

		// Remove event listener on cleanup
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return windowWidth;
}
