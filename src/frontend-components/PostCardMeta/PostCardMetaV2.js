import React, { FC } from "react";
import ncFormatDate from "../../utils/formatDate";
import Avatar from "../Avatar/Avatar";

const PostCardMetaV2 = ({
	className = "leading-none",
	meta,
	hiddenAvatar = false,
	size = "normal",
}) => {
	let { date, author, title } = meta;
	author = author?.node;

	return (
		<div
			className={`nc-PostCardMetaV2 inline-flex items-center flex-wrap text-neutral-800 dark:text-neutral-200 ${
				size === "normal" ? "text-xs" : "text-sm"
			} ${className}`}
			data-nc-id="PostCardMetaV2"
		>
			<a href="#" className="relative flex items-center space-x-2">
				{!hiddenAvatar && (
					<Avatar
						radius="rounded-full"
						sizeClass={
							size === "normal" ? "h-9 w-9 text-base" : "h-10 w-10 text-xl"
						}
						imgUrl={author?.avatar?.url}
						userName={author?.name}
					/>
				)}
				<div>
					<h2
						className={`block font-semibold ${
							size === "normal" ? "text-base" : "text-lg"
						}`}
					>
						<span className="line-clamp-1">{title}</span>
					</h2>

					<div className="flex mt-1.5">
						<span className="block text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium">
							{author?.name}
						</span>
						<span className="text-neutral-500 dark:text-neutral-400 mx-[6px] font-medium">
							·
						</span>
						<span className="text-neutral-500 dark:text-neutral-400 font-normal">
							{ncFormatDate(date)}
						</span>
					</div>
				</div>
			</a>
		</div>
	);
};

export default PostCardMetaV2;
