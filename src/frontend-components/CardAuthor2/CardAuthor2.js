import React, { FC } from "react";
import ncFormatDate from "../../utils/formatDate";
import Avatar from "../Avatar/Avatar";

const CardAuthor2 = ({
	className = "",
	author,
	readingTimeShortcode = "",
	date,
	hoverReadingTime = true,
}) => {
	if (!author) {
		return null;
	}

	const { node } = author;
	return (
		<a
			href={node.url + node.uri}
			className={`nc-CardAuthor2 relative inline-flex items-center ${className}`}
			data-nc-id="CardAuthor2"
		>
			<Avatar
				sizeClass="h-10 w-10 text-base"
				containerClassName="flex-shrink-0 mr-3"
				radius="rounded-full"
				imgUrl={node.avatar?.url}
				userName={node.username}
			/>
			<div>
				<h2
					className={`text-sm text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium`}
				>
					{node.name}
				</h2>
				<span
					className={`flex items-center mt-1 text-xs text-neutral-500 dark:text-neutral-400`}
				>
					<span>{ncFormatDate(date)}</span>
					{readingTimeShortcode && (
						<>
							<span
								className={`hidden lg:inline mx-1 transition-opacity ${
									hoverReadingTime ? "opacity-0 group-hover:opacity-100" : ""
								}`}
							>
								·
							</span>
							<span
								className={`hidden lg:inline transition-opacity ${
									hoverReadingTime ? "opacity-0 group-hover:opacity-100" : ""
								}`}
								dangerouslySetInnerHTML={{ __html: readingTimeShortcode }}
							/>
						</>
					)}
				</span>
			</div>
		</a>
	);
};

export default CardAuthor2;
