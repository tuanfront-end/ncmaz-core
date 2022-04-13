import React, { FC } from "react";

const PostCardLikeAction = ({
	favoriteButtonShortcode,
	className = "relative",
}) => {
	return (
		<div
			className={className}
			dangerouslySetInnerHTML={{
				__html: favoriteButtonShortcode,
			}}
		/>
	);
};

export default PostCardLikeAction;
