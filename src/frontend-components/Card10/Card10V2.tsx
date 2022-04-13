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

const Card10V2 = ({ className = "h-full", post, isSkeleton }) => {
	const { link, categories, ncPostMetaData, featuredImage } = post;

	return (
		<div
			className={`nc-Card10V2 relative flex flex-col ${className}`}
			data-nc-id="Card10V2"
		>
			<div className="block group rounded-3xl flex-shrink-0 relative w-full aspect-w-16 aspect-h-12 sm:aspect-h-9 overflow-hidden">
				<div className="bg-gray-300">
					<NcImage src={featuredImage?.node.sourceUrl} />
				</div>

				<a
					href={link}
					className="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 transition-opacity"
				></a>
			</div>
			<div className="absolute top-3 inset-x-3 flex justify-between items-start space-x-4">
				<CategoryBadgeList categories={categories} />
				<PostCardLikeAction
					favoriteButtonShortcode={ncPostMetaData.favoriteButtonShortcode || ""}
				/>
			</div>

			<div className="space-y-2.5 mt-4 px-4">
				<PostCardMetaV2 className="leading-none" meta={post} />
			</div>
		</div>
	);
};

export default Card10V2;
