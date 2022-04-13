import React, { FC } from "react";
import CardCategory1 from "../CardCategory1/CardCategory1";
import Tag from "../Tag/Tag";
import WidgetHeading1 from "../WidgetHeading1/WidgetHeading1";

const WidgetCategories = ({
	className = "bg-neutral-100 dark:bg-neutral-800",
	heading = "",
	termCardName = "card1",
	categories,
}) => {
	const renderCard = (term, index) => {
		switch (termCardName) {
			case "card1":
				return (
					<CardCategory1
						className="p-4 xl:p-5 hover:bg-neutral-200 dark:hover:bg-neutral-700"
						key={index}
						taxonomyNode={term.node}
						size="normal"
					/>
				);
			case "tag-card":
				return <Tag className="mr-2 mb-2" key={index} tagNode={term.node} />;

			default:
				return null;
		}
	};

	return (
		<div
			className={`nc-WidgetCategories rounded-3xl  overflow-hidden ${className}`}
			data-nc-id="WidgetCategories"
		>
			<WidgetHeading1 title={heading} />
			<div className="flow-root">
				<div
					className={`flex  ${
						termCardName === "card1"
							? "flex-col divide-y divide-neutral-200 dark:divide-neutral-700"
							: "flex-wrap p-4 xl:p-5"
					}`}
				>
					{categories.map(renderCard)}
				</div>
			</div>
		</div>
	);
};

export default WidgetCategories;
