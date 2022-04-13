import React, { FC } from "react";
import CategoryBadgeList from "../CategoryBadgeList/CategoryBadgeList";
import NcImage from "../NcImage/NcImage";
import PostCardDropdownShare from "../PostCardDropdownShare/PostCardDropdownShare";
import PostCardLikeAndComment from "../PostCardLikeAndComment/PostCardLikeAndComment";
import PostTypeFeaturedIcon from "../PostTypeFeaturedIcon/PostTypeFeaturedIcon";
import PostCardMeta from "../PostCardMeta/PostCardMeta";
import PostCardLikeAction from "../PostCardLikeAction/PostCardLikeAction";
import CardAuthor2 from "../CardAuthor2/CardAuthor2";

const Card8 = ({ className = "h-full", post, isSkeleton }) => {
	const { title, link, featuredImage, excerpt, categories, postFormats } = post;

	return (
		<div
			className={`nc-Card8 group relative [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ] overflow-hidden ${className}`}
			data-nc-id="Card8"
		>
			<a
				href={link}
				className="block w-full h-0 pt-[100%] sm:pt-[55%] rounded-xl overflow-hidden"
			>
				<NcImage
					containerClassName="absolute inset-0"
					src={featuredImage?.node.sourceUrl}
				/>
				<PostTypeFeaturedIcon
					className="absolute top-4 left-4"
					postType={postFormats.edges[0]?.node.slug}
					wrapSize="w-8 h-8"
					iconSize="w-4 h-4"
				/>
			</a>
			<a
				href={link}
				className="absolute inset-x-0 bottom-0 top-1/3 bg-gradient-to-t from-neutral-900 "
			></a>
			<div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 flex flex-col">
				<a href={link} className="absolute inset-0" />
				<CategoryBadgeList categories={categories} />
				<h2
					className={`mt-3 relative block font-semibold text-neutral-50 text-lg sm:text-xl`}
				>
					<a href={link} className="line-clamp-2" title={title}>
						{title}
					</a>
				</h2>
				<div className="hidden sm:block mt-2">
					<span
						className="text-neutral-300 text-sm line-clamp-1"
						dangerouslySetInnerHTML={{ __html: excerpt }}
					></span>
				</div>
			</div>
		</div>
	);
};

export default Card8;
