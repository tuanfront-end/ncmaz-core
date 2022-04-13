import React, { FC } from "react";

const CardCategory1 = ({ className = "", size = "normal", taxonomyNode }) => {
	const { count, name, link, ncTaxonomyMeta, categoryId, id } = taxonomyNode;
	const { color, featuredImage } = ncTaxonomyMeta;

	return (
		<div
			className={`nc-CardCategory1  flex items-center ${className}`}
			data-nc-id="CardCategory1"
		>
			<div
				className={`flex-shrink-0 ${
					size === "large" ? "w-20 h-20" : "w-12 h-12"
				} rounded-lg mr-4 overflow-hidden object-cover bg-gray-400`}
			>
				{featuredImage?.sourceUrl && (
					<img
						className="w-full h-full object-cover bg-red-400"
						src={featuredImage?.sourceUrl}
					/>
				)}
			</div>
			<div>
				<h2
					className={`${
						size === "large" ? "text-lg" : "text-base"
					} nc-card-title text-neutral-900 dark:text-neutral-100 font-semibold`}
				>
					{name}
				</h2>
				<span
					className={`${
						size === "large" ? "text-sm" : "text-xs"
					} block mt-[2px] text-neutral-500 dark:text-neutral-400`}
				>
					{count || 0} Articles
				</span>
			</div>
		</div>
	);
};

export default CardCategory1;
