import React, { FC } from "react";
import CategoryBadgeList from "../CategoryBadgeList/CategoryBadgeList";
import NcImage from "../NcImage/NcImage";
import PostCardDropdownShare from "../PostCardDropdownShare/PostCardDropdownShare";
import PostCardLikeAndComment from "../PostCardLikeAndComment/PostCardLikeAndComment";
import PostTypeFeaturedIcon from "../PostTypeFeaturedIcon/PostTypeFeaturedIcon";
import PostCardMeta from "../PostCardMeta/PostCardMeta";
import PostCardLikeAction from "../PostCardLikeAction/PostCardLikeAction";
import CardAuthor2 from "../CardAuthor2/CardAuthor2";

const Card6 = ({ className = "h-full", post, isSkeleton }) => {
	const { title, link, featuredImage, categories, postFormats } = post;

	return (
		<div
			className={`nc-Card6 relative flex group flex-col-reverse sm:flex-row sm:items-center p-4  [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ] ${className}`}
			data-nc-id="Card6"
		>
			<a href={link} className="absolute inset-0 z-0"></a>
			<div className="flex flex-col flex-grow">
				<div className="space-y-3 mb-4">
					<CategoryBadgeList categories={categories} />
					<h2 className={`block font-semibold text-base`}>
						<a href={link} className="line-clamp-2" title={title}>
							{title}
						</a>
					</h2>
					<PostCardMeta meta={{ ...post }} />
				</div>
				<div className="flex items-center flex-wrap justify-between mt-auto">
					<PostCardLikeAndComment className="relative" postData={post} />
					<PostCardDropdownShare />
				</div>
			</div>

			<a
				href={link}
				className={`block relative flex-shrink-0 w-full sm:w-40 h-40 sm:h-full sm:ml-5 rounded-2xl overflow-hidden mb-5 sm:mb-0 `}
			>
				<NcImage
					containerClassName="absolute inset-0"
					className="object-cover w-full h-full"
					src={featuredImage?.node.sourceUrl}
				/>
				<span className="absolute bottom-1 left-1">
					<PostTypeFeaturedIcon
						wrapSize="h-7 w-7"
						iconSize="h-4 w-4"
						postType={postFormats.edges[0]?.node.slug}
					/>
				</span>
			</a>
		</div>
	);
};

export default Card6;
