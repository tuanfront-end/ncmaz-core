import React, { FC } from "react";
import ButtonPrimary from "../Button/ButtonPrimary";

const SectionBecomeAnAuthor = ({
	className = "",
	description = `Become an author you can earn extra income by writing articles. Read
	and share new perspectives on just about any topic. Everyone’s welcome.`,
	heading = "Become an author and share your great stories",
	smallText = "supper change your planning powers",
	buttonText = "Become an author",
	buttonHref = "/#",
	rightImg = "https://chisnghiax.com/ncmaz/static/media/BecomeAnAuthorImg.02703848.png",
	rightImgMediaSrcSet = "",
}) => {
	return (
		<div
			className={`nc-SectionBecomeAnAuthor relative flex flex-col lg:flex-row items-center  ${className}`}
			data-nc-id="SectionBecomeAnAuthor"
		>
			<div className="flex-shrink-0 mb-14 lg:mb-0 lg:mr-10 lg:w-2/5">
				<span className="text-xs uppercase tracking-wider font-medium text-neutral-400">
					{smallText}
				</span>
				<h2 className="font-semibold text-3xl sm:text-4xl !mt-3">{heading}</h2>
				<span className="block mt-8 text-neutral-500 dark:text-neutral-400">
					{description}
				</span>
				<ButtonPrimary href={buttonHref} className="mt-8">
					{buttonText}
				</ButtonPrimary>
			</div>
			<div className="flex-grow">
				{!!rightImgMediaSrcSet ? (
					<img
						className="max-w-full"
						src={rightImg}
						alt="become an author image"
						srcSet={rightImgMediaSrcSet}
						sizes="(max-width: 1297px) 100vw, 1297px"
					/>
				) : (
					<img
						className="max-w-full"
						src={rightImg}
						alt="become an author image"
					/>
				)}
			</div>
		</div>
	);
};

export default SectionBecomeAnAuthor;
