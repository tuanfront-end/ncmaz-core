import React, { FC } from "react";
import Avatar from "../Avatar/Avatar";
import formatDate from "../../utils/formatDate";

const PostCardMeta = ({
	className = "leading-none",
	meta,
	hiddenAvatar = false,
	size = "normal",
}) => {
	let { date, author } = meta;

	author = author?.node;
	return (
		<div
			className={`nc-PostCardMeta inline-flex items-center  text-neutral-800 dark:text-neutral-200 truncate ${
				size === "normal" ? "text-xs" : "text-base"
			} ${className}`}
			data-nc-id="PostCardMeta"
		>
			<a
				href={author?.url + author?.uri}
				className="relative flex items-center space-x-2 truncate"
			>
				{!hiddenAvatar && (
					<Avatar
						radius="rounded-full"
						sizeClass={
							size === "normal" ? "h-7 w-7 text-sm" : "h-10 w-10 text-xl"
						}
						imgUrl={author?.avatar?.url}
						userName={author?.username}
					/>
				)}
				<span className="block text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium truncate py-1">
					{author?.name}
				</span>
			</a>
			<>
				<span className="text-neutral-500 dark:text-neutral-400 mx-[6px] font-medium">
					·
				</span>
				<span className="text-neutral-500 dark:text-neutral-400 font-normal flex-shrink-0">
					{formatDate(date)}
				</span>
			</>
		</div>
	);
};

export default PostCardMeta;
