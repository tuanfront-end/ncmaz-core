import React, { FC, useState } from "react";
import CardLarge1 from "../CardLarge1/CardLarge1";

const SectionLargeSlider = ({ activePosts, isLoading }) => {
	const [indexActive, setIndexActive] = useState(0);

	const handleClickNext = () => {
		setIndexActive((state) => {
			if (state >= activePosts.length - 1) {
				return 0;
			}
			return state + 1;
		});
	};

	const handleClickPrev = () => {
		setIndexActive((state) => {
			if (state === 0) {
				return activePosts.length - 1;
			}
			return state - 1;
		});
	};

	return (
		<div>
			{activePosts.map((item, index) => (
				<CardLarge1
					key={index}
					isSkeleton={isLoading}
					isShowing={indexActive === index}
					onClickNext={handleClickNext}
					onClickPrev={handleClickPrev}
					post={item.node}
				/>
			))}
		</div>
	);
};

export default SectionLargeSlider;
