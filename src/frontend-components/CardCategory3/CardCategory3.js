import React, { FC } from "react";

const CardCategory3 = ({ className = "", taxonomyNode }) => {
	const { count, name, link, ncTaxonomyMeta, categoryId, id } = taxonomyNode;
	const { color, featuredImage } = ncTaxonomyMeta;

	return (
		<div className={`nc-CardCategory3 flex flex-col ${className}`}>
			<div
				className={`flex-shrink-0 relative w-full aspect-w-5 aspect-h-4 sm:aspect-h-7 h-0 rounded-2xl overflow-hidden group`}
			>
				<div className="bg-gray-400">
					{featuredImage?.sourceUrl && (
						<img
							src={featuredImage?.sourceUrl}
							className="object-cover !w-full !h-full rounded-2xl"
						/>
					)}
				</div>
				<span className="opacity-0 group-hover:opacity-100 absolute inset-0 bg-black bg-opacity-10 transition-opacity"></span>
			</div>
			<div className="mt-4 truncate">
				<h2
					className={`!text-base sm:!text-lg !text-neutral-900  !font-semibold truncate`}
				>
					{name}
				</h2>
				<span className={`block mt-2 text-sm text-neutral-6000 `}>
					{count || 0} Articles
				</span>
			</div>
		</div>
	);
};

export default CardCategory3;
