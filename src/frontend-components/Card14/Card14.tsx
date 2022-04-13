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
import Avatar from "../Avatar/Avatar";

const Card14 = ({
	className = "h-full",
	ratio = "aspect-w-5 aspect-h-5",
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
	} = post;
	const postType = postFormats.edges[0]?.node.slug;
	return (
		<div
			className={`nc-Card14 relative flex flex-col group rounded-3xl overflow-hidden ${hoverClass} ${className}`}
			data-nc-id="Card14"
		>
			<a href={link} className={`flex items-start relative w-full ${ratio}`}>
				<NcImage
					containerClassName="absolute inset-0 overflow-hidden"
					className="object-cover w-full h-full rounded-3xl "
					src={featuredImage?.node.sourceUrl}
				/>

				<span className="absolute inset-0 bg-black bg-opacity-40">
					<PostTypeFeaturedIcon
						className="absolute top-4 right-4"
						postType={postType}
						wrapSize="w-8 h-8"
						iconSize="w-4 h-4"
					/>
				</span>
			</a>

			<div className="absolute top-4 inset-x-4 sm:top-5 sm:inset-x-5">
				<CategoryBadgeList itemClass="px-3 py-[6px]" categories={categories} />
			</div>

			<div className="dark absolute bottom-4 inset-x-4 sm:bottom-5 sm:inset-x-5 flex flex-col flex-grow">
				<h2 className="nc-card-title block text-base font-semibold text-white ">
					<a href={link} className="line-clamp-2" title={title}>
						{title}
					</a>
				</h2>

				<div className="p-2 sm:p-2.5 mt-4 sm:mt-5 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-full flex items-center text-neutral-50 text-xs sm:text-sm font-medium">
					<a
						href={author?.node.url + author?.node.uri}
						className="relative flex items-center space-x-2"
					>
						<Avatar
							radius="rounded-full"
							containerClassName="ring-2 ring-white"
							sizeClass="h-7 w-7 text-sm"
							imgUrl={author?.node.avatar?.url}
							userName={author?.node.username}
						/>
						<span className="block text-white truncate">
							{author?.node.name}
						</span>
					</a>
					<>
						<span className=" mx-[6px]">·</span>
						<span className=" font-normal truncate">{ncFormatDate(date)}</span>
					</>
				</div>
			</div>
		</div>
	);
};

export default Card14;
