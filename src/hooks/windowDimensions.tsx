"use client";
import React, { useEffect, useState } from "react";

function getWindowDimensions() {
	const { innerWidth: width, innerHeight: height } = window;
	return { width, height };
}

function WindowDimensions() {
	const [dimensions, setDimensions] = useState(
		typeof window !== "undefined"
			? getWindowDimensions()
			: { width: 0, height: 0 }
	);

	useEffect(() => {
		if (typeof window === "undefined") return;
		function handleResize() {
			setDimensions(getWindowDimensions());
		}

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return dimensions;
}

export default WindowDimensions;
