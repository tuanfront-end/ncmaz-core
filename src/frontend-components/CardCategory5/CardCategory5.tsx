import React, { FC } from "react";
import Badge from "../Badge/Badge";

const CardCategory5 = ({ className = "", taxonomyNode }) => {
	const {
		count = 0,
		name,
		link,
		ncTaxonomyMeta,
		categoryId,
		id,
	} = taxonomyNode;
	const { featuredImage } = ncTaxonomyMeta;

	return (
		<div
			className={`nc-CardCategory5 relative block group ${className}`}
			data-nc-id="CardCategory5"
		>
			<div
				className={`flex-shrink-0 relative w-full aspect-w-7 aspect-h-7 sm:aspect-h-5 h-0 rounded-2xl sm:rounded-3xl overflow-hidden group`}
			>
				<div className="bg-gray-300">
					{featuredImage?.sourceUrl && (
						<img
							src={featuredImage?.sourceUrl}
							className="object-cover !w-full !h-full rounded-2xl"
						/>
					)}
				</div>
				<span className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-opacity"></span>
			</div>
			<Badge
				className="absolute top-3 right-3"
				name={
					<div>
						{count || 0}
						<i className="ml-3 las la-arrow-right"></i>
					</div>
				}
			/>
			<div className="absolute inset-0 flex items-center justify-center">
				<h2
					className={`!text-base !font-medium !px-4 !py-2 sm:!px-6 sm:!py-3 !bg-white !text-neutral-900 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-full border-2 border-white border-opacity-60`}
				>
					<span className="line-clamp-1"> {name}</span>
				</h2>
			</div>
		</div>
	);
};

export default CardCategory5;
