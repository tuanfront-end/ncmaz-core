import React, { FC } from "react";
import CategoryBadgeList from "../CategoryBadgeList/CategoryBadgeList";
import NcImage from "../NcImage/NcImage";
import PostCardDropdownShare from "../PostCardDropdownShare/PostCardDropdownShare";
import PostCardLikeAndComment from "../PostCardLikeAndComment/PostCardLikeAndComment";
import PostTypeFeaturedIcon from "../PostTypeFeaturedIcon/PostTypeFeaturedIcon";
import PostCardMeta from "../PostCardMeta/PostCardMeta";
import PostCardLikeAction from "../PostCardLikeAction/PostCardLikeAction";
import CardAuthor2 from "../CardAuthor2/CardAuthor2";

const Card4 = ({ className = "h-full", post, isSkeleton }) => {
	const {
		title,
		link,
		featuredImage,
		categories,
		author,
		date,
		ncPostMetaData,
	} = post;

	return (
		<div
			className={`nc-Card4 relative flex flex-col group [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ] ${className}`}
			data-nc-id="Card4"
		>
			<span className="block flex-shrink-0 relative w-full aspect-w-16 aspect-h-9 rounded-t-xl overflow-hidden">
				<NcImage
					containerClassName="absolute inset-0"
					src={featuredImage?.node.sourceUrl}
				/>
				<div>
					{ncPostMetaData.favoriteButtonShortcode && (
						<PostCardLikeAction
							className="absolute right-2 top-2 z-[1]"
							favoriteButtonShortcode={ncPostMetaData.favoriteButtonShortcode}
						/>
					)}
				</div>
			</span>

			<a href={link} className="absolute inset-0"></a>

			<div className="p-4 flex flex-col flex-grow">
				<div className="space-y-2.5 mb-4">
					<CategoryBadgeList categories={categories} />
					<h2 className="nc-card-title block text-base font-semibold text-neutral-900 dark:text-neutral-100 ">
						<a href={link} className="line-clamp-2" title={title}>
							{title}
						</a>
					</h2>
				</div>
				<div className="flex items-end justify-between mt-auto">
					<CardAuthor2
						readingTimeShortcode={ncPostMetaData.readingTimeShortcode}
						hoverReadingTime={false}
						date={date}
						author={author}
					/>
				</div>
			</div>
		</div>
	);
};

export default Card4;
