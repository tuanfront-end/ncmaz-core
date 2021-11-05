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

const Card13 = ({ className = "", post, isSkeleton }) => {
	const { title, link, excerpt, featuredImage, date, postFormats } = post;

	return (
		<div
			className={`nc-Card13 relative flex justify-between ${className}`}
			data-nc-id="Card13"
		>
			<div className="flex flex-col py-2">
				<h2 className={`nc-card-title block font-semibold text-base`}>
					<a href={link} className="line-clamp-2" title={title}>
						{title}
					</a>
				</h2>
				{excerpt && (
					<span className="hidden sm:block my-3 text-neutral-500 dark:text-neutral-400 ">
						<span
							className="line-clamp-2"
							dangerouslySetInnerHTML={{ __html: excerpt }}
						/>
					</span>
				)}
				<span className="mt-4 block sm:hidden text-sm text-neutral-500 ">
					{date}
				</span>
				<div className="mt-auto hidden sm:block">
					<PostCardMeta meta={{ ...post }} />
				</div>
			</div>

			<a
				href={link}
				className={`block relative flex-shrink-0 w-2/5 sm:w-1/3 ml-3 sm:ml-5`}
			>
				<NcImage
					containerClassName="absolute inset-0 rounded-xl sm:rounded-3xl"
					className="object-cover w-full h-full rounded-xl sm:rounded-3xl"
					src={isSkeleton ? "." : featuredImage?.node.sourceUrl}
				/>
				<PostTypeFeaturedIcon
					className="absolute bottom-2 left-2"
					postType={postFormats.edges[0]?.node.slug}
					wrapSize="w-8 h-8"
					iconSize="w-4 h-4"
				/>
			</a>
		</div>
	);
};

export default Card13;
