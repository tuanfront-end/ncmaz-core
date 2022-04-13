import React, { FC } from "react";
import Badge from "../Badge/Badge";

const CardCategory4 = ({ className = "", taxonomyNode, index }) => {
	const {
		count = 0,
		name,
		link,
		ncTaxonomyMeta,
		categoryId,
		id,
	} = taxonomyNode;
	const { featuredImage, color } = ncTaxonomyMeta;

	const getColorClass = () => {
		switch (color) {
			case "pink":
				return "bg-pink-500";
			case "red":
				return "bg-red-500";
			case "gray":
				return "bg-gray-500";
			case "green":
				return "bg-green-500";
			case "purple":
				return "bg-purple-500";
			case "indigo":
				return "bg-indigo-500";
			case "yellow":
				return "bg-yellow-500";
			case "blue":
				return "bg-blue-500";
			default:
				return "bg-pink-500";
		}
	};

	return (
		<div
			className={`nc-component nc-CardCategory4 flex flex-col ${className}`}
			data-nc-id="CardCategory4"
		>
			<div
				className={`flex-shrink-0 relative w-full aspect-w-7 aspect-h-5 h-0 rounded-3xl overflow-hidden z-0 group`}
			>
				<div className="bg-gray-300">
					{featuredImage?.sourceUrl && (
						<img
							src={featuredImage?.sourceUrl}
							className="object-cover !w-full !h-full rounded-2xl"
						/>
					)}
				</div>
				<div>
					{index && <Badge name={index} className="absolute top-3 left-3" />}
				</div>
				<span className="opacity-0 group-hover:opacity-100 absolute inset-0 bg-black bg-opacity-10 transition-opacity"></span>
			</div>

			<div className="flex items-center mt-5">
				<div
					className={`flex-shrink-0 w-10 h-10 ${getColorClass()} rounded-full`}
				></div>
				<div className="ml-3 truncate">
					<h2
						className={`text-base sm:text-lg text-neutral-900 font-medium truncate`}
					>
						{name}
					</h2>
					<span
						className={`block mt-1 text-sm text-neutral-6000 dark:text-neutral-400`}
					>
						{count || 0} Articles
					</span>
				</div>
			</div>
		</div>
	);
};

export default CardCategory4;
