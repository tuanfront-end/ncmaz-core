import React from "react";
import CardCategory1 from "../CardCategory1/CardCategory1";
import CardCategory2 from "../CardCategory2/CardCategory2";
import CardCategory3 from "../CardCategory3/CardCategory3";
import CardCategory4 from "../CardCategory4/CardCategory4";
import CardCategory5 from "../CardCategory5/CardCategory5";
import Heading from "../Heading/Heading";

const SectionGridCategoryBox = ({
	categories,
	categoryCardType = "card2",
	headingCenter = true,
	className = "",
	gridClass = "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5",
	heading = "",
	subHeading = "",
}) => {
	let CardComponentName = CardCategory2;
	switch (categoryCardType) {
		case "card1":
			CardComponentName = CardCategory1;
			break;
		case "card2":
			CardComponentName = CardCategory2;
			break;
		case "card3":
			CardComponentName = CardCategory3;
			break;
		case "card4":
			CardComponentName = CardCategory4;
			break;
		case "card5":
			CardComponentName = CardCategory5;
			break;

		default:
			CardComponentName = CardCategory2;
	}

	return (
		<div className={`nc-SectionGridCategoryBox relative ${className}`}>
			<Heading desc={subHeading} isCenter={headingCenter}>
				{heading}
			</Heading>
			<div className={`grid gap-6 md:gap-8 ${gridClass}`}>
				{categories.map((item, i) => (
					<CardComponentName
						index={i < 3 ? `#${i + 1}` : undefined}
						key={i}
						taxonomyNode={item.node}
					/>
				))}
			</div>
		</div>
	);
};

export default SectionGridCategoryBox;
