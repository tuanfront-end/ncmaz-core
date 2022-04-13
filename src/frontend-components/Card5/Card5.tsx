import React, { FC } from "react";
import CategoryBadgeList from "../CategoryBadgeList/CategoryBadgeList";
import NcImage from "../NcImage/NcImage";
import PostCardDropdownShare from "../PostCardDropdownShare/PostCardDropdownShare";
import PostCardLikeAndComment from "../PostCardLikeAndComment/PostCardLikeAndComment";
import PostTypeFeaturedIcon from "../PostTypeFeaturedIcon/PostTypeFeaturedIcon";
import PostCardMeta from "../PostCardMeta/PostCardMeta";
import PostCardLikeAction from "../PostCardLikeAction/PostCardLikeAction";
import CardAuthor2 from "../CardAuthor2/CardAuthor2";

const Card5 = ({
	className = "[ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ] ",
	post,
}) => {
	const { author, title, link, id, date, categories, ncPostMetaData } = post;
	return (
		<div
			className={`nc-Card5 relative p-5 group ${className}`}
			data-nc-id="Card5"
			data-nc-post-id={id}
		>
			<a href={link} className="absolute inset-0 rounded-lg"></a>

			<div className="flex flex-col">
				<CategoryBadgeList categories={categories} />
				<h2
					className="block text-base font-semibold text-neutral-800 dark:text-neutral-300 my-4"
					title={title}
				>
					<a href={link} className="line-clamp-2" title={title}>
						{title}
					</a>
				</h2>
				<CardAuthor2
					className="relative mt-auto"
					readingTimeShortcode={ncPostMetaData.readingTimeShortcode}
					author={author}
					date={date}
				/>
			</div>
		</div>
	);
};

export default Card5;
