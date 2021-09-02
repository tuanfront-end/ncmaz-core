import React, { FC } from "react";
import CategoryBadgeList from "../CategoryBadgeList/CategoryBadgeList";
import NcImage from "../NcImage/NcImage";
import PostCardDropdownShare from "../PostCardDropdownShare/PostCardDropdownShare";
import PostCardLikeAndComment from "../PostCardLikeAndComment/PostCardLikeAndComment";
import PostTypeFeaturedIcon from "../PostTypeFeaturedIcon/PostTypeFeaturedIcon";
import PostCardMeta from "../PostCardMeta/PostCardMeta";
import PostCardMetaV2 from "../PostCardMeta/PostCardMetaV2";
import PostCardLikeAction from "../PostCardLikeAction/PostCardLikeAction";
import CardAuthor2 from "../CardAuthor2/CardAuthor2";
import ncFormatDate from "../../utils/formatDate";

const Card10V3 = ({
	className = "h-full",
	post,
	galleryType = 1,
	isSkeleton,
}) => {
	const {
		title,
		link,
		categories,
		postFormats,
		ncmazGalleryImgs,
		author,
		date,
		ncPostMetaData,
		featuredImage,
	} = post;

	return (
		<div
			className={`nc-Card10V3 group relative flex flex-col ${className}`}
			data-nc-id="Card10V3"
		>
			<div className="block group rounded-3xl flex-shrink-0 relative w-full aspect-w-16 aspect-h-16 sm:aspect-h-9 overflow-hidden">
				<div>
					<NcImage
						src={isSkeleton ? "." : featuredImage?.node.sourceUrl || "."}
					/>
				</div>

				<a
					href={link}
					className="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity"
				></a>
			</div>
			<div className="absolute top-3 inset-x-3 flex justify-between items-start space-x-4">
				<CategoryBadgeList categories={categories} />
				<PostCardDropdownShare />
			</div>

			<div className="space-y-2.5 mt-4 px-4">
				<h2 className="nc-card-title block sm:text-lg font-semibold text-neutral-900 dark:text-neutral-100 ">
					<a href={link} className="line-clamp-1" title={title}>
						{title}
					</a>
				</h2>
				<CardAuthor2
					className="mt-3"
					author={author}
					hoverReadingTime={false}
					date={date}
					readingTimeShortcode={ncPostMetaData.readingTimeShortcode}
				/>
			</div>
		</div>
	);
};

export default Card10V3;
