import React, { FC } from "react";
import Card10V2 from "../Card10/Card10V2";
import Card11 from "../Card11/Card11";
import Card2 from "../Card2/Card2";
import Card6 from "../Card6/Card6";
import Card9 from "../Card9/Card9";
import Card8 from "../Card8/Card8";
import Card12 from "../Card12/Card12";
import Card13 from "../Card13/Card13";
import NcImage from "../NcImage/NcImage";
import CardAuthor2 from "../CardAuthor2/CardAuthor2";
import PostCardMeta from "../PostCardMeta/PostCardMeta";

const SectionMagazine6 = ({ activePosts, isLoading }) => {
	const renderMain = () => {
		const {
			featuredImage,
			author,
			title,
			date,
			excerpt,
			link,
			ncPostMetaData,
		} = activePosts[0].node;
		const subPosts = activePosts.filter((_, i) => i > 0);
		return (
			<main className="relative">
				{/* Image */}
				<div className="aspect-w-9 aspect-h-9 md:aspect-h-5 rounded-3xl lg:rounded-[40px] overflow-hidden">
					<NcImage
						containerClassName="absolute inset-0"
						src={featuredImage?.node.sourceUrl}
					/>
					<div>
						<span className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black"></span>
					</div>

					{/* CONTENT */}
					<div className="group dark absolute md:w-1/2 lg:w-2/3 max-w-2xl flex flex-col justify-end p-5 lg:p-14">
						<div className="">
							<h2 className="nc-card-title text-2xl lg:text-3xl xl:text-4xl font-semibold text-white">
								<a href={link} className="line-clamp-2">
									{title}
								</a>
							</h2>
							{excerpt && (
								<span className="hidden lg:block text-base text-neutral-200 mt-5">
									<span
										className="line-clamp-2"
										dangerouslySetInnerHTML={{ __html: excerpt }}
									/>
								</span>
							)}
						</div>

						<div className="mt-7">
							<CardAuthor2
								hoverReadingTime={false}
								readingTimeShortcode={ncPostMetaData.readingTimeShortcode || ""}
								date={date}
								author={author}
							/>
						</div>
					</div>
				</div>

				{/* RIGHT */}
				<div className="md:absolute mt-5 md:mt-0 h-96 md:h-auto md:right-3 md:top-3 md:bottom-3 md:w-1/2 lg:w-1/3 p-5 lg:p-8 bg-neutral-100 md:bg-white md:dark:bg-neutral-900 dark:bg-neutral-800 xl:bg-opacity-80 xl:dark:bg-opacity-80 xl:backdrop-filter xl:backdrop-blur-xl rounded-3xl lg:rounded-[34px] overflow-hidden">
					<div className="flow-root h-full w-full overflow-y-auto hiddenScrollbar">
						<div className="-my-5 md:-my-7 divide-y divide-neutral-200 dark:divide-neutral-700">
							{subPosts.map((post, i) => (
								<div key={i} className="block py-5 lg:py-7">
									<h2 className="nc-card-title text-base font-semibold">
										<a
											title={post.node.title}
											href={post.node.link}
											className="line-clamp-2"
										>
											{post.node.title}
										</a>
									</h2>
									<PostCardMeta className="mt-4" meta={post.node} />
								</div>
							))}
						</div>
					</div>
				</div>
			</main>
		);
	};

	return <div>{activePosts[0] && renderMain()}</div>;
};

export default SectionMagazine6;
