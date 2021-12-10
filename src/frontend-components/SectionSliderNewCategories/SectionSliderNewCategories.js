import React, { FC, useEffect } from "react";
import Glide from "@glidejs/glide";
import CardCategory1 from "../CardCategory1/CardCategory1";
import Heading from "../Heading/Heading";
import CardCategory2 from "../CardCategory2/CardCategory2";
import CardCategory3 from "../CardCategory3/CardCategory3";
import CardCategory4 from "../CardCategory4/CardCategory4";
import CardCategory5 from "../CardCategory5/CardCategory5";

const SectionSliderNewCategories = ({
	uniqueClass,
	heading,
	subHeading,
	className = "",
	itemClassName = "",
	categories,
	itemPerRow = 5,
	categoryCardType = "card2",
}) => {
	const UNIQUE_CLASS = "glide_" + uniqueClass;

	useEffect(() => {
		new Glide(`.${UNIQUE_CLASS}`, {
			direction:
				document.querySelector("html")?.getAttribute("dir") === "rtl"
					? "rtl"
					: "ltr",
			perView: itemPerRow,
			gap: 32,
			bound: true,
			breakpoints: {
				1280: {
					perView: itemPerRow - 1,
				},
				1024: {
					gap: 24,
					perView: itemPerRow - 2,
				},
				768: {
					gap: 20,
					perView: itemPerRow - 2,
				},
				640: {
					gap: 20,
					perView: itemPerRow - 3,
				},
				500: {
					gap: 20,
					perView: 1,
				},
			},
		}).mount();
	}, [categories, itemPerRow, categoryCardType]);

	const renderCard = (item, index) => {
		const topIndex = index < 3 ? `#${index + 1}` : undefined;
		switch (categoryCardType) {
			case "card2":
				return <CardCategory2 taxonomyNode={item.node} index={topIndex} />;
			case "card3":
				return <CardCategory3 taxonomyNode={item.node} />;
			case "card4":
				return <CardCategory4 taxonomyNode={item.node} index={topIndex} />;
			case "card5":
				return <CardCategory5 taxonomyNode={item.node} />;
			default:
				return null;
		}
	};

	return (
		<div className={`nc-SectionSliderNewCategories ${className}`}>
			<div className={`${UNIQUE_CLASS} flow-root`}>
				<Heading desc={subHeading} hasNextPrev>
					{heading}
				</Heading>
				<div className="glide__track" data-glide-el="track">
					<ul className="glide__slides !p-0 !m-0">
						{categories.map((item, index) => (
							<li
								key={index}
								className={`!list-none glide__slide ${itemClassName}`}
							>
								{renderCard(item, index)}
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default SectionSliderNewCategories;
