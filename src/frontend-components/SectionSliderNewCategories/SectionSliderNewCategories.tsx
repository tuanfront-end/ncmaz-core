import React from "react";
import Heading from "../Heading/Heading";
import CardCategory2 from "../CardCategory2/CardCategory2";
import CardCategory3 from "../CardCategory3/CardCategory3";
import CardCategory4 from "../CardCategory4/CardCategory4";
import CardCategory5 from "../CardCategory5/CardCategory5";
import useSliderGlidejs from "../../hooks/useSliderGlidejs";

const SectionSliderNewCategories = ({
	heading,
	subHeading,
	className = "",
	itemClassName = "",
	categories,
	categoryCardType = "card2",
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
		listData: categories,
	});

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
		<div
			className={`nc-SectionSliderNewCategories ${className}`}
			ref={sliderRef}
		>
			<div className={` flow-root`}>
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
