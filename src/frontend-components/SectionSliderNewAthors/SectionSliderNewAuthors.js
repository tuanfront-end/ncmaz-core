import React, { FC, useEffect } from "react";
import Glide from "@glidejs/glide";
import Heading from "../Heading/Heading";
import CardAuthorBox2 from "../CardAuthorBox2/CardAuthorBox2";
import NextPrev from "../NextPrev/NextPrev";
import CardAuthorBox from "../CardAuthorBox/CardAuthorBox";

const SectionSliderNewAuthors = ({
	blockLayoutStyle,
	uniqueClass,
	heading,
	subHeading,
	className = "",
	authors,
	perView = 5,
	userCardName = "card1",
}) => {
	const UNIQUE_CLASS = "glide_" + uniqueClass;

	useEffect(() => {
		new Glide(`.${UNIQUE_CLASS}`, {
			perView: perView,
			gap: 32,
			bound: true,
			breakpoints: {
				1280: {
					perView: perView - 1,
				},
				1023: {
					gap: 24,
					perView: 3,
				},
				767: {
					gap: 20,
					perView: 2,
				},
				639: {
					gap: 20,
					perView: 2,
				},
				500: {
					gap: 20,
					perView: 1,
				},
			},
		}).mount();
	}, [authors, perView]);

	const isLayout2 = blockLayoutStyle === "layout-2";

	const renderCard = (node) => {
		switch (userCardName) {
			case "card1":
				return (
					<CardAuthorBox
						className={!isLayout2 ? "" : "hover:!shadow-none"}
						author={node}
					/>
				);
			case "card2":
				return (
					<CardAuthorBox2
						className={!isLayout2 ? "" : "hover:!shadow-none"}
						author={node}
					/>
				);
			default:
				return (
					<CardAuthorBox2
						className={!isLayout2 ? "" : "hover:!shadow-none"}
						author={node}
					/>
				);
		}
	};

	return (
		<div className={`nc-SectionSliderNewAuthors ${className}`}>
			<div className={`${UNIQUE_CLASS}`}>
				<Heading
					isCenter={!isLayout2}
					desc={subHeading}
					hasNextPrev={isLayout2}
				>
					{heading}
				</Heading>
				<div className="glide__track" data-glide-el="track">
					<ul className="glide__slides">
						{authors.map((item, index) => (
							<li key={index} className="glide__slide pb-12 md:pb-16">
								{renderCard(item.node)}
							</li>
						))}
					</ul>
				</div>
				{!isLayout2 && (
					<NextPrev
						btnClassName="w-12 h-12"
						containerClassName="justify-center"
					/>
				)}
			</div>
		</div>
	);
};

export default SectionSliderNewAuthors;
