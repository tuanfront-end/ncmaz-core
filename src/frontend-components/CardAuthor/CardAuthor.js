import React, { FC } from "react";
import Avatar from "../Avatar/Avatar";

const CardAuthor = ({ className = "", author }) => {
	if (!author) {
		return null;
	}

	const { avatar, id, name, ncUserMeta, url, uri, userId, username } = author;
	const { color, featuredImage, ncBio } = ncUserMeta;

	return (
		<a
			href={url + uri}
			className={`nc-CardAuthor flex items-center ${className}`}
			data-nc-id="CardAuthor"
		>
			<Avatar
				sizeClass="h-10 w-10 text-base"
				containerClassName="flex-shrink-0 mr-4"
				radius="rounded-full"
				imgUrl={avatar?.url}
				userName={username}
			/>
			<div>
				<h2
					className={`text-base text-neutral-900 dark:text-neutral-100 font-semibold`}
				>
					{name}
				</h2>
				<span
					className={`block mt-[2px] text-xs text-neutral-500 dark:text-neutral-400`}
				>
					{ncBio}
				</span>
			</div>
		</a>
	);
};

export default CardAuthor;
