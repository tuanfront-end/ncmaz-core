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
import NextPrev from "../NextPrev/NextPrev";

const CardLarge1 = ({
	className = "",
	isShowing = true,
	post,
	isSkeleton,
	onClickNext = () => {},
	onClickPrev = () => {},
}) => {
	const { featuredImage, title, date, categories, author, link } = post;

	if (!isShowing) return null;

	return (
		<div
			className={`nc-CardLarge1 relative flex flex-col-reverse md:flex-row justify-end ${className}`}
		>
			<div className="md:absolute z-10 md:left-0 md:top-1/2 md:transform md:-translate-y-1/2 w-full -mt-8 md:mt-0 px-3 sm:px-6 md:px-0 md:w-3/5 lg:w-1/2 xl:w-2/5">
				<div>
					<div className="p-4 sm:p-8 xl:py-14 md:px-10 bg-white bg-opacity-40 backdrop-filter backdrop-blur-lg shadow-lg rounded-3xl space-y-3 sm:space-y-5 !border-opacity-0 --  nc-dark-box-bg">
						<CategoryBadgeList categories={categories} />

						<h2 className="nc-card-title text-xl sm:text-2xl font-semibold ">
							<a href={link} className="line-clamp-2" title={title}>
								{title}
							</a>
						</h2>

						<CardAuthor2 className="relative" author={author} date={date} />

						<div className="flex items-center justify-between mt-auto">
							<PostCardLikeAndComment postData={post} />
							<PostCardDropdownShare />
						</div>
					</div>
				</div>
				<div className="p-4 sm:pt-8 sm:px-10">
					<NextPrev
						btnClassName="w-11 h-11 text-xl"
						onClickNext={onClickNext}
						onClickPrev={onClickPrev}
					/>
				</div>
			</div>
			<div className="w-full md:w-4/5 lg:w-2/3">
				<NcImage
					containerClassName="aspect-w-16 aspect-h-12 sm:aspect-h-9 md:aspect-h-14 lg:aspect-h-10 2xl:aspect-h-9 relative rounded-3xl"
					className="absolute !w-full !h-full !inset-0 object-cover rounded-3xl"
					src={isSkeleton ? "." : featuredImage?.node.sourceUrl || "."}
				/>
			</div>
		</div>
	);
};

export default CardLarge1;
