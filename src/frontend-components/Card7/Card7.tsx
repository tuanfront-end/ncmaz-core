import React, { FC } from "react";
import CategoryBadgeList from "../CategoryBadgeList/CategoryBadgeList";
import NcImage from "../NcImage/NcImage";
import PostCardDropdownShare from "../PostCardDropdownShare/PostCardDropdownShare";
import PostCardLikeAndComment from "../PostCardLikeAndComment/PostCardLikeAndComment";
import PostTypeFeaturedIcon from "../PostTypeFeaturedIcon/PostTypeFeaturedIcon";
import PostCardMeta from "../PostCardMeta/PostCardMeta";
import PostCardLikeAction from "../PostCardLikeAction/PostCardLikeAction";
import CardAuthor2 from "../CardAuthor2/CardAuthor2";

const Card7 = ({
	className = "h-full",
	ratio = "aspect-w-5 aspect-h-5 sm:aspect-h-7",
	post,
	hoverClass = "",
	isSkeleton,
}) => {
	const {
		title,
		link,
		featuredImage,
		categories,
		author,
		date,
		postFormats,
		ncPostMetaData,
	} = post;

	const postType = postFormats.edges[0]?.node.slug;
	return (
		<div
			className={`nc-Card7 relative flex flex-col group rounded-3xl overflow-hidden ${hoverClass} ${className}`}
			data-nc-id="Card7"
		>
			{ncPostMetaData.favoriteButtonShortcode && (
				<PostCardLikeAction
					className="absolute top-3 right-3 z-10"
					favoriteButtonShortcode={ncPostMetaData.favoriteButtonShortcode}
				/>
			)}
			<a href={link} className={`flex items-start relative w-full ${ratio}`}>
				<NcImage
					containerClassName="absolute inset-0 overflow-hidden"
					className="object-cover w-full h-full rounded-3xl "
					src={featuredImage?.node.sourceUrl}
				/>
				<PostTypeFeaturedIcon
					className="absolute top-3 left-3"
					postType={postType}
					wrapSize="w-7 h-7"
					iconSize="w-4 h-4"
				/>
				<span className="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity"></span>
			</a>

			<div className="absolute bottom-3 inset-x-3 p-4 bg-white dark:bg-neutral-900 flex flex-col flex-grow rounded-3xl group-hover:shadow-2xl transition-shadow">
				<a href={link} className="absolute inset-0"></a>
				<div className="space-y-2.5 mb-3">
					<CategoryBadgeList categories={categories} />
					<h2 className="block text-base font-semibold text-neutral-900 dark:text-neutral-100 ">
						<a href={link} className="line-clamp-2" title={title}>
							{title}
						</a>
					</h2>
				</div>
				<CardAuthor2
					hoverReadingTime={false}
					readingTimeShortcode={ncPostMetaData.readingTimeShortcode}
					date={date}
					author={author}
				/>
			</div>
		</div>
	);
};

export default Card7;
