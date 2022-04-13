import React from "react";
import Heading from "../Heading/Heading";
import CardAuthorBox2 from "../CardAuthorBox2/CardAuthorBox2";
import NextPrev from "../NextPrev/NextPrev";
import CardAuthorBox from "../CardAuthorBox/CardAuthorBox";
import useSliderGlidejs from "../../hooks/useSliderGlidejs";

const SectionSliderNewAuthors = ({
	blockLayoutStyle,
	heading,
	subHeading,
	className = "",
	authors,
	userCardName = "card1",
	itemPerView,
	sliderStartAt,
	sliderAutoplayTime,
	sliderHoverpause,
	sliderAnimationDuration,
	sliderRewind,
}) => {
	const sliderRef = React.useRef(null);

	useSliderGlidejs({
		sliderRef,
		itemPerView,
		sliderStartAt,
		sliderAutoplayTime,
		sliderHoverpause,
		sliderAnimationDuration,
		sliderRewind,
		listData: authors,
	});

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
		<div className={`nc-SectionSliderNewAuthors ${className}`} ref={sliderRef}>
			<div>
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
