import React, { FC } from "react";

const Tag = ({ className = "", tagNode, hideCount = false }) => {
	const { count, name, link } = tagNode;

	return (
		<a
			className={`nc-Tag inline-block bg-white text-sm text-neutral-600 py-2 px-3 rounded-lg border border-neutral-100 md:py-2.5 md:px-4 dark:bg-neutral-700 dark:border-neutral-700 hover:border-neutral-200 dark:hover:border-neutral-6000 ${className}`}
			data-nc-id="Tag"
			href={link}
		>
			{`${name}`}
			{!hideCount && <span className="text-xs font-normal"> ({count})</span>}
		</a>
	);
};

export default Tag;
