import React, { FC } from "react";
import CardAuthorBox from "../CardAuthorBox/CardAuthorBox";
import CardAuthorBox2 from "../CardAuthorBox2/CardAuthorBox2";
import Heading from "../Heading/Heading";

const SectionGridAuthorBox = ({
	className = "",
	userCardName,
	authors,
	gridClass = "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 ",
	heading = "",
	subHeading = "",
	blockLayoutStyle,
}) => {
	const renderCard = (author, index) => {
		switch (userCardName) {
			case "card1":
				return <CardAuthorBox key={index} author={author?.node} />;
			case "card2":
				return <CardAuthorBox2 key={index} author={author?.node} />;
			default:
				return <CardAuthorBox2 key={index} author={author?.node} />;
		}
	};

	return (
		<div
			className={`nc-SectionGridAuthorBox relative ${className}`}
			data-nc-id="SectionGridAuthorBox"
		>
			<Heading desc={subHeading} isCenter={blockLayoutStyle === "layout-1"}>
				{heading}
			</Heading>
			<div className={`grid gap-6 md:gap-8 ${gridClass}`}>
				{authors.map(renderCard)}
			</div>
		</div>
	);
};

export default SectionGridAuthorBox;
