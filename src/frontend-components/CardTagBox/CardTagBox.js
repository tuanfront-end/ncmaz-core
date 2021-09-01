import React, { FC } from "react";

const CardTagBox = ({ className = "", taxonomyNode }) => {
	const { count, name, link, ncTaxonomyMeta, categoryId, id } = taxonomyNode;
	return (
		<a
			href={link}
			className={`nc-CardTagBox relative flex items-center p-3 sm:p-6 [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ]  ${className}`}
			data-nc-id="CardTagBox"
		>
			<div className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center bg-neutral-100 dark:bg-neutral-800">
				<i className="las la-hashtag text-3xl"></i>
			</div>
			<div className="ml-4 flex-grow overflow-hidden">
				<h2 className="text-base font-medium">
					<span className="line-clamp-1">{name}</span>
				</h2>
				<span
					className={`block mt-1 text-sm text-neutral-500 dark:text-neutral-400`}
				>
					{count} Articles
				</span>
			</div>
		</a>
	);
};

export default CardTagBox;
