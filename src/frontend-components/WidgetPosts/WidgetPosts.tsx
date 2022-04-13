import React, { FC } from "react";
import Card3Small from "../Card3Small/Card3Small";
import WidgetHeading1 from "../WidgetHeading1/WidgetHeading1";

const WidgetPosts = ({
	className = "bg-neutral-100 dark:bg-neutral-800",
	postEdges = [],
	heading = "",
}) => {
	return (
		<div
			className={`nc-WidgetPosts rounded-3xl overflow-hidden ${className}`}
			data-nc-id="WidgetPosts"
		>
			<WidgetHeading1 title={heading} />
			<div className="flex flex-col divide-y divide-neutral-200 dark:divide-neutral-700">
				{postEdges.map((post, index) => (
					<Card3Small
						className="p-4 xl:px-5 xl:py-6 hover:bg-neutral-200 dark:hover:bg-neutral-700"
						key={index}
						post={post.node}
					/>
				))}
			</div>
		</div>
	);
};

export default WidgetPosts;
