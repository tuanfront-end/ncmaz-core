import React, { FC } from "react";
import PostCardCommentBtn from "../PostCardCommentBtn/PostCardCommentBtn";

const PostCardLikeAndComment = ({
	className = "",
	itemClass = "px-3 h-8 text-xs",
	hiddenCommentOnMobile = true,
	postData,
	onClickLike = () => {},
}) => {
	return (
		<div
			className={`nc-PostCardLikeAndComment flex items-center space-x-2 ${className}`}
			data-nc-id="PostCardLikeAndComment"
		>
			<div
				dangerouslySetInnerHTML={{
					__html: postData?.ncPostMetaData?.favoriteButtonShortcode || "",
				}}
			/>

			<PostCardCommentBtn
				href={postData.link}
				commentCount={postData.commentCount || 0}
				className={`${
					hiddenCommentOnMobile ? "hidden sm:flex" : "flex"
				}  ${itemClass}`}
			/>
		</div>
	);
};

export default PostCardLikeAndComment;
