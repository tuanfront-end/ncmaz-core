import React, { FC } from "react";
import Badge from "../Badge/Badge";

const CardCategory2 = ({ className = "", taxonomyNode, index }) => {
	const { count, name, link, ncTaxonomyMeta, categoryId, id } = taxonomyNode;
	const { color, featuredImage } = ncTaxonomyMeta;

	return (
		<div
			className={`nc-CardCategory2 relative flex flex-col items-center justify-center text-center px-3 py-5 sm:p-6  [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ]  ${className}`}
			data-nc-id="CardCategory2"
		>
			{index && (
				<Badge
					// color={color}
					name={index}
					className="absolute -top-2 sm:top-3 left-3"
				/>
			)}
			<div
				className={`flex-shrink-0 w-20 h-20 rounded-full overflow-hidden bg-gray-400`}
			>
				{featuredImage?.sourceUrl && (
					<img
						src={featuredImage?.sourceUrl}
						className="!w-full !h-full object-cover"
						alt=""
					/>
				)}
			</div>
			<div className="mt-3 ">
				<h2 className={`!m-0 !text-base sm:!text-lg !font-semibold `}>
					<span className="line-clamp-1">{name}</span>
				</h2>
				<span
					className={`block mt-[2px] text-sm text-neutral-500 dark:text-neutral-400`}
				>
					{count || 0} Articles
				</span>
			</div>
		</div>
	);
};

export default CardCategory2;
