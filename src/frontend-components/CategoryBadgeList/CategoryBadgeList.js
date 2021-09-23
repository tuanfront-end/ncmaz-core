import React, { FC } from "react";
import Badge from "../Badge/Badge";

const CategoryBadgeList = ({ className = "", itemClass = "", categories }) => {
	return (
		<div
			className={`nc-CategoryBadgeList flow-root `}
			data-nc-id="CategoryBadgeList"
		>
			<div className={`flex flex-wrap space-x-2 -my-1 ${className}`}>
				{categories.edges.map((item, index) => (
					<Badge
						className={`relative my-1 ${itemClass}`}
						key={index}
						name={item.node.name}
						href={item.node.link}
					/>
				))}
			</div>
		</div>
	);
};

export default CategoryBadgeList;
