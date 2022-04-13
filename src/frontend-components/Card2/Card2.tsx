import React, { FC } from "react";
import NcImage from "../NcImage/NcImage";
import PostTypeFeaturedIcon from "../PostTypeFeaturedIcon/PostTypeFeaturedIcon";
import CategoryBadgeList from "../CategoryBadgeList/CategoryBadgeList";
import CardAuthor2 from "../CardAuthor2/CardAuthor2";
import PostCardLikeAndComment from "../PostCardLikeAndComment/PostCardLikeAndComment";
import PostCardDropdownShare from "../PostCardDropdownShare/PostCardDropdownShare";

const Card2 = ({ className = "h-full", size = "normal", post, isSkeleton }) => {
	const {
		featuredImage,
		title,
		link,
		date,
		categories,
		excerpt,
		author,
		postFormats,
		ncPostMetaData,
	} = post;

	return (
		<div
			className={`nc-Card2 group relative flex flex-col  [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ] overflow-hidden ${className}`}
			data-nc-id="Card2"
		>
			<span className="block flex-shrink-0 flex-grow relative w-full h-0 pt-[75%] sm:pt-[55%] rounded-xl sm:rounded-b-none overflow-hidden">
				<NcImage
					containerClassName="absolute inset-0"
					src={featuredImage?.node.sourceUrl}
				/>

				<PostTypeFeaturedIcon
					className="absolute bottom-2 left-2"
					postType={postFormats.edges[0]?.node.slug}
					wrapSize="w-8 h-8"
					iconSize="w-4 h-4"
				/>
			</span>

			<a href={link} className="absolute inset-0" />

			<div className="p-4 sm:p-5 flex flex-col">
				<div className="space-y-3">
					<CategoryBadgeList categories={categories} />
					<h2
						className={`nc-card-title block font-semibold text-neutral-900 dark:text-neutral-100 transition-colors ${
							size === "large" ? "text-lg sm:text-2xl" : "text-base"
						}`}
					>
						<a href={link} className="line-clamp-2" title={title}>
							{title}
						</a>
					</h2>
					<div
						className="block text-neutral-500 dark:text-neutral-400 text-sm line-clamp-2"
						dangerouslySetInnerHTML={{ __html: excerpt }}
					></div>
				</div>

				<CardAuthor2
					className="relative my-4"
					date={date}
					author={author}
					readingTimeShortcode={ncPostMetaData.readingTimeShortcode}
					hoverReadingTime={false}
				/>
				<div className="flex items-center justify-between mt-auto">
					<PostCardLikeAndComment className="relative" postData={post} />

					<PostCardDropdownShare />
				</div>
			</div>
		</div>
	);
};

export default Card2;
