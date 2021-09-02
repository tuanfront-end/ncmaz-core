import React, { FC } from "react";
import CategoryBadgeList from "../CategoryBadgeList/CategoryBadgeList";
import NcImage from "../NcImage/NcImage";
import PostCardDropdownShare from "../PostCardDropdownShare/PostCardDropdownShare";
import PostCardLikeAndComment from "../PostCardLikeAndComment/PostCardLikeAndComment";
import PostTypeFeaturedIcon from "../PostTypeFeaturedIcon/PostTypeFeaturedIcon";
import PostCardMeta from "../PostCardMeta/PostCardMeta";
import PostCardLikeAction from "../PostCardLikeAction/PostCardLikeAction";
import CardAuthor2 from "../CardAuthor2/CardAuthor2";
import ncFormatDate from "../../utils/formatDate";

const Card9 = ({
	className = "h-full",
	ratio = "aspect-w-3 aspect-h-3 sm:aspect-h-4",
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

	const renderMeta = () => {
		return (
			<div className="inline-flex items-center text-xs text-neutral-300">
				<a href={link} className="block relative">
					<h2 className="block text-lg font-semibold text-white ">
						<span className="line-clamp-2" title={title}>
							{title}
						</span>
					</h2>
					<div className="flex mt-2.5">
						<span className="block text-neutral-200 hover:text-white font-medium truncate">
							{author.node.name}
						</span>
						<span className="mx-[6px] font-medium">·</span>
						<span className="font-normal truncate">{ncFormatDate(date)}</span>
					</div>
				</a>
			</div>
		);
	};

	return (
		<div
			className={`nc-Card9 relative flex flex-col group rounded-3xl overflow-hidden ${hoverClass} ${className}`}
			data-nc-id="Card9"
		>
			<div className="absolute inset-x-0 top-0 p-3 flex items-center justify-between transition-all opacity-0 z-[-1] group-hover:opacity-100 group-hover:z-30 duration-300">
				<PostCardLikeAndComment className="relative" postData={post} />
				<PostCardDropdownShare />
			</div>
			<div className={`flex items-start relative w-full ${ratio}`}></div>
			<a href={link}>
				<NcImage
					containerClassName="absolute inset-0 rounded-3xl"
					className="object-cover w-full h-full rounded-3xl"
					src={isSkeleton ? "." : featuredImage?.node.sourceUrl || "."}
				/>
				<PostTypeFeaturedIcon
					className="absolute top-3 left-3 group-hover:hidden"
					postType={postFormats.edges[0]?.node.name}
					wrapSize="w-7 h-7"
					iconSize="w-4 h-4"
				/>
				<span className="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity"></span>
			</a>
			<a
				href={link}
				className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-black"
			></a>
			<div className="absolute bottom-0 inset-x-0 p-4 flex flex-col flex-grow">
				<a href={link} className="absolute inset-0"></a>
				<div className="mb-3">
					<CategoryBadgeList categories={categories} />
				</div>
				{renderMeta()}
			</div>
		</div>
	);
};

export default Card9;
