import React, { FC } from "react";
import NcImage from "../NcImage/NcImage";
import PostCardMeta from "../PostCardMeta/PostCardMeta";

const Card3Small = ({ className = "h-full", post }) => {
	console.log(11, { post });
	const { title, link, featuredImage } = post;

	return (
		<div
			className={`nc-Card3Small relative flex flex-col-reverse sm:flex-row sm:justify-between sm:items-center ${className}`}
			data-nc-id="Card3Small"
		>
			<a href={link} className=" absolute inset-0" title={title}></a>
			<div className="relative space-y-2">
				<PostCardMeta meta={{ ...post }} />
				<h2 className="nc-card-title block text-base font-semibold text-neutral-900 dark:text-neutral-100">
					<a href={link} className=" line-clamp-2" title={title}>
						{title}
					</a>
				</h2>
			</div>

			<a
				href={link}
				title={title}
				className={`block sm:w-20 flex-shrink-0 relative rounded-lg overflow-hidden mb-5 sm:ml-4 sm:mb-0 group`}
			>
				<div className={`w-full h-0 aspect-w-16 aspect-h-9 sm:aspect-h-16`}>
					<NcImage
						containerClassName="absolute inset-0"
						className="nc-will-change-transform object-cover w-full h-full group-hover:scale-110 transform transition-transform duration-300"
						src={featuredImage?.node?.sourceUrl}
						title={title}
					/>
				</div>
			</a>
		</div>
	);
};

export default Card3Small;
