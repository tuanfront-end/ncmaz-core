import React, { FC, useState } from "react";
import Heading from "../Heading/Heading";
import NcPlayIcon from "../NcPlayIcon/NcPlayIcon";
import NcPlayIcon2 from "../NcPlayIcon2/NcPlayIcon2";

const SectionVideos = ({
	videoIds = [],
	className = "",
	heading = "",
	subHeading = "",
}) => {
	const [isPlay, setIsPlay] = useState(false);
	const [currentVideo, setCurrentVideo] = useState(0);

	const renderMainVideo = () => {
		const videoId = videoIds[currentVideo];
		return (
			<div className="group aspect-w-16 aspect-h-16 sm:aspect-h-9 bg-neutral-800 rounded-3xl overflow-hidden border-4 border-white dark:border-neutral-900 sm:rounded-[50px] sm:border-[10px]">
				{isPlay ? (
					<iframe
						src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
					></iframe>
				) : (
					<>
						<div
							onClick={() => setIsPlay(true)}
							className="cursor-pointer absolute inset-0 flex items-center justify-center z-10"
						>
							<NcPlayIcon />
						</div>
						<div className="absolute inset-0 ">
							<img
								className="object-cover w-full h-full transform transition-transform group-hover:scale-105 duration-300 nc-will-change-transform"
								src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
							/>
						</div>
					</>
				)}
			</div>
		);
	};

	const renderSubVideo = (videoId, index) => {
		if (index === currentVideo) return null;
		return (
			<div
				className="group relative aspect-h-16 aspect-w-16 rounded-2xl cursor-pointer overflow-hidden sm:aspect-h-12 sm:rounded-3xl lg:aspect-h-9"
				onClick={() => {
					setCurrentVideo(index);
					!isPlay && setIsPlay(true);
				}}
				key={String(index)}
			>
				<div className="absolute inset-0 flex items-center justify-center z-10">
					<NcPlayIcon2 />
				</div>
				<div className="absolute inset-0  w-full h-full">
					<img
						className="object-cover w-full h-full transform transition-transform group-hover:scale-110 duration-300 nc-will-change-transform"
						src={`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`}
					/>
				</div>
			</div>
		);
	};

	return (
		<div className={`nc-SectionVideos ${className}`}>
			<Heading desc={subHeading}>{heading}</Heading>

			<div className="flex flex-col relative sm:pr-4 sm:py-4 md:pr-6 md:py-6 xl:pr-14 xl:py-14 lg:flex-row">
				<div className="absolute -top-4 -bottom-4 -right-4 w-2/3 rounded-3xl bg-primary-100 bg-opacity-40 z-0 sm:rounded-[50px] md:top-0 md:bottom-0 md:right-0 xl:w-1/2 dark:bg-neutral-800 dark:bg-opacity-40"></div>
				<div className="flex-grow relative pb-2 sm:pb-4 lg:pb-0 lg:pr-5 xl:pr-6">
					{renderMainVideo()}
				</div>
				<div className="flex-shrink-0 grid gap-2 grid-cols-4 sm:gap-6 lg:grid-cols-1 lg:w-36 xl:w-40">
					{videoIds.map(renderSubVideo)}
				</div>
			</div>
		</div>
	);
};

export default SectionVideos;
