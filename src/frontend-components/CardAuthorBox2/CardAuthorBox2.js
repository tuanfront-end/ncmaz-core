import React, { FC } from "react";
import Avatar from "../Avatar/Avatar";

const CardAuthorBox2 = ({ className = "", author }) => {
	if (!author) {
		return null;
	}
	const { avatar, id, name, ncUserMeta, url, uri, userId, username } = author;
	const { color, featuredImage, backgroundImage, ncBio } = ncUserMeta;

	return (
		<a
			href={url + uri}
			className={`nc-CardAuthorBox2 flex flex-col overflow-hidden [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ] ${className}`}
			data-nc-id="CardAuthorBox2"
		>
			<div className="relative flex-shrink-0 ">
				<div className="flex aspect-w-7 aspect-h-5 sm:aspect-h-6 w-full h-0">
					<div className="bg-gray-300">
						{backgroundImage?.sourceUrl && (
							<img
								className="!w-full !h-full object-cover"
								src={backgroundImage?.sourceUrl}
							/>
						)}
					</div>
				</div>
				<div className="absolute top-3 inset-x-3 flex">
					<div className=" py-1 px-4 bg-neutral-100 dark:bg-neutral-800 rounded-full flex items-center justify-center leading-none text-xs font-medium">
						<i className="las la-angle-right "></i>
					</div>
				</div>
			</div>

			<div className="-mt-8 m-8 text-center">
				<Avatar
					containerClassName="ring-2 ring-white"
					sizeClass="w-16 h-16 text-2xl"
					radius="rounded-full"
					imgUrl={featuredImage?.sourceUrl || avatar?.url}
					userName={username}
				/>
				<div className="mt-3">
					<h2 className={`text-base font-medium`}>
						<span className="line-clamp-1">{name}</span>
					</h2>
					<span
						className={`block mt-1 text-sm text-neutral-500 dark:text-neutral-400`}
					>
						{ncBio}
					</span>
				</div>
			</div>
		</a>
	);
};

export default CardAuthorBox2;
