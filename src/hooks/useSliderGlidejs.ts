import React, { useEffect } from "react";
import Glide from "@glidejs/glide";

export interface UseSliderGlidejsProps {
	itemPerView: number;
	sliderStartAt: number;
	sliderAutoplayTime: number;
	sliderHoverpause: boolean;
	sliderAnimationDuration: number;
	sliderRewind: boolean;
	sliderRef: React.MutableRefObject<any>;
	listData: any[];
	breakpoints?: Record<number, Glide.Options>;
}

export default function useSliderGlidejs({
	itemPerView,
	sliderAnimationDuration,
	sliderAutoplayTime,
	sliderHoverpause,
	sliderRewind,
	sliderStartAt,
	sliderRef,
	listData,
	breakpoints,
}: UseSliderGlidejsProps) {
	const options: Glide.Options = {
		// @ts-ignore
		direction:
			document.querySelector("html")?.getAttribute("dir") === "rtl"
				? "rtl"
				: "ltr",
		perView: itemPerView,
		gap: 32,
		bound: true,
		autoplay: sliderAutoplayTime || false,
		startAt: sliderStartAt,
		hoverpause: sliderHoverpause,
		animationDuration: sliderAnimationDuration || undefined,
		rewind: sliderRewind || true,
		breakpoints: breakpoints || {
			1280: {
				perView: itemPerView - 1,
			},
			1023: {
				perView: itemPerView - 2 || 1,
				gap: 24,
			},
			767: {
				perView: itemPerView - 2 || 1,
				gap: 20,
			},
			639: {
				perView: 1,
				gap: 20,
			},
		},
	};

	useEffect(() => {
		if (!sliderRef.current || !listData || !listData.length) {
			return;
		}

		const slider = new Glide(sliderRef.current, options);
		slider.mount();
		// @ts-ignore
		return () => slider.destroy();
	}, [
		sliderAnimationDuration,
		sliderAutoplayTime,
		sliderHoverpause,
		sliderRewind,
		sliderStartAt,
		sliderRef,
		itemPerView,
		listData,
		breakpoints,
	]);
}
